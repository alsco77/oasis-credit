var OasisCredit = artifacts.require('./OasisCredit.sol');

module.exports = function (deployer) {
    deployer.deploy(OasisCredit);
}