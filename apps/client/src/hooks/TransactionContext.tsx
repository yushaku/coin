import { ADDRESS } from "../utils/constants";
import { abi } from "abi/contracts/Transactions.sol/Transactions.json";
import { ethers, formatUnits, parseEther, toBeHex } from "ethers";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  transactionCount: string | null;
  connectWallet: () => Promise<void>;
  transactions: never[];
  currentAccount: string;
  sendTransaction: () => Promise<void>;
  handleChange: (e: any, name: string) => void;
  formData: {
    addressTo: string;
    amount: string;
    keyword: string;
    message: string;
  };
};

export const TransactionContext = createContext<Props>({} as Props);

const { ethereum } = window;

const createEthereumContract = async () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const transProvider = new ethers.Contract(ADDRESS.TRANSACTION, abi, provider);
  const signer = await provider.getSigner();

  return { transProvider, signer };
};

export const TransactionsProvider = ({ children }: any) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);
  const [formData, setformData] = useState({
    addressTo: "0x4f5b20eaD662E7Cde0a4Ae035AfBcEa398A961E6",
    amount: "0.001",
    keyword: "test",
    message: "test",
  });

  function handleChange(e: any, name: string) {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  }

  async function getAllTransactions() {
    if (!ethereum) {
      toast("Ethereum is not present");
      return;
    }

    const { transProvider } = await createEthereumContract();
    const availableTransactions = await transProvider.getAllTransactions();

    const structuredTransactions = availableTransactions.map(
      (transaction: any) => ({
        addressTo: transaction.reseiver,
        addressFrom: transaction.sender,
        timestamp: new Date(
          Number(transaction.timestamp) * 1000
        ).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: Number(transaction.amount) / 10 ** 9,
      })
    );

    setTransactions(structuredTransactions);
  }

  async function checkIfWalletIsConnect() {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length <= 0) {
        toast("No accounts found");
        return;
      }

      setCurrentAccount(accounts[0]);
      getAllTransactions();
    } catch (error) {
      console.log(error);
    }
  }

  async function checkIfTransactionsExists() {
    try {
      if (ethereum) {
        const { transProvider } = await createEthereumContract();
        const count = await transProvider.getTransactionCount();
        window.localStorage.setItem("transactionCount", count);
      }
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object");
    }
  }

  async function connectWallet() {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object");
    }
  }

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

        console.log(transactionHash);

        const transactionsCount = await transProvider.getTransactionCount();
        setTransactionCount(formatUnits(transactionsCount));
        toast.success(`the transactions count: ${transactionCount}`);
        // window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfTransactionsExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
