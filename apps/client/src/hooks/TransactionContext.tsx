import { ADDRESS } from "../utils/constants";
import { abi } from "abi/contracts/Transactions.sol/Transactions.json";
import { ethers } from "ethers";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  transactionCount: string | null;
  transactions: never[];
  currentAccount: string;
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

  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        transactions,
        currentAccount,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
