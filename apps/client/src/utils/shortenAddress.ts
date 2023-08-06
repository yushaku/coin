export const shortenAddress = (address: `0x${string}`) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
