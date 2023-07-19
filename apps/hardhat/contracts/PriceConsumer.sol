// SPDX-License-Identifier: MIT
pragma solidity =0.8.18;

// import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";
import "./lib/AggregatorV3Interface.sol";

contract PriceConsumer {
  AggregatorV3Interface public priceFeed;

  address ETHEREUM_MAINNET_ETH_USD = 0x8A753747A1Fa494EC906cE90E9f37563A8AF630e;

  constructor() {
    priceFeed = AggregatorV3Interface(ETHEREUM_MAINNET_ETH_USD);
  }

  function getLatestPrice() public view returns (int) {
    (, int price, , , ) = priceFeed.latestRoundData();
    return price;
  }

  function getDecimals() public view returns (uint8) {
    uint8 decimals = priceFeed.decimals();
    return decimals;
  }
}
