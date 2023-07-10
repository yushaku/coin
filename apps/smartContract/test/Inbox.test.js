const ganache = require('ganache');
const { Web3 } = require('web3');
const assert = require('assert');
const compile = require('../compile');

const ganacheUrl = 'http://localhost:8545';
const httpProvider = new Web3.providers.HttpProvider(ganacheUrl);
const web3 = new Web3(httpProvider);
const { interface, bytecode } = compile;

let accounts;
let inbox;

beforeEach(async () => {
  // get all accounts of eth
  accounts = await web3.eth.getAccounts();
  console.log({ accounts });

  // use one of those accounts to deploy the contract
  // inbox = await new web3.eth.Contract(JSON.parse(interface))
  //   .deploy({
  //     data: bytecode,
  //     arguments: ['Hi there'],
  //   })
  //   .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys a contracts', () => {
    console.log({ accounts });
  });
});
