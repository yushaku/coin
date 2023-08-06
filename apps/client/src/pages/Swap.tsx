import { Setting } from "../components/swap/Setting";
import { getTokenPrices } from "../services/tokens";
import { tokenList } from "../utils";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Input, Modal, Popover, message } from "antd";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useAccount, useSendTransaction, useWaitForTransaction } from "wagmi";

export const SwapPage = () => {
  const { isConnected, address } = useAccount();
  const [messageApi, contextHolder] = message.useMessage();
  const [isOpen, setIsOpen] = useState(false);
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(0);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(0);
  const [changeToken, setChangeToken] = useState(1);
  const [prices, setPrices] = useState<{
    tokenOne: number;
    tokenTwo: number;
    ratio: number;
  } | null>(null);
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);
  const [transactionDetails, setTransactionDetails] = useState({
    to: null,
    data: null,
    value: null,
  });

  const { data, sendTransaction } = useSendTransaction({
    to: String(transactionDetails.to),
    account: address,
    // from: address,
    // data: String(transactionDetails.data),
    // value: String(transactionDetails.value),
  });

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  useEffect(() => {
    getTokenPrices(tokenOne.address, tokenTwo.address).then((data) =>
      setPrices(data)
    );
  }, [tokenOne, tokenTwo]);

  useEffect(() => {
    messageApi.destroy();

    if (isLoading) {
      messageApi.open({
        type: "loading",
        content: "Transaction is Pending...",
        duration: 0,
      });
    }
  }, [isLoading]);

  useEffect(() => {
    if (transactionDetails.to && isConnected) {
      sendTransaction();
    }
  }, [transactionDetails]);

  useEffect(() => {
    messageApi.destroy();
    if (isSuccess) {
      messageApi.open({
        type: "success",
        content: "Transaction Successful",
        duration: 1.5,
      });
    } else if (transactionDetails.to) {
      messageApi.open({
        type: "error",
        content: "Transaction Failed",
        duration: 1.5,
      });
    }
  }, [isSuccess]);

  function openModal(num: number) {
    setIsOpen(true);
    setChangeToken(num);
  }

  function handleSlippageChange(e: any) {
    setSlippage(e.target.value);
  }

  function switchTokens() {
    setPrices(null);
    setTokenOneAmount(0);
    setTokenTwoAmount(0);
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
    getTokenPrices(two.address, one.address);
  }

  function modifyToken(i: number) {
    setPrices(null);
    setTokenOneAmount(0);
    setTokenTwoAmount(0);
    if (changeToken === 1) {
      setTokenOne(tokenList[i]);
      getTokenPrices(tokenList[i].address, tokenTwo.address);
    } else {
      setTokenTwo(tokenList[i]);
      getTokenPrices(tokenOne.address, tokenList[i].address);
    }
    setIsOpen(false);
  }

  function changeAmount(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);

    setTokenOneAmount(value);
    if (value && prices) {
      setTokenTwoAmount(Number((value * prices.ratio).toFixed(2)));
    } else {
      setTokenTwoAmount(0);
    }
  }

  async function fetchDexSwap() {
    const allowance = await axios.get(
      `https://api.1inch.io/v5.0/1/approve/allowance?tokenAddress=${tokenOne.address}&walletAddress=${address}`
    );

    if (allowance.data.allowance === "0") {
      const approve = await axios.get(
        `https://api.1inch.io/v5.0/1/approve/transaction?tokenAddress=${tokenOne.address}`
      );

      setTransactionDetails(approve.data);
      console.log("not approved");
      return;
    }

    const tx = await axios.get(
      `https://api.1inch.io/v5.0/1/swap?fromTokenAddress=${
        tokenOne.address
      }&toTokenAddress=${tokenTwo.address}&amount=${tokenOneAmount.padEnd(
        tokenOne.decimals + tokenOneAmount.length,
        "0"
      )}&fromAddress=${address}&slippage=${slippage}`
    );

    let decimals = Number(`1E${tokenTwo.decimals}`);
    setTokenTwoAmount(Number(tx.data.toTokenAmount) / decimals);
    setTransactionDetails(tx.data.tx);
  }

  return (
    <section className="flexCenter min-h-[75dvh]">
      {contextHolder}
      <div className="tradeBox">
        <div className="flex justify-between items-center w-[90%] py-3">
          <h4 className="text-lime-50 text-2xl font-semibold">Swap</h4>
          <Popover
            content={
              <Setting
                slippage={slippage}
                handleSlippageChange={handleSlippageChange}
              />
            }
            title="Settings"
            trigger="click"
            placement="bottomRight"
          >
            <SettingOutlined className="cog" />
          </Popover>
        </div>

        <div className="relative">
          <Input
            placeholder="0"
            value={tokenOneAmount}
            onChange={(e) => changeAmount(e)}
            disabled={!prices}
          />
          <Input placeholder="0" value={tokenTwoAmount} disabled={true} />

          <button
            onClick={switchTokens}
            className="absolute top-[86px] right-1/2 translate-x-1/2
            bg-[#3a4157] border-[3px] border-[#0e111b]
            flexCenter h-7 w-7 rounded-lg"
          >
            <ArrowDownOutlined className="text-[#5f6783] hover:text-white animationShow" />
          </button>

          <div className="assetOne" onClick={() => openModal(1)}>
            <img src={tokenOne.img} alt="assetOneLogo" className="assetLogo" />
            {tokenOne.ticker}
            <DownOutlined />
          </div>

          <div className="assetTwo" onClick={() => openModal(2)}>
            <img src={tokenTwo.img} alt="assetOneLogo" className="assetLogo" />
            {tokenTwo.ticker}
            <DownOutlined />
          </div>
        </div>

        <button
          className="swapButton"
          disabled={!tokenOneAmount || !isConnected}
          onClick={async () => {
            const res = await fetchDexSwap(
              tokenOne.address,
              tokenTwo.address,
              address!
            );
            setTransactionDetails(res);
          }}
        >
          Swap
        </button>
      </div>

      <Modal
        open={isOpen}
        footer={<div>select your token</div>}
        onCancel={() => setIsOpen(false)}
        title="Select a token"
      >
        <ul className="border-[#363e54] border mt-5 flex flex-col gap-3 max-h-[450px] overflow-x-hidden">
          {tokenList?.map((e, i) => {
            return (
              <li
                key={i}
                className="tokenChoice"
                onClick={() => modifyToken(i)}
              >
                <img src={e.img} alt={e.ticker} className="tokenLogo" />
                <div className="tokenChoiceNames">
                  <h5 className="tokenName">{e.name}</h5>
                  <p className="tokenTicker">{e.ticker}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Modal>
    </section>
  );
};
