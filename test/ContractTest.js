import ether from '../node_modules/zeppelin-solidity/test/helpers/ether';
import { advanceBlock } from '../node_modules/zeppelin-solidity/test/helpers/advanceToBlock';
import { increaseTimeTo, duration } from '../node_modules/zeppelin-solidity/test/helpers/increaseTime';
import latestTime from '../node_modules/zeppelin-solidity/test/helpers/latestTime';
import EVMRevert from '../node_modules/zeppelin-solidity/test/helpers/EVMRevert';


const Web3 = require("web3");
const web3 = new Web3();
const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

const OasisCrowdsale = artifacts.require('OasisCrowdsale');
const OasisCredit = artifacts.require('OasisCredit');

contract('OasisCrowdsale', function ([owner, wallet, investor]) {
  const rate = new BigNumber(8000);
  const cap = 10000;

  before(async function () {
    await advanceBlock();
  });

  beforeEach(async function () {
    this.token = await OasisCredit.new();
    this.crowdsale = await OasisCrowdsale.new(
        rate, cap, this.token.address
    );
  });

  it('should deploy', async function(){
    const ico = await OasisCrowdsale.new(rate, cap, this.token);
  })

  it('should create crowdsale with correct parameters', async function () {
    this.crowdsale.should.exist;
    this.token.should.exist;

    const rate = await this.crowdsale.rate();
    const walletAddress = await this.crowdsale.wallet();
    const cap = await this.crowdsale.cap();

    rate.should.be.bignumber.equal(RATE);
    walletAddress.should.be.equal(wallet);
    cap.should.be.bignumber.equal(CAP);
  });
});