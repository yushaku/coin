import { axiosClient } from "./axiosclient";

export const getTokenPrices = async (one: string, two: string) => {
  const res = await axiosClient.get(`/tokens/pairToken`, {
    params: { addressOne: one, addressTwo: two },
  });

  return res.data;
};

export type Token = {
  ticker: string;
  img: string;
  name: string;
  address: string;
  decimals: number;
};

export const getQuote = async (src: string, dst: string, amount: number) => {
  const res = await axiosClient.get("https://api.1inch.dev/swap/v5.2/1/quote", {
    params: { src, dst, amount },
  });
  return res.data;
};
