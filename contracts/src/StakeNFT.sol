// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakeNFT is Ownable {
    IERC721 public nftCollection;

    struct Staker {
        uint256[] stakedNFTs;
        uint256 stakingTime;
    }

    mapping(address => Staker) public stakers;

    event NFTStaked(address indexed user, uint256[] tokenIds);
    event NFTUnstaked(address indexed user, uint256[] tokenIds);

    constructor(IERC721 _nftCollection) Ownable(msg.sender){
        nftCollection = _nftCollection;
    }

    function stakeNFTs(uint256[] calldata tokenIds) external {
        require(tokenIds.length == 5, "You must stake exactly 5 NFTs");
        
        for (uint256 i = 0; i < tokenIds.length; i++) {
            require(nftCollection.ownerOf(tokenIds[i]) == msg.sender, "You do not own this NFT");
            nftCollection.transferFrom(msg.sender, address(this), tokenIds[i]);
        }

        stakers[msg.sender].stakedNFTs = tokenIds;
        stakers[msg.sender].stakingTime = block.timestamp;

        emit NFTStaked(msg.sender, tokenIds);
    }

    function unstakeNFTs() external {
        uint256[] memory stakedNFTs = stakers[msg.sender].stakedNFTs;
        require(stakedNFTs.length == 5, "No NFTs staked");

        for (uint256 i = 0; i < stakedNFTs.length; i++) {
            nftCollection.transferFrom(address(this), msg.sender, stakedNFTs[i]);
        }

        delete stakers[msg.sender];

        emit NFTUnstaked(msg.sender, stakedNFTs);
    }

    function getStakedNFTs(address user) external view returns (uint256[] memory) {
        return stakers[user].stakedNFTs;
    }
}

// https://xt4scan.ngd.network/tx/0x71a9fdbca7c3be45b7ad149f510f085d017cba9c3276f72a2d1c4681f67e1741