import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CouncilOverview from '../../containers/CouncilOverview';
import { loadCouncil } from '../../redux/council/councilActions';
import { Reducers } from '../../redux/reducers';


export default function CouncilConnector() {
    const dispatch = useDispatch();
    const council = useSelector((store: Reducers) => store.council.council);

    useEffect(() => {
        dispatch(loadCouncil());
    }, []);

    return (
        <CouncilOverview council={council} />
    );
}