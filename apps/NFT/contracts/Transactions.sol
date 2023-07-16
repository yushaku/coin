// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
  uint TransactionCounter;
  event Transfer(address _from, address _receiver, uint _amount, string memory _message, uint _timestamp, string keywork); 

}
