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
import type { NonPayableOverrides } from "../../common";
import type {
  ZombieAttack,
  ZombieAttackInterface,
} from "../../zombieattack.sol/ZombieAttack";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "zombieId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dna",
        type: "uint256",
      },
    ],
    name: "NewZombie",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetId",
        type: "uint256",
      },
    ],
    name: "attack",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newDna",
        type: "uint256",
      },
    ],
    name: "changeDna",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_newName",
        type: "string",
      },
    ],
    name: "changeName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "createRandomZombie",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetDna",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_species",
        type: "string",
      },
    ],
    name: "feedAndMultiply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_kittyId",
        type: "uint256",
      },
    ],
    name: "feedOnKitty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getZombiesByOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_zombieId",
        type: "uint256",
      },
    ],
    name: "levelUp",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setKittyContractAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "setLevelUpFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "zombieToOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "zombies",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "dna",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "level",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "readyTime",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "winCount",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "lossCount",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052601060018190556200001890600a6200019f565b6002556201518060035566038d7ea4c6800060085560006009556046600a553480156200004457600080fd5b50600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3620001b4565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620000e1578160001904821115620000c557620000c56200008a565b80851615620000d357918102915b93841c9390800290620000a5565b509250929050565b600082620000fa5750600162000199565b81620001095750600062000199565b81600181146200012257600281146200012d576200014d565b600191505062000199565b60ff8411156200014157620001416200008a565b50506001821b62000199565b5060208310610133831016604e8410600b841016171562000172575081810a62000199565b6200017e8383620000a0565b80600019048211156200019557620001956200008a565b0290505b92915050565b6000620001ad8383620000e9565b9392505050565b611a9380620001c46000396000f3fe60806040526004361061010e5760003560e01c80636b0bfc80116100a55780638f32d59b11610074578063ccf670f811610059578063ccf670f814610345578063e1fa763814610365578063f2fde38b1461038557600080fd5b80638f32d59b146102ed578063c39cbef11461032557600080fd5b80636b0bfc801461026d578063715018a61461028d5780637bff0a01146102a25780638da5cb5b146102c257600080fd5b80634412e104116100e15780634412e10414610198578063528b7b8f146101c55780635f4623f11461022d5780635faf28801461024d57600080fd5b80630ce90ec21461011357806317a7f4cc146101285780632052465e146101485780633ccfd60b14610183575b600080fd5b6101266101213660046111e6565b6103a5565b005b34801561013457600080fd5b506101266101433660046111ff565b61040c565b34801561015457600080fd5b506101686101633660046111e6565b6104f5565b60405161017a9695949392919061128f565b60405180910390f35b34801561018f57600080fd5b506101266105eb565b3480156101a457600080fd5b506101b86101b33660046112da565b610641565b60405161017a9190611310565b3480156101d157600080fd5b506102086101e03660046111e6565b60056020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161017a565b34801561023957600080fd5b506101266102483660046112da565b610732565b34801561025957600080fd5b506101266102683660046111ff565b61079d565b34801561027957600080fd5b5061012661028836600461142e565b61086b565b34801561029957600080fd5b506101266109d4565b3480156102ae57600080fd5b506101266102bd36600461147e565b610a67565b3480156102ce57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff16610208565b3480156102f957600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff163314604051901515815260200161017a565b34801561033157600080fd5b506101266103403660046114bb565b610aaf565b34801561035157600080fd5b506101266103603660046111e6565b610b89565b34801561037157600080fd5b506101266103803660046111ff565b610bb2565b34801561039157600080fd5b506101266103a03660046112da565b610dcb565b60085434146103b357600080fd5b600481815481106103c6576103c6611537565b600091825260208220600260039092020101805463ffffffff16916103ea83611595565b91906101000a81548163ffffffff021916908363ffffffff1602179055505050565b6007546040517fe98b7f4d0000000000000000000000000000000000000000000000000000000081526004810183905260009173ffffffffffffffffffffffffffffffffffffffff169063e98b7f4d9060240161014060405180830381865afa15801561047d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a191906115cd565b60408051808201909152600581527f6b697474790000000000000000000000000000000000000000000000000000006020820152909a506104f099508c98508a9750955061086b945050505050565b505050565b6004818154811061050557600080fd5b90600052602060002090600302016000915090508060000180546105289061164f565b80601f01602080910402602001604051908101604052809291908181526020018280546105549061164f565b80156105a15780601f10610576576101008083540402835291602001916105a1565b820191906000526020600020905b81548152906001019060200180831161058457829003601f168201915b505050600184015460029094015492939263ffffffff8082169350640100000000820416915061ffff6801000000000000000082048116916a010000000000000000000090041686565b60005473ffffffffffffffffffffffffffffffffffffffff16331461060f57600080fd5b604051339081904780156108fc02916000818181858888f1935050505015801561063d573d6000803e3d6000fd5b5050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600660205260408120546060919067ffffffffffffffff81111561068357610683611354565b6040519080825280602002602001820160405280156106ac578160200160208202803683370190505b5090506000805b6004548110156107295760008181526005602052604090205473ffffffffffffffffffffffffffffffffffffffff80871691160361071757808383815181106106fe576106fe611537565b602090810291909101015281610713816116a2565b9250505b80610721816116a2565b9150506106b3565b50909392505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461075657600080fd5b600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60148281600482815481106107b4576107b4611537565b600091825260209091206002600390920201015463ffffffff1610156107d957600080fd5b600084815260056020526040902054849073ffffffffffffffffffffffffffffffffffffffff16331461080b57600080fd5b60008581526005602052604090205473ffffffffffffffffffffffffffffffffffffffff16331461083b57600080fd5b836004868154811061084f5761084f611537565b9060005260206000209060030201600101819055505050505050565b600083815260056020526040902054839073ffffffffffffffffffffffffffffffffffffffff16331461089d57600080fd5b6000600485815481106108b2576108b2611537565b90600052602060002090600302019050600254846108d09190611709565b9350600060028583600101546108e6919061171d565b6108f09190611730565b6040517f6b69747479000000000000000000000000000000000000000000000000000000602082015290915060250160405160208183030381529060405280519060200120846040516020016109469190611744565b60405160208183030381529060405280519060200120036109845761096c606482611709565b6109769082611760565b61098190606361171d565b90505b6109c36040518060400160405280600681526020017f4e6f4e616d65000000000000000000000000000000000000000000000000000081525082610dfb565b6109cc8261101e565b505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109f857600080fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b3360009081526006602052604090205415610a8157600080fd5b6000610a8c82611050565b9050610a99606482611709565b610aa39082611760565b905061063d8282610dfb565b6002838160048281548110610ac657610ac6611537565b600091825260209091206002600390920201015463ffffffff161015610aeb57600080fd5b600085815260056020526040902054859073ffffffffffffffffffffffffffffffffffffffff163314610b1d57600080fd5b60008681526005602052604090205473ffffffffffffffffffffffffffffffffffffffff163314610b4d57600080fd5b848460048881548110610b6257610b62611537565b90600052602060002090600302016000019182610b809291906117b9565b50505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610bad57600080fd5b600855565b600082815260056020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314610be457600080fd5b600060048481548110610bf957610bf9611537565b90600052602060002090600302019050600060048481548110610c1e57610c1e611537565b906000526020600020906003020190506000610c3a6064611094565b9050600a548111610d465760028301805468010000000000000000900461ffff16906008610c67836118d4565b825461ffff9182166101009390930a92830291909202199091161790555060028301805463ffffffff16906000610c9d83611595565b825463ffffffff9182166101009390930a92830291909202199091161790555060028201805461ffff6a01000000000000000000009091041690600a610ce2836118d4565b91906101000a81548161ffff021916908361ffff16021790555050610d418683600101546040518060400160405280600681526020017f7a6f6d626965000000000000000000000000000000000000000000000000000081525061086b565b6109cc565b6002830180546a0100000000000000000000900461ffff1690600a610d6a836118d4565b91906101000a81548161ffff021916908361ffff1602179055505081600201600881819054906101000a900461ffff1680929190610da7906118d4565b91906101000a81548161ffff021916908361ffff160217905550506109cc8361101e565b60005473ffffffffffffffffffffffffffffffffffffffff163314610def57600080fd5b610df88161111a565b50565b600060035442610e0b919061171d565b6040805160c08101825285815260208101859052600191810182905263ffffffff8316606082015260006080820181905260a08201819052600480549384018155905280519293509182916003027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b01908190610e8890826118eb565b5060208201516001808301919091556040830151600290920180546060850151608086015160a09096015161ffff9081166a0100000000000000000000027fffffffffffffffffffffffffffffffffffffffff0000ffffffffffffffffffff919097166801000000000000000002167fffffffffffffffffffffffffffffffffffffffff00000000ffffffffffffffff63ffffffff928316640100000000027fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000009094169290961691909117919091179390931692909217929092179055600454600091610f7491611760565b600081815260056020908152604080832080547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915583526006909152902054909150610fc89060016111c7565b336000908152600660205260409081902091909155517f88f026aacbbecc90c18411df4b1185fd8d9be2470f1962f192bf84a27d0704b79061100f90839088908890611a05565b60405180910390a15050505050565b60035461102b904261171d565b8160020160046101000a81548163ffffffff021916908363ffffffff16021790555050565b600080826040516020016110649190611744565b6040516020818303038152906040528051906020012060001c90506002548161108d9190611709565b9392505050565b60098054600091826110a5836116a2565b9091555050600954604080514260208201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b1691810191909152605481019190915282906074016040516020818303038152906040528051906020012060001c6111149190611709565b92915050565b73ffffffffffffffffffffffffffffffffffffffff811661113a57600080fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806111d4838561171d565b90508381101561108d5761108d611a2e565b6000602082840312156111f857600080fd5b5035919050565b6000806040838503121561121257600080fd5b50508035926020909101359150565b60005b8381101561123c578181015183820152602001611224565b50506000910152565b6000815180845261125d816020860160208601611221565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60c0815260006112a260c0830189611245565b60208301979097525063ffffffff948516604082015292909316606083015261ffff908116608083015290911660a090910152919050565b6000602082840312156112ec57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461108d57600080fd5b6020808252825182820181905260009190848201906040850190845b818110156113485783518352928401929184019160010161132c565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261139457600080fd5b813567ffffffffffffffff808211156113af576113af611354565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156113f5576113f5611354565b8160405283815286602085880101111561140e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561144357600080fd5b8335925060208401359150604084013567ffffffffffffffff81111561146857600080fd5b61147486828701611383565b9150509250925092565b60006020828403121561149057600080fd5b813567ffffffffffffffff8111156114a757600080fd5b6114b384828501611383565b949350505050565b6000806000604084860312156114d057600080fd5b83359250602084013567ffffffffffffffff808211156114ef57600080fd5b818601915086601f83011261150357600080fd5b81358181111561151257600080fd5b87602082850101111561152457600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600063ffffffff8083168181036115ae576115ae611566565b6001019392505050565b805180151581146115c857600080fd5b919050565b6000806000806000806000806000806101408b8d0312156115ed57600080fd5b6115f68b6115b8565b995061160460208c016115b8565b985060408b0151975060608b0151965060808b0151955060a08b0151945060c08b0151935060e08b015192506101008b015191506101208b015190509295989b9194979a5092959850565b600181811c9082168061166357607f821691505b60208210810361169c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036116d3576116d3611566565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082611718576117186116da565b500690565b8082018082111561111457611114611566565b60008261173f5761173f6116da565b500490565b60008251611756818460208701611221565b9190910192915050565b8181038181111561111457611114611566565b601f8211156104f057600081815260208120601f850160051c8101602086101561179a5750805b601f850160051c820191505b818110156109cc578281556001016117a6565b67ffffffffffffffff8311156117d1576117d1611354565b6117e5836117df835461164f565b83611773565b6000601f84116001811461183757600085156118015750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556118cd565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156118865786850135825560209485019460019092019101611866565b50868210156118c1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b600061ffff8083168181036115ae576115ae611566565b815167ffffffffffffffff81111561190557611905611354565b61191981611913845461164f565b84611773565b602080601f83116001811461196c57600084156119365750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556109cc565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156119b95788860151825594840194600190910190840161199a565b50858210156119f557878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b838152606060208201526000611a1e6060830185611245565b9050826040830152949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fdfea2646970667358221220d86190f4c600065daf9f67b8e9972cc2c3552382d642ef5ca3a99ca6a997c02664736f6c63430008120033";

type ZombieAttackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZombieAttackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZombieAttack__factory extends ContractFactory {
  constructor(...args: ZombieAttackConstructorParams) {
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
      ZombieAttack & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ZombieAttack__factory {
    return super.connect(runner) as ZombieAttack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZombieAttackInterface {
    return new Interface(_abi) as ZombieAttackInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ZombieAttack {
    return new Contract(address, _abi, runner) as unknown as ZombieAttack;
  }
}
