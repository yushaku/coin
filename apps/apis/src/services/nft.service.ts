import { EvmChain } from "@moralisweb3/common-evm-utils";
import Moralis from "moralis";

const marketplace = "opensea";
const address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";
const chain = EvmChain.ETHEREUM;

async function getCollection() {
  const nfts = await Moralis.EvmApi.nft.getNFTTrades({
    address,
    chain,
    marketplace,
  });

  return nfts;
}

export default { getCollection };
