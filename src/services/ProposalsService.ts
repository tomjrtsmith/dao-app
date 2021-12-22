import Big from 'big.js';
import { AddTokenWhitelistFormValues, NewCouncilFormValues, RemoveCouncilFormValues } from '../containers/ProposalDialog/services/createDefaultProposalFormValues';

import { ResoluteMarketFormValues } from "../containers/ProposalDialog/services/createDefaultResoluteMarketFormValues";
import { ProposalKindType } from "../models/Proposal";

export interface ProposalFormValues {
    removeCouncil: RemoveCouncilFormValues;
    newCouncil: NewCouncilFormValues;
    resoluteMarket: ResoluteMarketFormValues;
    addTokenWhitelist: AddTokenWhitelistFormValues;
    type: ProposalKindType;
}

export function fetchProposals() {
    
}

export function payoutNumeratorStringToPercentages(rawValue: string) {
    return rawValue.split(' ').map(v => Number(v.trim()));
}

export function percentagesToDenom(percentages: number[], decimals: number) {
    const hunderdPercent = new Big(10).pow(decimals);
    return percentages.map(num => hunderdPercent.mul(num / 100).toFixed(0));
}