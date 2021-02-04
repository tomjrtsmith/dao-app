import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CouncilState = Readonly<{
    council: string[];
    loading: boolean;
    errors: string[];
}>;

const initialState: CouncilState = {
    council: [],
    loading: false,
    errors: [],
};

const councilSlice = createSlice({
    initialState,
    name: 'council',
    reducers: {
        setCouncil(state: CouncilState, action: PayloadAction<string[]>): CouncilState {
            return ({
                ...state,
                council: action.payload,
            });
        },
        setCouncilLoading(state: CouncilState, action: PayloadAction<boolean>): CouncilState {
            return ({
                ...state,
                loading: action.payload,
            });
        },
        setCouncilErrors(state: CouncilState, action: PayloadAction<string[]>): CouncilState {
            return ({
                ...state,
                errors: action.payload,
            });
        },
    },
});

export const {
    setCouncil,
    setCouncilErrors,
    setCouncilLoading,
} = councilSlice.actions;

export default councilSlice.reducer;
