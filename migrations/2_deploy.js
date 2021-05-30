// const Token = artifacts.require("Token");
// const dBank = artifacts.require("dBank");

// module.exports = async function(deployer) {
// 	//deploy Token
// 	await deployer.deploy(Token)

// 	//assign token into variable to get it's address
// 	const token = await Token.deployed()
	
// 	//pass token address for dBank contract(for future minting)
// 	await deployer.deploy(dBank, token.address)

// 	//assign dBank contract into variable to get it's address
// 	const dbank = await dBank.deployed()

// 	//change token's owner/minter from deployer to dBank
// 	await token.passMinterRole(dbank.address)
// };


const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const Token = artifacts.require("Token");
const dBank = artifacts.require("dBank"); 

const provider = new HDWalletProvider(
  'hero panda nasty pitch top whisper brief pet jazz arrest trouble know',
  'https://rinkeby.infura.io/v3/48e4d12d7c3849678302f4ed7193a5a5'
);
const web3 = new Web3(provider);

module.exports = async function(deployer) {
	//deploy Token
	await deployer.deploy(Token)

	//assign token into variable to get it's address
	const token = await Token.deployed()
	
	//pass token address for dBank contract(for future minting)
	await deployer.deploy(dBank, token.address)

	//assign dBank contract into variable to get it's address
	const dbank = await dBank.deployed()

	//change token's owner/minter from deployer to dBank
	await token.passMinterRole(dbank.address)
};