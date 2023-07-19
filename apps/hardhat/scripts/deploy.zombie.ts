import { writeToFile } from "../utils";
import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const token = await ethers.deployContract("CryptoZombies");
  const address = await token.getAddress();
  console.log("Token CryptoZombies address:", address);
  writeToFile("TRANSACTION", address);

  // verifyContract(address, []);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
