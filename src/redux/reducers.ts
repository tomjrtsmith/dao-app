import { combineReducers } from 'redux';

import account, { AccountState } from './account/account';
import proposals, { ProposalsState } from './proposals/proposals';
import council, { CouncilState } from './council/council';
import dao, { DaoState } from './dao/dao';

export interface Reducers {
    account: AccountState;
    proposals: ProposalsState;
    council: CouncilState;
    dao: DaoState;
}

export default combineReducers<Reducers>({
    account,
    council,
    proposals,
    dao,
});
