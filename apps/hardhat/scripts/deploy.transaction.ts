import { ethers, network, run } from "hardhat";
import fs from "fs";

async function main() {
  const [deployer] = await ethers.getSigners();
  const chainId = network.config.chainId!;
  console.log({ chainId });
  console.log("Deploying contracts with the account:", deployer.address);
  const token = await ethers.deployContract("Transactions");

  const address = await token.getAddress();
  console.log("Token address:", address);

  const rawData = fs.readFileSync("./address.json");
  const ADDRESS = JSON.parse(rawData.toString());
  ADDRESS["TRANSACTION"] = address;
  fs.writeFileSync("./address.json", JSON.stringify(ADDRESS, null, 2));
}

const verify = async (contractAddress: string, args: any[]) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
