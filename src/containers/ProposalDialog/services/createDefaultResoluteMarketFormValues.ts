export interface ResoluteMarketFormValues {
    isInvalidMarket: boolean;
    marketId: number;
    payoutNumerator: string;
}

export default function createDefaultResoluteMarketFormValues(): ResoluteMarketFormValues {
    return {
        isInvalidMarket: false,
        marketId: 0,
        payoutNumerator: '',
    };
}