"use client";

import React from "react";
import { Mainnet, DAppProvider, Config, Goerli } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Goerli.chainId]: getDefaultProvider("goerli"),
  },
};

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <DAppProvider config={config}>{children}</DAppProvider>;
};
