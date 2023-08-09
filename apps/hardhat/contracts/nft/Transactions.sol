// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
  uint transactionCounter;
  event Transfer(
    address _from,
    address _receiver,
    uint _amount,
    string _message,
    uint _timestamp,
    string keyword
  );

  struct TransferStruct {
    address sender;
    address reseiver;
    uint amount;
    string message;
    uint timestamp;
    string keyword;
  }

  TransferStruct[] transactions;

  function addToBlock(
    address payable receiver,
    uint amount,
    string memory message,
    string memory keyword
  ) public {
    transactionCounter += 1;
    transactions.push(
      TransferStruct(
        msg.sender,
        receiver,
        amount,
        message,
        block.timestamp,
        keyword
      )
    );
    emit Transfer(
      msg.sender,
      receiver,
      amount,
      message,
      block.timestamp,
      keyword
    );
  }

  function getAllTransactions() public view returns (TransferStruct[] memory) {
    return transactions;
  }

  function getTransactionCount() public view returns (uint) {
    return transactionCounter;
  }
}
