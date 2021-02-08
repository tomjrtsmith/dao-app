export interface GraphMarketResponse {
    description: string;
    id: string;
    outcome_tags: string[];
    extra_info: string;
}

export interface MarketViewModel {
    id: string;
    description: string;
    outcomeTags: string[];
    extraInfo: string;
}

export function transformToMarketViewModel(
    graphResponse: GraphMarketResponse,
): MarketViewModel {
    return {
        id: graphResponse.id,
        description: graphResponse.description,
        outcomeTags: graphResponse.outcome_tags,
        extraInfo: graphResponse.extra_info,
    }
}
