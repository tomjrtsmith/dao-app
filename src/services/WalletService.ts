import {
    Near,
    connect,
    WalletConnection,
    keyStores,
} from "near-api-js";

import { NULL_CONTRACT } from '../config';

export interface ConnectConfig {
    accountId?: string;
    nearInstance?: Near,
    walletInstance?: WalletConnection,
    customNodeUrl?: string
}

interface NetworkConfig {
    networkId: string,
    nodeUrl: string,
    contractName: null,
    walletUrl: string,
    initialBalance: string
}

export function getNetworkConfig(networkName: any, nodeUrl?: string): NetworkConfig {
    let network: NetworkConfig;

    switch (networkName) {
        case "mainnet" :
            network = {
                networkId: 'mainnet',
                nodeUrl: nodeUrl || 'https://rpc.mainnet.near.org',
                contractName: null,
                walletUrl: 'https://wallet.near.org',
                initialBalance: "100000000"
            };
            break;
        default:
            network = {
                networkId: 'testnet',
                nodeUrl: nodeUrl || 'https://rpc.testnet.near.org',
                contractName: null,
                walletUrl: 'https://wallet.testnet.near.org',
                initialBalance: "100000000"
            };
    }

    console.log(network)

    return network;
}

let nearInstance: Near;

export async function connectNear() {
    if (nearInstance) {
        return nearInstance;
    }
    console.log(process.env)
    const networkConfig = getNetworkConfig(process.env.REACT_APP_NETWORK);
    nearInstance = await connect({
        ...networkConfig,
        deps: {
            keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        }
    });

    return nearInstance;
}

let walletConnection: WalletConnection;

export async function connectWallet(): Promise<WalletConnection> {
    if (walletConnection) {
        return walletConnection;
    }

    const near = await connectNear();

    walletConnection = new WalletConnection(near, NULL_CONTRACT);
    return walletConnection;
}
