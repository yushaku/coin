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
} from "../common";

export interface ZombieOwnershipInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "approve"
      | "attack"
      | "balanceOf"
      | "changeDna"
      | "changeName"
      | "createRandomZombie"
      | "feedAndMultiply"
      | "feedOnKitty"
      | "getZombiesByOwner"
      | "isOwner"
      | "levelUp"
      | "owner"
      | "ownerOf"
      | "renounceOwnership"
      | "setKittyContractAddress"
      | "setLevelUpFee"
      | "transferFrom"
      | "transferOwnership"
      | "withdraw"
      | "zombieToOwner"
      | "zombies"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "NewZombie"
      | "OwnershipTransferred"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "attack",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeDna",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeName",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createRandomZombie",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "feedAndMultiply",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "feedOnKitty",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getZombiesByOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "levelUp",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setKittyContractAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setLevelUpFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "zombieToOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "zombies",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "attack", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "changeDna", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "changeName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createRandomZombie",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feedAndMultiply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feedOnKitty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getZombiesByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "levelUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setKittyContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLevelUpFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "zombieToOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zombies", data: BytesLike): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    _owner: AddressLike,
    _approved: AddressLike,
    _tokenId: BigNumberish
  ];
  export type OutputTuple = [
    _owner: string,
    _approved: string,
    _tokenId: bigint
  ];
  export interface OutputObject {
    _owner: string;
    _approved: string;
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NewZombieEvent {
  export type InputTuple = [
    zombieId: BigNumberish,
    name: string,
    dna: BigNumberish
  ];
  export type OutputTuple = [zombieId: bigint, name: string, dna: bigint];
  export interface OutputObject {
    zombieId: bigint;
    name: string;
    dna: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    _from: AddressLike,
    _to: AddressLike,
    _tokenId: BigNumberish
  ];
  export type OutputTuple = [_from: string, _to: string, _tokenId: bigint];
  export interface OutputObject {
    _from: string;
    _to: string;
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ZombieOwnership extends BaseContract {
  connect(runner?: ContractRunner | null): ZombieOwnership;
  waitForDeployment(): Promise<this>;

  interface: ZombieOwnershipInterface;

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

  approve: TypedContractMethod<
    [_approved: AddressLike, _tokenId: BigNumberish],
    [void],
    "payable"
  >;

  attack: TypedContractMethod<
    [_zombieId: BigNumberish, _targetId: BigNumberish],
    [void],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[_owner: AddressLike], [bigint], "view">;

  changeDna: TypedContractMethod<
    [_zombieId: BigNumberish, _newDna: BigNumberish],
    [void],
    "nonpayable"
  >;

  changeName: TypedContractMethod<
    [_zombieId: BigNumberish, _newName: string],
    [void],
    "nonpayable"
  >;

  createRandomZombie: TypedContractMethod<
    [_name: string],
    [void],
    "nonpayable"
  >;

  feedAndMultiply: TypedContractMethod<
    [_zombieId: BigNumberish, _targetDna: BigNumberish, _species: string],
    [void],
    "nonpayable"
  >;

  feedOnKitty: TypedContractMethod<
    [_zombieId: BigNumberish, _kittyId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getZombiesByOwner: TypedContractMethod<
    [_owner: AddressLike],
    [bigint[]],
    "view"
  >;

  isOwner: TypedContractMethod<[], [boolean], "view">;

  levelUp: TypedContractMethod<[_zombieId: BigNumberish], [void], "payable">;

  owner: TypedContractMethod<[], [string], "view">;

  ownerOf: TypedContractMethod<[_tokenId: BigNumberish], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setKittyContractAddress: TypedContractMethod<
    [_address: AddressLike],
    [void],
    "nonpayable"
  >;

  setLevelUpFee: TypedContractMethod<
    [_fee: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [_from: AddressLike, _to: AddressLike, _tokenId: BigNumberish],
    [void],
    "payable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  zombieToOwner: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  zombies: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint, bigint, bigint] & {
        name: string;
        dna: bigint;
        level: bigint;
        readyTime: bigint;
        winCount: bigint;
        lossCount: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [_approved: AddressLike, _tokenId: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "attack"
  ): TypedContractMethod<
    [_zombieId: BigNumberish, _targetId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[_owner: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "changeDna"
  ): TypedContractMethod<
    [_zombieId: BigNumberish, _newDna: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "changeName"
  ): TypedContractMethod<
    [_zombieId: BigNumberish, _newName: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createRandomZombie"
  ): TypedContractMethod<[_name: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "feedAndMultiply"
  ): TypedContractMethod<
    [_zombieId: BigNumberish, _targetDna: BigNumberish, _species: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "feedOnKitty"
  ): TypedContractMethod<
    [_zombieId: BigNumberish, _kittyId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getZombiesByOwner"
  ): TypedContractMethod<[_owner: AddressLike], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "isOwner"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "levelUp"
  ): TypedContractMethod<[_zombieId: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ownerOf"
  ): TypedContractMethod<[_tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setKittyContractAddress"
  ): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setLevelUpFee"
  ): TypedContractMethod<[_fee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [_from: AddressLike, _to: AddressLike, _tokenId: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "zombieToOwner"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "zombies"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint, bigint, bigint] & {
        name: string;
        dna: bigint;
        level: bigint;
        readyTime: bigint;
        winCount: bigint;
        lossCount: bigint;
      }
    ],
    "view"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "NewZombie"
  ): TypedContractEvent<
    NewZombieEvent.InputTuple,
    NewZombieEvent.OutputTuple,
    NewZombieEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "NewZombie(uint256,string,uint256)": TypedContractEvent<
      NewZombieEvent.InputTuple,
      NewZombieEvent.OutputTuple,
      NewZombieEvent.OutputObject
    >;
    NewZombie: TypedContractEvent<
      NewZombieEvent.InputTuple,
      NewZombieEvent.OutputTuple,
      NewZombieEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
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
