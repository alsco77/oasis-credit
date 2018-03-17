pragma solidity ^0.4.18;
import "../node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract OasisCredit is StandardToken {
  string public name = "OasisCredit"; 
  string public symbol = "OCR";
  uint public INITIAL_SUPPLY = 100000000;

  function OasisCredit() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}