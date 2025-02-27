// 大括号的含义
const {ethers} = require("hardhat");

async function main() {
    const fundMeFactory = await ethers.getContractFactory("FundMe");
    console.log("contracts is deploying")
    const fundMe = await fundMeFactory.deploy(10);
    await fundMe.waitForDeployment();
    console.log(`contract has been deployed  successfully address is ${fundMe.target}`);
    //hre.ethers.provider.getNetwork()
}

main().then().catch((error) => {
    console.error(error);
    process.exit(1);
})