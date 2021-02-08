export interface ResoluteMarketFormValues {
    isInvalidMarket: boolean;
    marketId: string;
    marketDescription: string;
    payoutNumerator: string;
}

export default function createDefaultResoluteMarketFormValues(): ResoluteMarketFormValues {
    return {
        isInvalidMarket: false,
        marketId: '',
        marketDescription: '',
        payoutNumerator: '',
    };
}