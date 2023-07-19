/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Transactions, TransactionsInterface } from "../Transactions";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "keyword",
        type: "string",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "string",
        name: "keyword",
        type: "string",
      },
    ],
    name: "addToBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "reseiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "keyword",
            type: "string",
          },
        ],
        internalType: "struct Transactions.TransferStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610961806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327506f53146100465780632e7700f014610064578063357bb2a814610075575b600080fd5b61004e61008a565b60405161005b919061046e565b60405180910390f35b60005460405190815260200161005b565b610088610083366004610632565b610252565b005b60606001805480602002602001604051908101604052809291908181526020016000905b828210156102495760008481526020908190206040805160c08101825260068602909201805473ffffffffffffffffffffffffffffffffffffffff90811684526001820154169383019390935260028301549082015260038201805491929160608401919061011c906106cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610148906106cb565b80156101955780601f1061016a57610100808354040283529160200191610195565b820191906000526020600020905b81548152906001019060200180831161017857829003601f168201915b50505050508152602001600482015481526020016005820180546101b8906106cb565b80601f01602080910402602001604051908101604052809291908181526020018280546101e4906106cb565b80156102315780601f1061020657610100808354040283529160200191610231565b820191906000526020600020905b81548152906001019060200180831161021457829003601f168201915b505050505081525050815260200190600101906100ae565b50505050905090565b6001600080828254610264919061071e565b90915550506040805160c08101825233815273ffffffffffffffffffffffffffffffffffffffff868116602083019081529282018681526060830186815242608085015260a08401869052600180548082018255600091909152845160069091027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6810180549286167fffffffffffffffffffffffff000000000000000000000000000000000000000093841617815596517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7820180549190961692169190911790935590517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf8830155519192917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf9909101906103a190826107ad565b506080820151600482015560a082015160058201906103c090826107ad565b5050507f416cfa4330a4565f45c2fd2dd4826a83a37443aba2ce6f79477c7355afac35fa3385858542866040516103fc969594939291906108c7565b60405180910390a150505050565b6000815180845260005b8181101561043057602081850181015186830182015201610414565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561054a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0898403018552815160c073ffffffffffffffffffffffffffffffffffffffff808351168652808a840151168a870152508782015188860152606080830151828288015261050d8388018261040a565b92505050608080830151818701525060a08083015192508582038187015250610536818361040a565b968901969450505090860190600101610495565b509098975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261059857600080fd5b813567ffffffffffffffff808211156105b3576105b3610558565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156105f9576105f9610558565b8160405283815286602085880101111561061257600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000806080858703121561064857600080fd5b843573ffffffffffffffffffffffffffffffffffffffff8116811461066c57600080fd5b935060208501359250604085013567ffffffffffffffff8082111561069057600080fd5b61069c88838901610587565b935060608701359150808211156106b257600080fd5b506106bf87828801610587565b91505092959194509250565b600181811c908216806106df57607f821691505b602082108103610718577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b80820180821115610758577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b601f8211156107a857600081815260208120601f850160051c810160208610156107855750805b601f850160051c820191505b818110156107a457828155600101610791565b5050505b505050565b815167ffffffffffffffff8111156107c7576107c7610558565b6107db816107d584546106cb565b8461075e565b602080601f83116001811461082e57600084156107f85750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556107a4565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561087b5788860151825594840194600190910190840161085c565b50858210156108b757878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260c0606083015261090660c083018661040a565b84608084015282810360a084015261091e818561040a565b999850505050505050505056fea26469706673582212202f2b6275c21a831e7ae82e38b0ef0043ecd701b7888806acad6234e7f4cc519a64736f6c63430008120033";

type TransactionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransactionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Transactions__factory extends ContractFactory {
  constructor(...args: TransactionsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Transactions & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Transactions__factory {
    return super.connect(runner) as Transactions__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransactionsInterface {
    return new Interface(_abi) as TransactionsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Transactions {
    return new Contract(address, _abi, runner) as unknown as Transactions;
  }
}
