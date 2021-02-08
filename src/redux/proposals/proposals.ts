import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarketViewModel } from '../../models/Market';
import { Proposal } from '../../models/Proposal';

export type ProposalsState = Readonly<{
    proposals: Proposal[];
    hasMoreProposals: boolean;
    expiredMarkets: MarketViewModel[];
    loading: boolean;
    errors: string[];
}>;

const initialState: ProposalsState = {
    hasMoreProposals: true,
    proposals: [],
    expiredMarkets: [],
    loading: false,
    errors: [],
};

const proposalsSlice = createSlice({
    initialState,
    name: 'proposals',
    reducers: {
        setProposals(state: ProposalsState, action: PayloadAction<Proposal[]>): ProposalsState {
            return ({
                ...state,
                proposals: action.payload,
            });
        },
        setProposalsLoading(state: ProposalsState, action: PayloadAction<boolean>): ProposalsState {
            return ({
                ...state,
                loading: action.payload,
            });
        },
        setProposalsErrors(state: ProposalsState, action: PayloadAction<string[]>): ProposalsState {
            return ({
                ...state,
                errors: action.payload,
            });
        },
        setProposalsHasMore(state: ProposalsState, action: PayloadAction<boolean>): ProposalsState {
            return ({
                ...state,
                hasMoreProposals: action.payload,
            });
        },
        setProposalsExpiredMarkets(state: ProposalsState, action: PayloadAction<MarketViewModel[]>): ProposalsState {
            return ({
                ...state,
                expiredMarkets: action.payload,
            });
        },
    },
});

export const {
    setProposals,
    setProposalsLoading,
    setProposalsErrors,
    setProposalsExpiredMarkets,
    setProposalsHasMore,
} = proposalsSlice.actions;

export default proposalsSlice.reducer;
