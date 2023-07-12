// SPDX-License-Identifier: MIT
pragma solidity =0.8.18;

import "./zombiefactory.sol";
import "./interface/kitty.sol";

contract ZombieFeeding is ZombieFactory {
  KittyInterface kittyContract;

  modifier onlyOwnerOf(uint _zombieId) {
    require(msg.sender == zombieToOwner[_zombieId]);
    _;
  }

  function setKittyContractAddress(address _address) external onlyOwner {
    kittyContract = KittyInterface(_address);
  }

  function _triggerCooldown(Zombie storage _zombie) internal {
    _zombie.readyTime = uint32(block.timestamp + cooldownTime);
  }

  function feedAndMultiply(
    uint _zombieId,
    uint _targetDna,
    string memory _species
  ) public onlyOwnerOf(_zombieId) {
    Zombie storage myZombie = zombies[_zombieId];
    _targetDna = _targetDna % dnaModulus;
    uint newDna = (myZombie.dna + _targetDna) / 2;
    if (
      keccak256(abi.encodePacked(_species)) ==
      keccak256(abi.encodePacked("kitty"))
    ) {
      newDna = newDna - (newDna % 100) + 99;
    }
    _createZombie("NoName", newDna);
    _triggerCooldown(myZombie);
  }

  function feedOnKitty(uint _zombieId, uint _kittyId) public {
    uint kittyDna;
    (, , , , , , , , , kittyDna) = kittyContract.getKitty(_kittyId);
    feedAndMultiply(_zombieId, kittyDna, "kitty");
  }
}
