/* eslint-disable no-undef */
const NFT = artifacts.require('NFT');

module.exports = function (deployer) {
	deployer.deploy(NFT);
};
