import { gql } from "@apollo/client";
import { GraphMarketResponse, MarketViewModel, transformToMarketViewModel } from "../models/Market";
import { graphqlClient } from "./GraphQLService";

export async function getExpiredMarkets(): Promise<MarketViewModel[]> {
    try {
        const result = await graphqlClient.query({
            query: gql`
                query ExiredMarkets {
                    markets: getMarkets(filters: { expired: true, finalized: false }) {
                        items {
                            id
                            description
                            outcome_tags
                            extra_info
                            pool {
                                collateral_token_id
                            }
                        }
                    }
                }
            `,
        });

        const marketsData: GraphMarketResponse[] = result.data.markets.items;
        
        return marketsData.map(market => transformToMarketViewModel(market));
    } catch (error) {
        console.error('[getExpiredMarkets]', error);
        return [];
    }
}