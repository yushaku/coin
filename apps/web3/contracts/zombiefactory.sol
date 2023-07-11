// SPDX-License-Identifier: MIT
pragma solidity =0.8.18;

import "./ownable.sol";

contract ZombieFactory is Ownable {
  event NewZombie(uint zombieId, string name, uint dna);

  uint dnaDigits = 16;
  uint dnaModulus = 10 ** dnaDigits;
  uint cooldownTime = 1 days;

  struct Zombie {
    string name;
    uint dna;
    uint32 level;
    uint32 readyTime;
  }

  Zombie[] public zombies;

  mapping(uint => address) public zombieToOwner;
  mapping(address => uint) ownerZombieCount;

  function _createZombie(string memory _name, uint _dna) internal {
    uint32 readytime = uint32(block.timestamp + cooldownTime);
    Zombie memory zombie = Zombie(_name, _dna, 1, readytime);
    zombies.push(zombie);

    uint id = zombies.length - 1;
    zombieToOwner[id] = msg.sender;
    ownerZombieCount[msg.sender]++;

    emit NewZombie(id, _name, _dna);
  }

  function _generateRandomDna(string memory _str) private view returns (uint) {
    uint rand = uint(keccak256(abi.encodePacked(_str)));
    return rand % dnaModulus;
  }

  function createRandomZombie(string memory _name) public {
    require(ownerZombieCount[msg.sender] == 0);
    uint randDna = _generateRandomDna(_name);
    randDna = randDna - (randDna % 100);
    _createZombie(_name, randDna);
  }
}
