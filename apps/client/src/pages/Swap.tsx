import { Setting } from "../components/swap/Setting";
import { tokenList } from "../utils";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Input, Modal, Popover } from "antd";
import { useState } from "react";

export const SwapPage = () => {
  const isConnected = true;

  const [isOpen, setIsOpen] = useState(false);
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(0);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(0);
  const [changeToken, setChangeToken] = useState(1);
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);

  function openModal(num: number) {
    setIsOpen(true);
    setChangeToken(num);
  }

  function handleSlippageChange(e: any) {
    setSlippage(e.target.value);
  }

  function changeAmount(e: any) {
    setTokenOneAmount(e.target.value);
  }

  function switchTokens() {
    // setPrices(null);
    // setTokenOneAmount(null);
    // setTokenTwoAmount(null);
    const one = tokenOne;
    const two = tokenTwo;
    setTokenOne(two);
    setTokenTwo(one);
    // fetchPrices(two.address, one.address);
  }

  function modifyToken(i: number) {
    // setPrices(null);
    setTokenOneAmount(0);
    setTokenTwoAmount(0);
    if (changeToken === 1) {
      setTokenOne(tokenList[i]);
      // fetchPrices(tokenList[i].address, tokenTwo.address);
    } else {
      setTokenTwo(tokenList[i]);
      // fetchPrices(tokenOne.address, tokenList[i].address);
    }
    setIsOpen(false);
  }

  return (
    <section className="flexCenter min-h-[75dvh]">
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
            onChange={changeAmount}
            // disabled={!prices}
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
