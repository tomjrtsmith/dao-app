export interface GraphMarketResponse {
    description: string;
    id: string;
    outcome_tags: string[];
    extra_info: string;
    pool: {
        collateral_token_id: string;
    }
}

export interface MarketViewModel {
    id: string;
    description: string;
    outcomeTags: string[];
    extraInfo: string;
    collateralTokenId: string;
}

export function transformToMarketViewModel(
    graphResponse: GraphMarketResponse,
): MarketViewModel {
    return {
        id: graphResponse.id,
        description: graphResponse.description,
        outcomeTags: graphResponse.outcome_tags,
        extraInfo: graphResponse.extra_info,
        collateralTokenId: graphResponse.pool.collateral_token_id,
    }
}
