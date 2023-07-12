import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10_000,
      },
    },
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
    },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    //   accounts: [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
    // },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    //   accounts: process.env.MNEMONIC
    //     ? { mnemonic: process.env.MNEMONIC }
    //     : [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
    // },
    // goerli: {
    //   url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    //   accounts: process.env.MNEMONIC
    //     ? { mnemonic: process.env.MNEMONIC }
    //     : [process.env.WALLET_PRIVATE_KEY!].filter(Boolean),
    // },
  },
  // etherscan: {
  //   apiKey: process.env.ETHERSCAN_API_KEY,
  // },
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
