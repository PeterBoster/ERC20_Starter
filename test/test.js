const { assert } = require('chai');

const Coin = artifacts.require('Coin.sol');

contract('Coin', async (accounts) => {
    describe('Coin Deployed', async () => {
        it('Coin has a name', async () => {
            const coin = await Coin.new();
            const name = await coin.name();
            assert.equal(name, 'Coin');
        })
    })
})