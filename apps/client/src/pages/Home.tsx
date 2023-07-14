import { avlNetwork } from "../utils";
import { abi } from "abi/contracts/token.sol/Token.json";
import { ethers, BrowserProvider, parseUnits } from "ethers";
import { useState, useEffect } from "react";

const url = "http://localhost:8545";
const address = "0xD4416b13d2b3a9aBae7AcD5D6C2BbDBE25686401";

export const Home = () => {
  const [balance, setBalance] = useState<string | undefined>();
  const [currentAccount, setCurrentAccount] = useState<string | undefined>();
  const [network, setNetwork] = useState("");
  const [chainId, setChainId] = useState<number | undefined>();
  const [chainname, setChainName] = useState<string | undefined>();

  useEffect(() => {
    if (!window.ethereum) return;
    const browserProvider = new ethers.BrowserProvider(window.ethereum);
  }, [currentAccount]);

  const onClickConnect = async () => {
    if (!window.ethereum) return;
    const browserProvider = new ethers.BrowserProvider(window.ethereum);
    const signer = await browserProvider.getSigner();

    const provider = new ethers.JsonRpcProvider(
      "https://mainnet.infura.io/v3/354872a8849140a48afe69abdea29f00"
    );
    const contract = new ethers.Contract(address, abi, provider);
    console.log(contract);

    contract.ens().then((balance) => console.log({ balance }));
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
