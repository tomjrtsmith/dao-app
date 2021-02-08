import { ProposalKindType } from "../../../models/Proposal";
import { ProposalFormValues } from "../../../services/ProposalsService";
import createDefaultResoluteMarketFormValues from "./createDefaultResoluteMarketFormValues";

export interface NewCouncilFormValues {
    accountId: string;
    description: string;
}

export default function createDefaultProposalFormValues(): ProposalFormValues {
    return {
        newCouncil: {
            accountId: '',
            description: '',
        },
        resoluteMarket: createDefaultResoluteMarketFormValues(),
        type: ProposalKindType.ResoluteMarket,
    }
}