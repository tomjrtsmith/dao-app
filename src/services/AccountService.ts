import { NULL_CONTRACT } from "../config";
import { Account } from "../models/Account";
import trans from "../translation/trans";
import { connectWallet } from "./WalletService";

export async function signUserIn() {
    const connectedWallet = await connectWallet();
    connectedWallet.requestSignIn(NULL_CONTRACT, trans('global.appName'));
}

export async function getAccountInfo(): Promise<Account | null> {
    const connectedWallet = await connectWallet();

    if (!connectedWallet.isSignedIn()) {
        return null;
    }

    const nearAccount = connectedWallet.account();

    return {
        accountId: nearAccount.accountId,
        balance: (await nearAccount.getAccountBalance()).available,
    };
}

export async function signUserOut() {
    const connectedWallet = await connectWallet();
    connectedWallet.signOut();
}
