
// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract NFT is ERC721URIStorage {
	uint256 public tokenCounter;

	constructor() ERC721 ('DOG','DG'){
		tokenCounter = 0;
	}

	function createCollectible(string memory tokenURI) public returns (uint256) {
		uint256 newItemId = tokenCounter;
		_safeMint(msg.sender, newItemId);
		_setTokenURI(newItemId, tokenURI);
		tokenCounter++;
		return newItemId;
	}
}

