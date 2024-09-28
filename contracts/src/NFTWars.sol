// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTWars is ERC721URIStorage, Ownable {
    struct NFT {
        uint256 id;
        string uri;
        uint256 supply;
        uint256 price;
        uint256 mintedCount;
    }

    mapping(uint256 => NFT) public nfts;
    uint256 public nextTokenId;
    uint256 public constant MAX_NFTS_PER_USER = 5;
    mapping(address => uint256) public userMintCount;
    string[5] public initialTokenURIs;

    event NFTListed(uint256 indexed id, string uri, uint256 supply, uint256 price);
    event NFTMinted(uint256 indexed id, address indexed user);

    constructor() ERC721("NFTWars", "NFTW") Ownable(msg.sender) {
        initialTokenURIs = [
            "https://moccasin-main-swallow-934.mypinata.cloud/ipfs/QmUik1VFPvWfLDJmtMWUY8T8zdVgR7onAKNJGgfXyWUgCY",
            "https://moccasin-main-swallow-934.mypinata.cloud/ipfs/QmQHsH1c4J5PJLixC54uDUaHNobQPaCTRewLdNF8fUonG5",
            "https://moccasin-main-swallow-934.mypinata.cloud/ipfs/Qmc7U1bubss4xdU95Quaua121RcX7ebtta4DjwZJhGrZWw",
            "https://moccasin-main-swallow-934.mypinata.cloud/ipfs/Qmduvpn72G5ecD1yshUyF8d4CKhgC4U2pctCzCAwUDaRL3",
            "https://moccasin-main-swallow-934.mypinata.cloud/ipfs/Qmb1Gpz1a3UJ8kaY5CYf4qPRk5o4JABe5tenc5e1Z5Y3rL"
        ];
    }

    function listNFT(string memory uri, uint256 supply, uint256 price) external onlyOwner {
        require(supply > 0, "Supply must be greater than zero");
        nfts[nextTokenId] = NFT(nextTokenId, uri, supply, price, 0);
        emit NFTListed(nextTokenId, uri, supply, price);
        nextTokenId++;
    }

    function mintBuyNFT(uint256 tokenId) external payable {
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

    function mintInitialNFT(uint256 count) external {
        require(count <= MAX_NFTS_PER_USER, "Cannot mint more than 5 NFTs at once");
        
        uint256 userCount = userMintCount[msg.sender];
        require(userCount + count <= MAX_NFTS_PER_USER, "User has already claimed maximum NFTs");

        for (uint256 i = 0; i < count; i++) {
            require(nextTokenId < initialTokenURIs.length, "No more initial NFTs available to mint");
            
            uint256 tokenId = nextTokenId;
            _safeMint(msg.sender, tokenId);
            _setTokenURI(tokenId, initialTokenURIs[tokenId]);
            emit NFTMinted(tokenId, msg.sender);
            nextTokenId++;
        }

        userMintCount[msg.sender] += count;
    }

    function withdraw() external onlyOwner {
        require(address(this).balance > 0, "No funds to withdraw");
        payable(owner()).transfer(address(this).balance);
    }
}

// https://xt4scan.ngd.network/tx/0x882b60e564b192da521ad16fa9b2188ada2cf0d2ca4e290778193e5eace4fcda?tab=token_transfers