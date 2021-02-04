import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DaoInfo } from '../../models/DaoInfo';

export type DaoState = Readonly<{
    daoInfo?: DaoInfo;
    loading: boolean;
    errors: string[];
}>;

const initialState: DaoState = {
    loading: false,
    errors: [],
};

const daoSlice = createSlice({
    initialState,
    name: 'daoInfo',
    reducers: {
        setDaoInfo(state: DaoState, action: PayloadAction<DaoInfo>): DaoState {
            return ({
                ...state,
                daoInfo: action.payload,
            });
        },
        setDaoLoading(state: DaoState, action: PayloadAction<boolean>): DaoState {
            return ({
                ...state,
                loading: action.payload,
            });
        },
        setDaoErrors(state: DaoState, action: PayloadAction<string[]>): DaoState {
            return ({
                ...state,
                errors: action.payload,
            });
        },
    },
});

export const {
    setDaoErrors,
    setDaoInfo,
    setDaoLoading,
} = daoSlice.actions;

export default daoSlice.reducer;
