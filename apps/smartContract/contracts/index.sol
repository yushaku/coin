pragma solidity >=0.5.0 <0.8.0;

contract Lottery {
  address public manager;

  constructor(string name) public {
    manager = msg.sender;
    
  }
}
