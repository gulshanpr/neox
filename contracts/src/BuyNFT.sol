// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BuyNFT is ERC721URIStorage, Ownable {
    struct NFT {
        uint256 id;
        string uri;
        uint256 supply;
        uint256 price;
        uint256 mintedCount;
    }

    mapping(uint256 => NFT) public nfts;
    uint256 public nextTokenId;

    event NFTListed(uint256 indexed id, string uri, uint256 supply, uint256 price);
    event NFTMinted(uint256 indexed id, address indexed user);

    constructor() ERC721("BuyNFT", "BNFT") Ownable(msg.sender) {}

    function listNFT(string memory uri, uint256 supply, uint256 price) external onlyOwner {
        require(supply > 0, "Supply must be greater than zero");
        nfts[nextTokenId] = NFT(nextTokenId, uri, supply, price, 0);
        emit NFTListed(nextTokenId, uri, supply, price);
        nextTokenId++;
    }

    function mintNFT(uint256 tokenId) external payable {
        NFT storage nft = nfts[tokenId];
        require(nft.supply > 0, "NFT is not available for minting");
        require(nft.mintedCount < nft.supply, "All tokens have been minted");
        require(msg.value >= nft.price, "Insufficient payment");

        nft.mintedCount++;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, nft.uri);

        emit NFTMinted(tokenId, msg.sender);

        if (msg.value > nft.price) {
            payable(msg.sender).transfer(msg.value - nft.price);
        }
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
