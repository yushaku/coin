/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace Transactions {
  export type TransferStructStruct = {
    sender: AddressLike;
    reseiver: AddressLike;
    amount: BigNumberish;
    message: string;
    timestamp: BigNumberish;
    keyword: string;
  };

  export type TransferStructStructOutput = [
    sender: string,
    reseiver: string,
    amount: bigint,
    message: string,
    timestamp: bigint,
    keyword: string
  ] & {
    sender: string;
    reseiver: string;
    amount: bigint;
    message: string;
    timestamp: bigint;
    keyword: string;
  };
}

export interface TransactionsInterface extends Interface {
  getFunction(
    nameOrSignature: "addToBlock" | "getAllTransactions" | "getTransactionCount"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;

  encodeFunctionData(
    functionFragment: "addToBlock",
    values: [AddressLike, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTransactions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTransactionCount",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addToBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllTransactions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTransactionCount",
    data: BytesLike
  ): Result;
}

export namespace TransferEvent {
  export type InputTuple = [
    _from: AddressLike,
    _receiver: AddressLike,
    _amount: BigNumberish,
    _message: string,
    _timestamp: BigNumberish,
    keyword: string
  ];
  export type OutputTuple = [
    _from: string,
    _receiver: string,
    _amount: bigint,
    _message: string,
    _timestamp: bigint,
    keyword: string
  ];
  export interface OutputObject {
    _from: string;
    _receiver: string;
    _amount: bigint;
    _message: string;
    _timestamp: bigint;
    keyword: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Transactions extends BaseContract {
  connect(runner?: ContractRunner | null): Transactions;
  waitForDeployment(): Promise<this>;

  interface: TransactionsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addToBlock: TypedContractMethod<
    [
      receiver: AddressLike,
      amount: BigNumberish,
      message: string,
      keyword: string
    ],
    [void],
    "nonpayable"
  >;

  getAllTransactions: TypedContractMethod<
    [],
    [Transactions.TransferStructStructOutput[]],
    "view"
  >;

  getTransactionCount: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addToBlock"
  ): TypedContractMethod<
    [
      receiver: AddressLike,
      amount: BigNumberish,
      message: string,
      keyword: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAllTransactions"
  ): TypedContractMethod<
    [],
    [Transactions.TransferStructStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTransactionCount"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Transfer(address,address,uint256,string,uint256,string)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
