// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import "@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import "@uniswap/v3-core/contracts/libraries/TickMath.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol";
import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/base/LiquidityManagement.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract Liquidity is IERC721Receiver {
  INonfungiblePositionManager public immutable nonfungiblePositionManager;

  address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
  address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
  uint24 public constant poolFee = 3000; // the pool fee to 0.3%.

  /// @notice Represents the deposit of an NFT
  struct Deposit {
    address owner;
    uint128 liquidity;
    address token0;
    address token1;
  }

  mapping(uint256 => Deposit) public deposits;

  constructor(INonfungiblePositionManager _nonfungiblePositionManager) {
    nonfungiblePositionManager = _nonfungiblePositionManager;
  }

  // allow the contract to custody ERC721 tokens,
  // implement the onERC721Received function within the inherited IERC721Receiver.sol contract.
  function onERC721Received(
    address operator,
    address,
    uint256 tokenId,
    bytes calldata
  ) external override returns (bytes4) {
    // get position information
    _createDeposit(operator, tokenId);
    return this.onERC721Received.selector;
  }

  function _createDeposit(address owner, uint256 tokenId) internal {
    // prettier-ignore
    (,,address token0, address token1,,,,uint128 liquidity,,,,) = nonfungiblePositionManager.positions(tokenId);

    // operator is msg.sender
    deposits[tokenId] = Deposit({
      owner: owner,
      liquidity: liquidity,
      token0: token0,
      token1: token1
    });
  }

  /// @notice Transfers funds to owner of NFT
  function _sendToOwner(
    uint256 tokenId,
    uint256 amount0,
    uint256 amount1
  ) internal {
    // get owner of contract
    address owner = deposits[tokenId].owner;
    address token0 = deposits[tokenId].token0;
    address token1 = deposits[tokenId].token1;
    // send collected fees to owner
    TransferHelper.safeTransfer(token0, owner, amount0);
    TransferHelper.safeTransfer(token1, owner, amount1);
  }

  /// @notice Calls the mint function defined in periphery, mints the same amount of each token.
  function mintNewPosition()
    external
    returns (
      uint256 tokenId,
      uint128 liquidity, //amount of liquidity for the position
      uint256 amountTokenA,
      uint256 amountTokenB
    )
  {
    // Providing liquidity in both assets means liquidity will be earning fees and is considered in-range.
    uint256 amountTokenAToMint = 1000;
    uint256 amountTokenBToMint = 1000;

    // Approve the position manager
    // prettier-ignore
    TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager), amountTokenAToMint);

    // prettier-ignore
    TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager), amountTokenBToMint);

    INonfungiblePositionManager.MintParams
      memory params = INonfungiblePositionManager.MintParams({
        token0: DAI,
        token1: USDC,
        fee: poolFee,
        tickLower: TickMath.MIN_TICK,
        tickUpper: TickMath.MAX_TICK,
        amount0Desired: amountTokenAToMint,
        amount1Desired: amountTokenBToMint,
        amount0Min: 0,
        amount1Min: 0,
        recipient: address(this),
        deadline: block.timestamp
      });

    // Note that the pool defined by DAI/USDC and fee tier 0.3% must already be created and initialized in order to mint
    // prettier-ignore
    ( tokenId, liquidity, amountTokenA, amountTokenB) = nonfungiblePositionManager.mint(params);

    _createDeposit(msg.sender, tokenId);

    // Remove allowance and refund in both assets.
    if (amountTokenA < amountTokenAToMint) {
      TransferHelper.safeApprove(DAI, address(nonfungiblePositionManager), 0);
      uint256 refund0 = amountTokenAToMint - amountTokenA;
      TransferHelper.safeTransfer(DAI, msg.sender, refund0);
    }

    if (amountTokenB < amountTokenBToMint) {
      TransferHelper.safeApprove(USDC, address(nonfungiblePositionManager), 0);
      uint256 refund1 = amountTokenBToMint - amountTokenB;
      TransferHelper.safeTransfer(USDC, msg.sender, refund1);
    }
  }

  /// @notice Collects the fees associated with provided liquidity
  /// @dev The contract must hold the erc721 token before it can collect fees
  /// @param tokenId The id of the erc721 token
  /// @return amount0 The amount of fees collected in token0
  /// @return amount1 The amount of fees collected in token1
  function collectAllFees(
    uint256 tokenId
  ) external returns (uint256 amount0, uint256 amount1) {
    // Caller must own the ERC721 position
    // Call to safeTransfer will trigger `onERC721Received` which must return the selector else transfer will fail
    // prettier-ignore
    nonfungiblePositionManager.safeTransferFrom(msg.sender, address(this), tokenId);

    // set amount0Max and amount1Max to uint256.max to collect all fees
    // alternatively can set recipient to msg.sender and avoid another transaction in `sendToOwner`
    INonfungiblePositionManager.CollectParams
      memory params = INonfungiblePositionManager.CollectParams({
        tokenId: tokenId,
        recipient: address(this),
        amount0Max: type(uint128).max,
        amount1Max: type(uint128).max
      });

    (amount0, amount1) = nonfungiblePositionManager.collect(params);
    _sendToOwner(tokenId, amount0, amount1);
  }

  /// @notice A function that decreases the current liquidity by half.
  /// An example to show how to call the `decreaseLiquidity` function defined in periphery.
  /// @param tokenId The id of the erc721 token
  /// @return amount0 The amount received back in token0
  /// @return amount1 The amount returned back in token1
  function decreaseLiquidityInHalf(
    uint256 tokenId
  ) external returns (uint256 amount0, uint256 amount1) {
    // caller must be the owner of the NFT
    require(msg.sender == deposits[tokenId].owner, "Not the owner");
    // get liquidity data for tokenId
    uint128 liquidity = deposits[tokenId].liquidity;
    uint128 halfLiquidity = liquidity / 2;

    // amount0Min and amount1Min are price slippage checks
    // if the amount received after burning is not greater than these minimums, transaction will fail
    INonfungiblePositionManager.DecreaseLiquidityParams
      memory params = INonfungiblePositionManager.DecreaseLiquidityParams({
        tokenId: tokenId,
        liquidity: halfLiquidity,
        amount0Min: 0,
        amount1Min: 0,
        deadline: block.timestamp
      });

    (amount0, amount1) = nonfungiblePositionManager.decreaseLiquidity(params);
    _sendToOwner(tokenId, amount0, amount1);
  }

  /// @notice Increases liquidity in the current range
  /// @dev Pool must be initialized already to add liquidity
  function increaseLiquidityCurrentRange(
    uint256 tokenId,
    uint256 amountAdd0,
    uint256 amountAdd1
  ) external returns (uint128 liquidity, uint256 amount0, uint256 amount1) {
    INonfungiblePositionManager.IncreaseLiquidityParams
      memory params = INonfungiblePositionManager.IncreaseLiquidityParams({
        tokenId: tokenId,
        amount0Desired: amountAdd0,
        amount1Desired: amountAdd1,
        amount0Min: 0,
        amount1Min: 0,
        deadline: block.timestamp
      });

    // prettier-ignore
    (liquidity, amount0, amount1) = nonfungiblePositionManager.increaseLiquidity(params);
  }

  /// @notice Transfers the NFT to the owner
  /// @param tokenId The id of the erc721
  function retrieveNFT(uint256 tokenId) external {
    // must be the owner of the NFT
    require(msg.sender == deposits[tokenId].owner, "Not the owner");
    // transfer ownership to original owner
    nonfungiblePositionManager.safeTransferFrom(
      address(this),
      msg.sender,
      tokenId
    );
    //remove information related to tokenId
    delete deposits[tokenId];
  }
}
