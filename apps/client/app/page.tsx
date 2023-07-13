"use client";

import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";
import React from "react";
import { Header } from "ui";

export default function Page() {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <>
      <Header text="Web" />
      <div>
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      </div>
      {account && <p>Account: {account}</p>}
      {etherBalance && (
        <div className="balance">
          <br />
          <p className="bold">Address: {account}</p>
          <br />
          <p className="bold">Balance: {formatEther(etherBalance)}</p>
        </div>
      )}
    </>
  );
}
