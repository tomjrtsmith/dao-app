export interface ResoluteMarketFormValues {
    isInvalidMarket: boolean;
    marketId: string;
    marketDescription: string;
    collateralTokenId: string;
    payoutNumerators: number[];
    scalarValue: string;
}

export default function createDefaultResoluteMarketFormValues(): ResoluteMarketFormValues {
    return {
        isInvalidMarket: false,
        marketId: '',
        marketDescription: '',
        collateralTokenId: '',
        payoutNumerators: [],
        scalarValue: '0',
    };
}