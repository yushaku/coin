import Moralis from "moralis";

async function getPairtokensPrice(addressOne: string, addressTwo: string) {
  const [tokenOne, tokenTwo] = await Promise.all([
    Moralis.EvmApi.token.getTokenPrice({ address: addressOne }),
    Moralis.EvmApi.token.getTokenPrice({ address: addressTwo }),
  ]);

  const prices = {
    tokenOne: tokenOne.raw.usdPrice,
    tokenTwo: tokenTwo.raw.usdPrice,
    ratio: tokenOne.raw.usdPrice / tokenTwo.raw.usdPrice,
  };

  return prices;
}

async function getToptoken() {
  const top = await Moralis.EvmApi.marketData.getTopERC20TokensByMarketCap();
  console.log(top);
  return top;
}

export default { getPairtokensPrice, getToptoken };
