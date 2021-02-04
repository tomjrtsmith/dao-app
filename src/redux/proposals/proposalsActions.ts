import { ProposalFormKind } from "../../models/Proposal";
import createDaoContract from "../../services/contract/DaoContract";
import { payoutNumeratorStringToPercentages, percentagesToDenom, ProposalFormValues } from "../../services/ProposalsService";
import trans from "../../translation/trans";
import { setProposals, setProposalsLoading } from "./proposals";

export function createProposal(values: ProposalFormValues) {
    return async (dispatch: Function) => {
        const contract = await createDaoContract();
        
        if (values.type === ProposalFormKind.ResoluteMarket) {
            const percentagePayout = payoutNumeratorStringToPercentages(values.resoluteMarket.payoutNumerator);
            const percentagesInToken = percentagesToDenom(percentagePayout);

            contract.createResoluteMarketProposal(
                trans('proposal.resoluteMarket.description'),
                values.resoluteMarket.marketId, 
                values.resoluteMarket.isInvalidMarket ? undefined : percentagesInToken
            );
        }
    }
}

export function loadProposals() {
    return async (dispatch: Function) => {
        const contract = await createDaoContract();

        dispatch(setProposalsLoading(true));

        const proposals = await contract.getProposals();

        dispatch(setProposals(proposals));
        dispatch(setProposalsLoading(false));
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