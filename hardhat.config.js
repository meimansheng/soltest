require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const {ProxyAgent, setGlobalDispatcher} = require("undici");
const proxyAgent = new ProxyAgent("http://127.0.0.1:33210");
setGlobalDispatcher(proxyAgent);

const SEPOLIA_URL = process.env.SEPOLIA_URL;
const SEPOLIA_ACCOUNT = process.env.SEPOLIA_ACCOUNT;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // defaultNetwork: "hardhat",
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [SEPOLIA_ACCOUNT],
      chainId: 111155111
    }
  },
  etherscan: {
    sepolia: {
      apiKey: "MBKGCYS6KRK8TKC9PSNN8MC6R3TTZ2SSBK"
    },
  }
};
