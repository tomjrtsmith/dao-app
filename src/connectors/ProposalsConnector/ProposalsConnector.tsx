import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProposalsOverview from '../../containers/ProposalsOverview';
import { createProposal, loadProposals } from '../../redux/proposals/proposalsActions';
import { Reducers } from '../../redux/reducers';
import { ProposalFormValues } from '../../services/ProposalsService';


export default function ProposalsConnector() {
    const dispatch = useDispatch();
    const proposals = useSelector((store: Reducers) => store.proposals.proposals);

    useEffect(() => {
        dispatch(loadProposals());
    }, []);
    
    function handleSubmit(values: ProposalFormValues) {
        dispatch(createProposal(values));
    }

    return (
        <ProposalsOverview
            onProposalSubmit={handleSubmit} 
            proposals={proposals}
        />
    );
}