import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from '../../models/Account';
import { Proposal } from '../../models/Proposal';

export type ProposalsState = Readonly<{
    proposals: Proposal[];
    loading: boolean;
    errors: string[];
}>;

const initialState: ProposalsState = {
    proposals: [],
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
    },
});

export const {
    setProposals,
    setProposalsLoading,
    setProposalsErrors,
} = proposalsSlice.actions;

export default proposalsSlice.reducer;
