import { ADDRESS } from "../utils";
import { shortenAddress } from "../utils/shortenAddress";
import { abi } from "abi/contracts/Transactions.sol/Transactions.json";
import { ConnectKitButton } from "connectkit";
import { parseEther, ethers } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsInfoCircle } from "react-icons/bs";
import { SiEthereum } from "react-icons/si";
import { useAccount } from "wagmi";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }: any) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-lg p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const { ethereum } = window;

const Welcome = () => {
  const { address, isConnected } = useAccount();
  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });

  function handleChange(e: any, name: string) {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  }

  const createEthereumContract = async () => {
    const provider = new ethers.BrowserProvider(ethereum);
    const transProvider = new ethers.Contract(
      ADDRESS.TRANSACTION,
      abi,
      provider
    );
    const signer = await provider.getSigner();

    return { transProvider, signer };
  };

  async function sendTransaction() {
    try {
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const { transProvider } = await createEthereumContract();
        const parsedAmount = parseEther(amount);

        // await ethereum.request({
        //   method: "eth_sendTransaction",
        //   params: [
        //     {
        //       from: currentAccount,
        //       to: addressTo,
        //       gas: "0x5208", // 21000 GWEI
        //       value: toBeHex(parsedAmount),
        //     },
        //   ],
        // });

        const estimateGas = await transProvider.addToBlock.estimateGas(
          addressTo,
          parsedAmount,
          message,
          keyword
        );

        toast(`gas fee: ${estimateGas}`);
        const transactionHash = await transProvider.addToBlock.staticCall(
          addressTo,
          parsedAmount,
          message,
          keyword
        );

        const transactionsCount = await transProvider.getTransactionCount();
        // setTransactionCount(formatUnits(transactionsCount));
        // toast.success(`the transactions count: ${transactionCount}`);
        // window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  return (
    <div className="flex justify-center items-center min-h-[90dvh]">
      <div className="flex flex-col md:flex-row items-center gap-8 py-12">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>

          {!isConnected && <ConnectKitButton />}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-44 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {isConnected
                    ? shortenAddress(address ?? "")
                    : "Please connect to wallet first"}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-lg w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              value={formData.addressTo}
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              value={formData.amount}
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              value={formData.keyword}
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              value={formData.message}
              handleChange={handleChange}
            />

            <button
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-6 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Send now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
