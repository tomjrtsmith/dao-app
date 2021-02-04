import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../../containers/Menu';
import { getAccount, signIn, signOut } from '../../redux/account/accountActions';
import { loadDaoInfo } from '../../redux/dao/daoActions';
import { Reducers } from '../../redux/reducers';


export default function MenuConnector() {
    const dispatch = useDispatch();
    const accountInfo = useSelector((store: Reducers) => store.account.account);

    useEffect(() => {
        if (!accountInfo) {
            dispatch(getAccount());
        }

        dispatch(loadDaoInfo());
    }, [dispatch, accountInfo]);

    const handleLoginClick = useCallback(() => {
        dispatch(signIn());
    }, []);

    const handleLogoutClick = useCallback(() => {
        dispatch(signOut());
    }, []);

    return (
        <Menu 
            onLoginClick={handleLoginClick} 
            onLogoutClick={handleLogoutClick}
            account={accountInfo}
        />
    );
}