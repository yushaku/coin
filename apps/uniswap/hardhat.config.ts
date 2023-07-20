import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();
const { ALCHEMY_API_URL, WALLET_PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10_000,
      },
    },
  },
  networks: {
    local: {
      url: ALCHEMY_API_URL,
      chainId: 11155111,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
  },
  typechain: {
    outDir: "./typechain",
  },
  gasReporter: {
    // enabled: !process.env.CI,
    // coinmarketcap: "7643dfc7-a58f-46af-8314-2db32bdd18ba",
    currency: "USD",
    gasPrice: 50,
    src: "contracts",
  },
  mocha: {
    timeout: 60_000,
  },
};

export default config;
