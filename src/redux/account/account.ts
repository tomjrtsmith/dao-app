import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from '../../models/Account';

export type AccountState = Readonly<{
    account: Account | null;
    loading: boolean;
    errors: string[];
}>;

const initialState: AccountState = {
    account: null,
    loading: false,
    errors: [],
};

const accountSlice = createSlice({
    initialState,
    name: 'account',
    reducers: {
        setAccount(state: AccountState, action: PayloadAction<Account | null>): AccountState {
            return ({
                ...state,
                account: action.payload,
            });
        },
        setAccountLoading(state: AccountState, action: PayloadAction<boolean>): AccountState {
            return ({
                ...state,
                loading: action.payload,
            });
        },
        setAccountErrors(state: AccountState, action: PayloadAction<string[]>): AccountState {
            return ({
                ...state,
                errors: action.payload,
            });
        },
    },
});

export const {
    setAccount,
    setAccountErrors,
    setAccountLoading,
} = accountSlice.actions;

export default accountSlice.reducer;
