const OasisCredit = artifacts.require('./OasisCredit.sol');
const OasisCrowdsale = artifacts.require('./OasisCrowdsale.sol');

const Web3 = require("web3");
const web3 = new Web3();

module.exports = function (deployer) {

    const rate = new web3.BigNumber(8000);
    const cap = new web3.BigNumber(web3.toWei(10000, 'ether'));

    deployer.deploy(OasisCredit).then(function() {
        return deployer.deploy(OasisCrowdsale, rate, cap, OasisCredit.address);
      });
}
