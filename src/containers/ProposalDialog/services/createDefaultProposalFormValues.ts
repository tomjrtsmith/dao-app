import { ProposalFormKind } from "../../../models/Proposal";
import { ProposalFormValues } from "../../../services/ProposalsService";
import createDefaultResoluteMarketFormValues from "./createDefaultResoluteMarketFormValues";

export default function createDefaultProposalFormValues(): ProposalFormValues {
    return {
        resoluteMarket: createDefaultResoluteMarketFormValues(),
        type: ProposalFormKind.ResoluteMarket,
    }
}