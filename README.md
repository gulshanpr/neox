<h1>NFT Wars: Card Battle game</h1>
    <h1>Description</h1>
    <p>
        This is a turn-based NFT card game where two players compete against each other for the ultimate reward—an NFT from the opponent's collection. Each player starts with 4 cards in hand and takes turns placing cards on the table to battle. Cards attack each other to reduce the opponent's card health (HP), and the game continues until one player is unable to play or has no cards left on the board.
    </p>
    <h1>Business Model</h1>
<p>
    The NFT Card Battle Game presents a unique opportunity for NeoX Chain to create a profitable and sustainable business model by leveraging the growing trend of NFT-based gaming. Below are several ways NeoX can capitalize on this project:
</p>

<h3>1. NeoX Exclusive Game</h3>
<p>
    By making the NFT Card Battle Game exclusive to the NeoX chain, NeoX can attract a dedicated player base and boost the chain's usage. Players who want to participate in the game will need to mint their cards and trade on NeoX, creating higher transaction volumes and engagement on the platform. 
</p>

<h3>2. NFT Trading and Marketplace</h3>
<p>
    Players who win NFTs from the game can trade them on the NeoX marketplace, fostering an in-game economy. NeoX can earn a small percentage of each trade or transaction, whether it's an NFT being traded for NeoX tokens, other assets, or even real-world goods. The ability to seamlessly trade in-game assets for tokens or other assets adds a strong incentive for players to engage in the game and the ecosystem.
</p>

<h3>3. Exclusive Rare NFTs</h3>
<p>
    NeoX can issue exclusive NFTs, such as rare and powerful cards, which players can bid for in special events or tournaments. These rare cards could be limited editions, making them highly sought-after and valuable. NeoX could host auctions for these exclusive NFTs, taking a commission on each successful bid. This model not only incentivizes players to participate but also creates a potential revenue stream through regular releases of rare or special edition cards.
</p>


<h3>4. Tournaments and Competitive Play</h3>
<p>
    NeoX can organize and host exclusive competitive tournaments where players pay an entry fee in NeoX tokens. Winners can receive rewards such as rare NFTs, token prizes, or exclusive items. NeoX can take a percentage of the entry fees or sponsor high-profile tournaments to generate buzz and excitement around the game.
</p>


<h3>5. Staking and Earning Mechanisms</h3>
<p>
    NeoX could introduce staking mechanisms, where players stake their NeoX tokens in order to unlock special game modes, rare cards, or tournaments. Stakers could earn rewards for participating in the game, with NeoX collecting a portion of the staked tokens or transaction fees.
</p>

<h3>6. NeoX Token Utility</h3>
<p>
    The integration of NeoX tokens as the in-game currency would increase its utility, driving demand for the token. Players could use the token for various in-game transactions, such as purchasing cards, paying tournament entry fees, or trading assets, thus fostering a strong token economy.
</p>

<h3>7. Advertising and Sponsorship</h3>
<p>
    The game could also generate revenue through advertising and sponsorship deals. High-profile events, tournaments, or game updates could be sponsored by brands, with NeoX taking a portion of the revenue generated from advertising within the game's ecosystem.
</p>

<p>
    By implementing these strategies, NeoX Chain can create a vibrant, player-driven economy around the NFT Card Battle Game while establishing itself as a profitable and innovative player in the blockchain gaming space.
</p>
    <h3>Game Mechanics</h3>
    <ul>
        <li><strong>Players:</strong> Two players per game.</li>
        <li><strong>Cards:</strong> Each player starts with 4 NFT cards.</li>
        <li><strong>Objective:</strong> Attack and eliminate the opponent's cards until the opponent has no playable cards left.</li>
        <li><strong>Victory Condition:</strong> A player loses when they have no cards left in hand or on the board.</li>
    </ul>
    <h2>Tech Stack</h2>
    <ul>
        <li><strong>Frontend:</strong> <a href="https://nextjs.org/">Next.js</a> is used to build the user interface for the game.</li>
        <li><strong>Backend:</strong> The game logic and smart contracts are written in <a href="https://soliditylang.org/">Solidity</a>.</li>
        <li><strong>Blockchain:</strong> The NFTs are minted on the <strong>NeoX Chain</strong>.</li>
        <li><strong>Interaction with Smart Contracts:</strong> <a href="https://docs.ethers.io/v5/">Ether.js</a> is used to interact with the Ethereum-compatible NeoX chain.</li>
        <li><strong>used <a href = "https://pinata.cloud/">pinata</a> for storing images</strong></li>
    </ul>
    <h2>How to Play</h2>
    <ol>
        <li><strong>Connect Wallet:</strong> Players must connect their NeoX wallets to the game interface.</li>
        <li><strong>Card Selection:</strong> Each player will start with 4 cards in hand.</li>
        <li><strong>Gameplay:</strong>
            <ul>
                <li>Players take turns placing one card on the table.</li>
                <li>Cards attack each other, and the attack reduces the HP of the opponent’s card.</li>
            </ul>
        </li>
        <li><strong>Winning the Game:</strong> The first player to reduce all the opponent's cards to zero HP, or leave the opponent without any cards on the board or in hand, wins the game.</li>
        <li><strong>Reward:</strong> The winner gets one of the opponent's NFTs as a reward.</li>
    </ol>
    <h2>Prerequisites</h2>
    <p>To run the project locally, ensure you have the following installed:</p>
    <ul>
        <li><strong>Node.js:</strong> <a href="https://nodejs.org/">Node.js</a></li>
        <li><strong>MetaMask or other NeoX wallet:</strong> <a href="https://metamask.io/">MetaMask</a></li>
        <li><strong>NeoX Chain:</strong> Ensure you have a NeoX wallet connected to the appropriate blockchain.</li>
    </ul>
    <h2>Getting Started</h2>
    <h3>1. Clone the repository</h3>
    <pre><code>git clone https://github.com/gulshanpr/neox.git
cd nft-card-game
    </code></pre>
    <h3>2. Install dependencies</h3>
    <pre><code>npm install
    </code></pre>
    <h3>3. Set up environment variables</h3>
    <p>Create a <code>.env</code> file in the root of your project and add your environment variables such as API keys, blockchain node URL, and contract addresses.</p>
    <pre><code>REACT_APP_CONTRACT_ADDRESS=your_contract_address
REACT_APP_INFURA_API_KEY=your_infura_key
REACT_APP_NETWORK=your_network (e.g., rinkeby, mainnet, etc.)
    </code></pre>
    <h3>4. Run the frontend locally</h3>
    <pre><code>npm start
    </code></pre>
    <h3>5. Compile and deploy smart contracts</h3>
    <p>Ensure you have installed foundry to deploy your Solidity smart contracts. For example:</p>
    <pre><code>foundry build
forge script script/StakeNFT.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY neox --verify --broadcast
    </code></pre>
    <h3>6. Interact with NeoX Chain</h3>
    <p>Ensure you have <a href="https://docs.ethers.io/v5/">Ether.js</a> configured to interact with the NeoX blockchain and the smart contract for minting NFTs and handling game logic.</p>
    <h2>Folder Structure</h2>
    <ul>
        <li><strong>/src:</strong> Contains all the React components for the game.
            <ul>
                <li><strong>/components:</strong> Individual UI components like Card, GameBoard, PlayerInfo.</li>
                <li><strong>/contracts:</strong> Contains the Solidity smart contracts.</li>
                <li><strong>/utils:</strong> Helper functions like interactions with Ether.js.</li>
            </ul>
        </li>
    </ul>
    <h2>Smart Contract Overview</h2>
    <p>The smart contract contains the core game logic, including:</p>
    <ul>
        <li>NFT minting and ownership transfer.</li>
        <li>Provides some free NFT for new players for signing up</li>
        <li>Handling rewards (transferring NFTs to the winner).</li>
    </ul>
    <h2>Deployment</h2>
    <p>You can deploy the game to any web-hosting platform like <strong>Vercel</strong> or <strong>Netlify</strong>. Here’s how to deploy with Vercel:</p>
    <ol>
        <li>Install Vercel CLI:
            <pre><code>npm install -g vercel</code></pre>
        </li>
        <li>Deploy:
            <pre><code>vercel</code></pre>
        </li>
    </ol>
    <h1><a href='https://excalidraw.com/#json=T_KygNXhIA7ZnaRT09l7I,Gke4aeU9ODV8Kwh50iuFEg'>workflow</a></h1>
    <p>Below is the visual representation of the workflow for the NFT card battle game:</p>
        <a href="https://moccasin-main-swallow-934.mypinata.cloud/ipfs/QmfZ5PsnMWWsqyDXJkS2ee4NoHhX8DtUVBd1kugHSqFSC4" target="_blank">
        <img src="https://moccasin-main-swallow-934.mypinata.cloud/ipfs/QmfZ5PsnMWWsqyDXJkS2ee4NoHhX8DtUVBd1kugHSqFSC4" alt="Workflow of NFT Card Battle Game" width="500">
        </a>
    <h2>Future Improvements</h2>
    <ul>
        <li><strong>Leaderboards:</strong> Track player wins and losses.</li>
        <li><strong>Custom Decks:</strong> Allow players to build custom decks using their NFTs.</li>
        <li><strong>Advanced Mechanics:</strong> Add more features like spells, special abilities, or multiplayer tournaments.</li>
    </ul>
