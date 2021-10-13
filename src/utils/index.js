import Web3 from 'web3';

export const getWeb3 = () => {
	if (window.ethereum) {
		try {
			const web3 = new Web3(window.ethereum);
			window.ethereum.enable();
			return web3;
		} catch (error) {
			throw error;
		}
	} else {
		throw Error('Please configure wallet!');
	}
};

export const getAbi = name => {
	return require(`../abis/${name}`);
};

export const getContract = async ({ web3, contract_addr, contract_name }) => {
	const { abi } = await getAbi(contract_name);
	return new web3.eth.Contract(abi, contract_addr);
};
