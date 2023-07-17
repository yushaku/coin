import { ethers } from "hardhat";

async function main() {
  const Transactions = await ethers.getContractFactory("Transactions");
  const trans = await Transactions.deploy();
  await trans.deployed();
  console.log("Contract deployed to address:", trans.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
