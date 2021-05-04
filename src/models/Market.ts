import { getTokenMetadata } from "../services/TokenService"

export interface GraphMarketResponse {
    description: string;
    id: string;
    outcome_tags: string[];
    extra_info: string;
    is_scalar: boolean;
    pool: {
        collateral_token_id: string;
    }
}

export interface MarketViewModel {
    id: string;
    isScalar: boolean;
    description: string;
    outcomeTags: string[];
    extraInfo: string;
    collateralTokenId: string;
    decimals: number;
}

export async function transformToMarketViewModel(
    graphResponse: GraphMarketResponse,
): Promise<MarketViewModel> {
    const tokenMetadata = await getTokenMetadata(graphResponse.pool.collateral_token_id);

    return {
        id: graphResponse.id,
        isScalar: graphResponse.is_scalar,
        description: graphResponse.description,
        outcomeTags: graphResponse.outcome_tags,
        extraInfo: graphResponse.extra_info,
        collateralTokenId: graphResponse.pool.collateral_token_id,
        decimals: tokenMetadata.decimals,
    }
}
