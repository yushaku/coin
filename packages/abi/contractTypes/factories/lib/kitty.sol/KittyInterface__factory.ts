/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  KittyInterface,
  KittyInterfaceInterface,
} from "../../../lib/kitty.sol/KittyInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getKitty",
    outputs: [
      {
        internalType: "bool",
        name: "isGestating",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isReady",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "cooldownIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextActionAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "siringWithId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "birthTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "matronId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sireId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "generation",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "genes",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class KittyInterface__factory {
  static readonly abi = _abi;
  static createInterface(): KittyInterfaceInterface {
    return new Interface(_abi) as KittyInterfaceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): KittyInterface {
    return new Contract(address, _abi, runner) as unknown as KittyInterface;
  }
}