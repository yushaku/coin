export const avlNetwork = {
  137: {
    chainId: `0x${Number(137).toString(16)}`,
    rpcUrls: ["https://rpc-mainnet.matic.network/"],
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    blockExplorerUrls: ["https://polygonscan.com/"],
  },
  43114: {
    chainId: `0x${Number(43114).toString(16)}`,
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    chainName: "Avalanche C-Chain",
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18,
    },
    blockExplorerUrls: ["https://snowtrace.io/"],
  },
};

export const CONTRACT_ADDRESS = "";
