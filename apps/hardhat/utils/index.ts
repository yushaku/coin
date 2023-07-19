import fs from "fs";
import { run } from "hardhat";

export const verifyContract = async (contractAddress: string, args: any[]) => {
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

export const writeToFile = async (key: string, address: string) => {
  const rawData = fs.readFileSync("./address.json");
  const ADDRESS = JSON.parse(rawData.toString());
  ADDRESS[key] = address;
  fs.writeFileSync("./address.json", JSON.stringify(ADDRESS, null, 2));
};
