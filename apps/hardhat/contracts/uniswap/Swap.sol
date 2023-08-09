// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;

// abicoder v2 to allow arbitrary nested arrays and structs to be encoded and decoded in calldata, a feature used when executing a swap
pragma abicoder v2;

import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";

contract SimpleSwap {
  ISwapRouter public immutable swapRouter;
  address public constant DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
  address public constant WETH9 = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
  address public constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
  uint24 public constant poolFee = 3000; // the pool fee to 0.3%.

  constructor(ISwapRouter _swapRouter) {
    swapRouter = _swapRouter;
  }

  function swapWETHForDAI(
    uint256 amountIn
  ) external returns (uint256 amountOut) {
    // Transfer the specified amount of WETH9 to this contract.
    TransferHelper.safeTransferFrom(WETH9, msg.sender, address(this), amountIn);
    // Approve the router to spend WETH9.
    TransferHelper.safeApprove(WETH9, address(swapRouter), amountIn);
    // Note: To use this example, you should explicitly set slippage limits, omitting for simplicity
    uint256 minOut = 0; /* Calculate min output */
    uint160 priceLimit = 0; /* Calculate price limit */

    // Create the params that will be used to execute the swap
    ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
      .ExactInputSingleParams({
        tokenIn: WETH9,
        tokenOut: DAI,
        fee: poolFee,
        recipient: msg.sender,
        deadline: block.timestamp,
        amountIn: amountIn,
        amountOutMinimum: minOut,
        sqrtPriceLimitX96: priceLimit
      });
    // The call to `exactInputSingle` executes the swap.
    amountOut = swapRouter.exactInputSingle(params);
  }

  /// @notice swapExactInputSingle swaps a fixed amount of DAI for a maximum possible amount of WETH9
  /// using the DAI/WETH9 0.3% pool by calling `exactInputSingle` in the swap router.
  /// @dev The calling address must approve this contract to spend at least `amountIn` worth of its DAI for this function to succeed.
  /// @param amountIn The exact amount of DAI that will be swapped for WETH9.
  /// @return amountOut The amount of WETH9 received.
  function swapExactInputSingle(
    uint256 amountIn
  ) external returns (uint256 amountOut) {
    // Transfer the specified amount of DAI to this contract.
    TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountIn);

    // Approve the router to spend DAI.
    TransferHelper.safeApprove(DAI, address(swapRouter), amountIn);

    ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
      .ExactInputSingleParams({
        tokenIn: DAI,
        tokenOut: WETH9,
        fee: poolFee,
        recipient: msg.sender,
        deadline: block.timestamp,
        amountIn: amountIn,
        amountOutMinimum: 0,
        sqrtPriceLimitX96: 0
      });

    // executes the swap.
    amountOut = swapRouter.exactInputSingle(params);
  }

  function swapExactOutputSingle(
    uint256 amountOut,
    uint256 amountInMaximum
  ) external returns (uint256 amountIn) {
    // Transfer the specified amount of DAI to this contract.
    // prettier-ignore
    TransferHelper.safeTransferFrom(DAI, msg.sender, address(this), amountInMaximum);

    // Approve the router to spend the specified `amountInMaximum` of DAI.
    // In production, you should choose the maximum amount to spend based on oracles or other data sources to achieve a better swap.
    TransferHelper.safeApprove(DAI, address(swapRouter), amountInMaximum);

    ISwapRouter.ExactOutputSingleParams memory params = ISwapRouter
      .ExactOutputSingleParams({
        tokenIn: DAI,
        tokenOut: WETH9,
        fee: poolFee,
        recipient: msg.sender,
        deadline: block.timestamp,
        amountOut: amountOut,
        amountInMaximum: amountInMaximum,
        sqrtPriceLimitX96: 0
      });

    // Executes the swap returning the amountIn needed to spend to receive the desired amountOut.
    amountIn = swapRouter.exactOutputSingle(params);

    // For exact output swaps, the amountInMaximum may not have all been spent.
    // If the actual amount spent (amountIn) < the specified maximum amountIn
    // we must refund the msg.sender and approve the swapRouter to spend 0.
    if (amountIn < amountInMaximum) {
      TransferHelper.safeApprove(DAI, address(swapRouter), 0);
      TransferHelper.safeTransfer(DAI, msg.sender, amountInMaximum - amountIn);
    }
  }
}
