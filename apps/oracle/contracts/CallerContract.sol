// SPDX-License-Identifier: MIT
pragma solidity =0.7.6;

import "./lib/EthPriceOracleInterface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CallerContract is Ownable {
  EthPriceOracleInterface private oracleInstance;

  address private oracleAddress;
  uint256 private ethPrice;
  mapping(uint256 => bool) myRequests;

  event newOracleAddressEvent(address oracleAddress);
  event ReceivedNewRequestIdEvent(uint256 id);
  event PriceUpdatedEvent(uint256 ethPrice, uint256 id);

  modifier onlyOracle() {
    require(msg.sender == oracleAddress, "You are not authorized.");
    _;
  }

  function setOracleInstanceAddress(
    address _oracleInstanceAddress
  ) public onlyOwner {
    oracleAddress = _oracleInstanceAddress;
    oracleInstance = EthPriceOracleInterface(oracleAddress);
    emit newOracleAddressEvent(oracleAddress);
  }

  function updateEthPrice() public {
    uint256 id = oracleInstance.getLatestEthPrice();
    myRequests[id] = true;
    emit ReceivedNewRequestIdEvent(id);
  }

  function callback(uint256 _ethPrice, uint256 _id) public onlyOracle {
    require(myRequests[_id], "This request is not in my pending list.");
    ethPrice = _ethPrice;
    delete myRequests[_id];
    emit PriceUpdatedEvent(_ethPrice, _id);
  }
}
