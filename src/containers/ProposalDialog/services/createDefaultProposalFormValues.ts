import { ProposalKindType } from "../../../models/Proposal";
import { ProposalFormValues } from "../../../services/ProposalsService";
import createDefaultResoluteMarketFormValues from "./createDefaultResoluteMarketFormValues";

export interface NewCouncilFormValues {
    accountId: string;
    description: string;
}

export interface RemoveCouncilFormValues {
    accountId: string;
    description: string;
}

export interface AddTokenWhitelistFormValues {
    accountId: string;
    description: string;
    decimals: number;
}

export default function createDefaultProposalFormValues(): ProposalFormValues {
    return {
        removeCouncil: {
            accountId: '',
            description: '',
        },
        newCouncil: {
            accountId: '',
            description: '',
        },
        addTokenWhitelist: {
            accountId: '',
            description: '',
            decimals: 18,
        },
        resoluteMarket: createDefaultResoluteMarketFormValues(),
        type: ProposalKindType.ResoluteMarket,
    }
}