import {feeList} from "./feeList";

export const networks = {
    mainnet: {
        web3Provider: 'https://rpc.bitci.com/',
        explorerLink: 'https://bitciexplorer.com',
        id: 1907,
        name: 'Bitcichain',
        mainCurrency: 'BITCI',
        fees: feeList[1907]
    },
    testnet: {
        web3Provider: 'https://testnet.bitcichain.com/',
        explorerLink: 'https://testnet.bitciexplorer.com',
        id: 1908,
        name: 'Bitcichain - Testnet',
        mainCurrency: 'BITCIT',
        isTestNet: true,
        fees: feeList[1908]
    }
}
