import { EvmChain } from "@moralisweb3/common-evm-utils";
import Moralis from "moralis";

const chain = EvmChain.SEPOLIA;

async function getDemoData(address: string) {
  const nativeBalance = await Moralis.EvmApi.balance.getNativeBalance({
    address,
    chain,
  });

  const native = nativeBalance.result.balance.ether;

  const tokenBalances = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });

  const tokens = tokenBalances.result.map((token) => token.display());

  const nftsBalances = await Moralis.EvmApi.nft.getWalletNFTs({
    address,
    chain,
    limit: 10,
  });

  const nfts = nftsBalances.result.map((nft) => ({
    name: nft.result.name,
    amount: nft.result.amount,
    metadata: nft.result.metadata,
  }));

  return { native, tokens, nfts };
}

export default { getDemoData };
