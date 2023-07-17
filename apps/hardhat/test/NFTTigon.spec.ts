import { NFTTigon } from "../typechain";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("NFT tigon", () => {
  const NAME = "NFT Tigon";
  const SYMBOL = "NFTT";

  let deployer, owner1;
  let ethTigon: NFTTigon & {
    deploymentTransaction(): any;
  };

  beforeEach(async () => {
    [deployer, owner1] = await ethers.getSigners();
    console.log([deployer, owner1]);

    const tigon = await ethers.getContractFactory("NFTTigon");
    ethTigon = await tigon.deploy(NAME, SYMBOL);
  });

  describe("Deployment", function () {
    it("it has a name and synbol", async function () {
      const name = await ethTigon.name();
      const symbol = await ethTigon.symbol();

      expect(name).to.equal(NAME);
      expect(symbol).to.equal(SYMBOL);
    });
  });
});
