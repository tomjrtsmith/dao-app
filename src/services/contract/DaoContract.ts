import BN from "bn.js";
import { Account, Contract } from "near-api-js";
import { DAO_ACCOUNT_ID, MAX_GAS, STORAGE_BASE } from "../../config";
import { Proposal } from "../../models/Proposal";
import { connectWallet } from "../WalletService";

class DaoContract {
    contract: Contract;

    constructor(account: Account) {
        this.contract = new Contract(account, DAO_ACCOUNT_ID, {
            viewMethods: ['get_council', 'get_bond', 'get_proposals'],
            changeMethods: ['add_proposal', 'vote'],
        });
    }

    async getCouncil(): Promise<string[]> {
        // @ts-ignore
        const result = await this.contract.get_council({ a: 1 });

        return result;
    }

    async getBond(): Promise<string> {
        // @ts-ignore
        const result = await this.contract.get_bond({ a: 1 });

        return result;
    }

    async getProposals(from_index = "0", limit = "1000"): Promise<Proposal[]> {
        // @ts-ignore
        const result = await this.contract.get_proposals({ 
            from_index,
            limit,
        });

        return result;
    }

    async createResoluteMarketProposal(description: string, marketId: number, payoutNumerator?: string[]) {
        // @ts-ignore
        this.contract.add_proposal({
            proposal: {
                description,
                kind: {
                    market_id: marketId.toString(),
                    payout_numerator: payoutNumerator,
                    type: 'ResoluteMarket',
                }
            }
        }, MAX_GAS, STORAGE_BASE);
    }

    vote(proposalId: string, vote: 'Yes' | 'No') {
        // @ts-ignore
        this.contract.vote({
            id: proposalId,
            vote,
        }, MAX_GAS, new BN(0));
    }
}


let daoInstance: DaoContract;

export default async function createDaoContract(): Promise<DaoContract> {
    if (daoInstance) {
        return daoInstance;
    }

    const wallet = await connectWallet();
    daoInstance = new DaoContract(wallet.account());

    return daoInstance;
}
