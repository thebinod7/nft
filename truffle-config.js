const HDWalletProvider = require('truffle-hdwallet-provider');

const MNEMONIC = process.env.REACT_APP_MNEMONIC;
const RINKEBY_NODE = process.env.REACT_APP_RINKEBY_NODE;

module.exports = {
	networks: {
		development: {
			host: '127.0.0.1',
			port: 7545,
			network_id: '*' // Match any network id
		},
		rinkeby: {
			provider: function () {
				return new HDWalletProvider(MNEMONIC, RINKEBY_NODE);
			},
			network_id: 4,
			gas: 4000000 //make sure this gas allocation isn't over 4M, which is the max
		}
	},
	// contracts_directory: './src/contracts/',
	contracts_build_directory: './src/abis/',
	compilers: {
		solc: {
			version: '^0.8.6',
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	}
};
