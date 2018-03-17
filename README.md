## OasisCredit ERC20 Token contract

### To get up and running
 - run `npm install` to add node modules
 - create a `.env` file on root folder
   - create Eth address for owner of contract
   - add 'ROPSTEN_PRIVATE_KEY = "xxx"' : xxx = private key for address on ropsten network
   - add 'MAINNET_PRIVATE_KEY = "xxx"' : xxx = private key for address on mainnet
 - run `truffle compile` to build project
 - run `truffle deploy --network ropsten --reset` (re deploys contract)
 - Grab the OasisCredit contract address from the output and search on http://ropsten.etherscan.io/token-search to find the contract details
   - Use this address to add custom tokens to MyCrypto, MetaMask, etc and transfer tokens

### To publicise smart contract code
 - Navigate to the 'Read Smart Contract' tab on the ropsten.etherscan.io/token/[tokenAddr]
 - Select Verify Smart Contract
 - Flatten contract code (OasisCredit.sol file) into one file (no using/import/inheritance)
 - Input Contract Address, Name, set Optimization = 'No'
 - Enter the solidity contract code
 - Verify and publish
 - Voila! The contract information is now visible
