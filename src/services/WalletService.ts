import {
    Near,
    connect,
    WalletConnection,
    keyStores,
} from "near-api-js";
import FluxSdk from '@fluxprotocol/amm-sdk';


import { API_URL, NULL_CONTRACT } from '../config';

export interface ConnectConfig {
    accountId?: string;
    nearInstance?: Near,
    walletInstance?: WalletConnection,
    customNodeUrl?: string
}

let sdkInstance = new FluxSdk({
    // @ts-ignore
    network: process.env.REACT_APP_NETWORK || 'testnet',
    nullContractId: NULL_CONTRACT,
    graphApiUrl: API_URL,
});


export async function connectSdk(): Promise<FluxSdk> {
    await sdkInstance.connect();
    return sdkInstance;
}

export async function connectWallet(): Promise<WalletConnection> {
    const sdk = await connectSdk();
    return sdk.walletConnection!;
}

