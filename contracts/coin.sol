// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/utils/Context.sol';

contract Coin is Context, ERC20{
    constructor() ERC20('Coin', 'COIN') {
        _mint(msg.sender, 1000 * 10**18);
    }
}