import { HardhatUserConfig } from "hardhat/config";
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-ethers";

import dotenv from "dotenv";

dotenv.config();
const { ALCHEMY_API_URL, WALLET_PRIVATE_KEY, INFURA_PROJECT_ID } = process.env;

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
    hardhat: {
      chainId: 31337,
      initialBaseFeePerGas: 0,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [WALLET_PRIVATE_KEY!],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
    },
    rinkeby: {
      url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: process.env.MNEMONIC
        ? { mnemonic: process.env.MNEMONIC }
        : [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: process.env.MNEMONIC
        ? { mnemonic: process.env.MNEMONIC }
        : [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
    },
    sepolia: {
      url: ALCHEMY_API_URL,
      chainId: 11155111,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: "ZQ3E4BTAX34QM5IM5ERXRX7FG1EFGX713G",
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
