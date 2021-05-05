import BN from "bn.js";
import { Account, Contract } from "near-api-js";
import { DAO_ACCOUNT_ID, MAX_GAS, STORAGE_BASE } from "../../config";
import { Proposal } from "../../models/Proposal";
import { connectWallet } from "../WalletService";

class DaoContract {
    contract: Contract;

    constructor(account: Account) {
        this.contract = new Contract(account, DAO_ACCOUNT_ID, {
            viewMethods: ['get_council', 'get_bond', 'get_proposals', 'get_proposal'],
            changeMethods: ['add_proposal', 'vote', 'finalize', 'finalize_external'],
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
    async getProposal(id: string): Promise<Proposal> {
        // @ts-ignore
        const result = await this.contract.get_proposal({ 
            id
        });

        return result;
    }

    async createResoluteMarketProposal(description: string, marketId: string, payoutNumerator?: string[]) {
        // @ts-ignore
        this.contract.add_proposal({
            proposal: {
                description,
                kind: {
                    market_id: marketId,
                    payout_numerator,
                    type: 'ResoluteMarket',
                }
            }
        }, MAX_GAS, STORAGE_BASE);
    }

    async createNewCouncilProposal(description: string, accountId: string) {
        // @ts-ignore
        this.contract.add_proposal({
            proposal: {
                description,
                kind: {
                    target: accountId,
                    type: 'NewCouncil',
                }
            }
        }, MAX_GAS, STORAGE_BASE);
    }

    async createAddTokenToWhitelistProposal(description: string, accountId: string, decimals: number) {
        // @ts-ignore
        this.contract.add_proposal({
            proposal: {
                description,
                kind: {
                    to_add: accountId,
                    decimals,
                    type: 'AddTokenWhitelist',
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

    async finalize(proposalId: string) {
        const proposal = await this.getProposal(proposalId);
        if (proposal.kind.type === "ResoluteMarket" || proposal.kind.type === "AddTokenWhitelist") {
            // @ts-ignore
            this.contract.finalize_external({
                id: proposalId,
            }, MAX_GAS, new BN(0));
        } else {
            // @ts-ignore
            this.contract.finalize({
                id: proposalId,
            }, MAX_GAS, new BN(0));
        }
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
