import { ProposalKindType } from "../../models/Proposal";
import createDaoContract from "../../services/contract/DaoContract";
import { getExpiredMarkets } from "../../services/MarketService";
import { payoutNumeratorStringToPercentages, percentagesToDenom, ProposalFormValues } from "../../services/ProposalsService";
import trans from "../../translation/trans";
import { Reducers } from "../reducers";
import { setProposals, setProposalsExpiredMarkets, setProposalsHasMore, setProposalsLoading } from "./proposals";

export function createProposal(values: ProposalFormValues) {
    return async (dispatch: Function) => {
        const contract = await createDaoContract();
        
        if (values.type === ProposalKindType.ResoluteMarket) {
            const percentagePayout = payoutNumeratorStringToPercentages(values.resoluteMarket.payoutNumerator);
            const percentagesInToken = percentagesToDenom(percentagePayout);

            contract.createResoluteMarketProposal(
                trans('proposal.resoluteMarket.description', {
                    description: values.resoluteMarket.marketDescription,
                }),
                values.resoluteMarket.marketId, 
                values.resoluteMarket.isInvalidMarket ? undefined : percentagesInToken
            );
        } else if (values.type === ProposalKindType.NewCouncil) {
            contract.createNewCouncilProposal(values.newCouncil.description, values.newCouncil.accountId);
        } else if (values.type === ProposalKindType.AddTokenWhitelist) {
            contract.createAddTokenToWhitelistProposal(values.addTokenWhitelist.description, values.addTokenWhitelist.accountId);
        }
    }
}

export function loadProposals(reset = false) {
    return async (dispatch: Function, getState: () => Reducers) => {
        const contract = await createDaoContract();
        const limit = 10;
        
        if (reset) {
            dispatch(setProposals([]))
        }
        
        dispatch(setProposalsLoading(true));
        
        const state = getState();
        const currentLoadedProposals = state.proposals.proposals;
        const offset = currentLoadedProposals.length.toString();
        const proposals = await contract.getProposals(offset, limit.toString());

        if (proposals.length === limit) {
            dispatch(setProposalsHasMore(true));
        } else {
            dispatch(setProposalsHasMore(false));
        }

        dispatch(setProposals([
            ...state.proposals.proposals,
            ...proposals,
        ]));
        dispatch(setProposalsLoading(false));
    }
}

export function loadExpiredMarkets() {
    return async (dispatch: Function) => {
        const markets = await getExpiredMarkets();
        dispatch(setProposalsExpiredMarkets(markets));
    }
}

export function voteYes(proposalId: string) {
    return async (dispatch: Function) => {
        const contract = await createDaoContract();
        contract.vote(proposalId, 'Yes');
    }
}

export function voteNo(proposalId: string) {
    return async (dispatch: Function) => {
        const contract = await createDaoContract();
        contract.vote(proposalId, 'No');
    }
}

export function finalizeProposal(proposalId: string) {
    return async (dispatch: Function) => {
        const contract = await createDaoContract();
        contract.finalize(proposalId);
    }
}