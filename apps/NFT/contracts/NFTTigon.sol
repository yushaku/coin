// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTTigon is ERC721, Ownable {
    address public contract_owner;

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        contract_owner = msg.sender;
    }

    function list(string memory _name, uint _cost) public {
        //
    }
}
