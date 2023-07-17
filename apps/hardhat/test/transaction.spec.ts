import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Token contract", function () {
  async function deployTokenFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const hardhatToken = await ethers.deployContract("Transactions");
    return { hardhatToken, owner, addr1, addr2 };
  }
  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { hardhatToken, owner } = await loadFixture(deployTokenFixture);
      expect(await hardhatToken.getTransactionCount()).to.equal(0);
    });
  });
});
