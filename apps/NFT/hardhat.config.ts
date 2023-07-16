import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();
const { ALCHEMY_API_URL, WALLET_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10_000,
      },
    },
  },
  networks: {
    sepolia: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
  },
};

export default config;
