import { avlNetwork } from "../utils";
import { ethers, BrowserProvider, parseUnits } from "ethers";
import { useState, useEffect } from "react";

const url = "http://localhost:8545";

export const Home = () => {
  const [balance, setBalance] = useState<string | undefined>();
  const [currentAccount, setCurrentAccount] = useState<string | undefined>();
  const [network, setNetwork] = useState("");
  const [chainId, setChainId] = useState<number | undefined>();
  const [chainname, setChainName] = useState<string | undefined>();

  useEffect(() => {
    if (!window.ethereum) return;
  }, [currentAccount]);

  const onClickConnect = async () => {
    if (!window.ethereum) return;
    const browserProvider = new ethers.BrowserProvider(window.ethereum);
    const provider = new ethers.JsonRpcProvider(url);
    const signer = await browserProvider.getSigner();

    browserProvider
      .getBalance(
        currentAccount || "0x4aBfCf64bB323CC8B65e2E69F2221B14943C6EE1"
      )
      .then((balance) => setBalance(balance.toString()));

    browserProvider.getNetwork().then((data) => {
      setNetwork(data.chainId.toString());
    });

    browserProvider.listAccounts().then((accList) => {
      setCurrentAccount(accList[0].address);
    });
  };

  const onClickDisconnect = () => {
    console.log("onClickDisConnect");
    setBalance(undefined);
    setCurrentAccount(undefined);
  };

  const swithcNetwork = async (chainId: 137 | 43114) => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [avlNetwork[`${chainId}`]],
      });
      setNetwork(avlNetwork[`${chainId}`].chainName);
      setChainId(chainId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-7">
      <h1 className="text-3xl text-primaryColor">
        hello the world of blockchain
      </h1>

      <div>
        <p>we current on network: {network}</p>
        <p>balance: {network}</p>
        <p>account: {currentAccount}</p>
      </div>

      <button
        className="p-3 border text-white bg-primaryColor"
        onClick={onClickConnect}
      >
        connect web3
      </button>
    </div>
  );
};
