import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { parseEther } from "ethers";

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

  describe("store transactions", function () {
    it("push transactions", async function () {
      const { hardhatToken } = await loadFixture(deployTokenFixture);
      await hardhatToken.addToBlock(
        "0x4f5b20eaD662E7Cde0a4Ae035AfBcEa398A961E6",
        parseEther("0.001"),
        "test",
        "test"
      );

      expect(await hardhatToken.getTransactionCount()).to.equal(1);
      const trans = await hardhatToken.getAllTransactions();
      trans.forEach((it) => {
        expect(it[1]).to.equal("0x4f5b20eaD662E7Cde0a4Ae035AfBcEa398A961E6");
      });
    });
  });
});
