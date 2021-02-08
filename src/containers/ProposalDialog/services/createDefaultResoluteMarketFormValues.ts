export interface ResoluteMarketFormValues {
    isInvalidMarket: boolean;
    marketId: string;
    marketDescription: string;
    payoutNumerators: number[];
}

export default function createDefaultResoluteMarketFormValues(): ResoluteMarketFormValues {
    return {
        isInvalidMarket: false,
        marketId: '',
        marketDescription: '',
        payoutNumerators: [],
    };
}