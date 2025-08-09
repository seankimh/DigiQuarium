# DigiQuarium 🐠

> **Interactive Blockchain Education Platform on Ethereum**

DigiQuarium is an innovative educational tool that brings blockchain technology to life through interactive fish token creation on the Ethereum platform. Users can learn about smart contracts, blockchain operations, and Web3 development while creating and managing their own digital fish tokens.

## 🚀 Features

- **Personal Fish Token Creation**: Mint unique fish tokens on Ethereum blockchain
- **Interactive Learning**: Hands-on experience with smart contracts and blockchain
- **Real-time Transactions**: Live visualization of blockchain operations
- **Security Analysis**: Comprehensive security auditing of smart contracts
- **Web3 Integration**: Seamless Metamask wallet integration
- **Educational Content**: Step-by-step blockchain learning modules

## 🛠️ Tech Stack

### Frontend
- **JavaScript**: Core application logic
- **HTML/CSS**: Modern, responsive user interface
- **Web3.js**: Blockchain interaction library

### Backend & Blockchain
- **Node.js**: Server-side runtime environment
- **Solidity**: Smart contract development language
- **Truffle**: Development framework for Ethereum
- **Ganache**: Local blockchain for development and testing

### Infrastructure
- **Infura**: Ethereum network access and API
- **Metamask**: Web3 wallet integration
- **IPFS**: Decentralized file storage (optional)

## �� Key Capabilities

### Smart Contract Features
- Fish token minting and burning
- Transferable digital assets
- Metadata storage and retrieval
- Access control and permissions

### User Experience
- Intuitive fish creation interface
- Real-time transaction monitoring
- Interactive blockchain explorer
- Educational tooltips and guides

### Security Features
- Smart contract auditing tools
- Gas optimization recommendations
- Security best practices implementation
- Vulnerability scanning

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/digiquarium.git
   cd digiquarium
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up local blockchain**
   ```bash
   # Install Ganache globally
   npm install -g ganache-cli
   
   # Start local blockchain
   ganache-cli
   ```

4. **Configure environment**
   ```bash
   cp .env.example .env
   # Add your configuration values
   ```

5. **Compile and deploy contracts**
   ```bash
   truffle compile
   truffle migrate --reset
   ```

6. **Start the application**
   ```bash
   npm start
   ```

## 📋 Prerequisites

- Node.js 16+
- Metamask browser extension
- Basic understanding of Ethereum and smart contracts
- Local development environment setup

## 🔑 Environment Variables

```env
INFURA_PROJECT_ID=your_infura_project_id
MNEMONIC=your_wallet_mnemonic
NETWORK_ID=5777
```

## 📖 Usage

### Creating Your First Fish Token

1. **Connect Wallet**: Click "Connect Metamask" button
2. **Create Fish**: Use the fish creation form
3. **Mint Token**: Confirm transaction in Metamask
4. **View Fish**: See your fish in the aquarium

### Smart Contract Interaction

```javascript
// Create a new fish token
const fishToken = await FishToken.deployed();
const result = await fishToken.createFish(
  "Nemo", 
  "Orange", 
  "Clownfish",
  { from: accounts[0] }
);
```

### Transaction Monitoring

```javascript
// Listen for events
fishToken.FishCreated({}, (error, event) => {
  console.log("New fish created:", event.args);
});
```

## �� Example Fish Token
