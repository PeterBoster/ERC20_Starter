const Coin = artifacts.require('Coin.sol');

module.exports = async function(deployer) {
    await deployer.deploy(Coin);
    const coin = await Coin.deployed();
}