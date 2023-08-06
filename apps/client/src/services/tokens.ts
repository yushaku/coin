import { axiosClient } from "./axiosclient";

export const getTokenPrices = async (one: string, two: string) => {
  const res = await axiosClient.get(`/tokens/pairToken`, {
    params: { addressOne: one, addressTwo: two },
  });

  return res.data;
};

type Token = {
  ticker: string;
  img: string;
  name: string;
  address: string;
  decimals: number;
};

// export const fetchDexSwap = async (
//   tokenOne: Token,
//   tokenTwo: Token,
//   accountAddress: `0x${string}`
// ) => {
//   const allowance = await axiosClient.get(
//     `https://api.1inch.io/v5.0/1/approve/allowance?tokenAddress=${tokenOne.address}&walletAddress=${address}`
//   );
//
//   if (allowance.data.allowance === "0") {
//     const approve = await axiosClient.get(
//       `https://api.1inch.io/v5.0/1/approve/transaction?tokenAddress=${tokenOne.address}`
//     );
//
//     setTxDetails(approve.data);
//     console.log("not approved");
//     return;
//   }
//
//   const tx = await axiosClient.get(
//     `https://api.1inch.io/v5.0/1/swap?fromTokenAddress=${
//       tokenOne.address
//     }&toTokenAddress=${tokenTwo.address}&amount=${tokenOneAmount.padEnd(
//       tokenOne.decimals + tokenOneAmount.length,
//       "0"
//     )}&fromAddress=${address}&slippage=${slippage}`
//   );
//
//   let decimals = Number(`1E${tokenTwo.decimals}`);
//   setTokenTwoAmount((Number(tx.data.toTokenAmount) / decimals).toFixed(2));
//
//   setTxDetails(tx.data.tx);
// };
