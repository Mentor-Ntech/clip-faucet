// import { HardhatUserConfig } from 'hardhat/config';
// import '@nomicfoundation/hardhat-toolbox';

// require('dotenv').config();

// const config: HardhatUserConfig = {
//   solidity: {
//     version: '0.8.26',
//   },
//   networks: {
//     // for testnet
//     'base-sepolia': {
//       url: 'https://sepolia.base.org',
//       accounts: [process.env.WALLET_KEY as string],
//       gasPrice: 1000000000,
//     },
    
//   },
//   defaultNetwork: 'hardhat',
// };

// export default config;

const { vars } = require("hardhat/config");

const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const ETHERSCAN_API_KEY = vars.get("BASE_SCAN_API_KEY");

module.exports = {
  sepolia: {
    url: `https://sepolia.base.io/v3/${ALCHEMY_API_KEY}`,
    accounts: [vars.get("TEST_PK")],
  },
};