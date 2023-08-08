import { verifyContract, writeToFile } from "./utils/verifyContract";
import { ethers, network } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  // const chainId = network.config.chainId!;
  // console.log({ chainId });
  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.deployContract("SimpleSwap");
  // const address = await token.getAddress();

  // console.log("Token address:", address);
  // writeToFile("Liquidity", address);
  // verifyContract(address, []);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error({ error });
    process.exit(1);
  });
