const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const FiredGuys = await ethers.getContractFactory("FiredGuys");
    const firedguys = await FiredGuys.deploy();
    await firedguys.deployed();

    const receipt = "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a";
    const metadataURI = 'cid/test.png';

    let balance = await firedguys.balanceOf(receipt);
    expect(balance).to.equal(0);

    const newlyMintedToken = await firedguys.payToMint(receipt, metadataURI, { value: ethers.utils.parseEther('0.05')});
    await newlyMintedToken.wait();

    balance = await firedguys.balanceOf(receipt);
     
    expect(await firedguys.isContentOwned(metadataURI)).to.equal(true);
  });
});
