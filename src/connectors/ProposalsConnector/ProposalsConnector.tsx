import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProposalsOverview from '../../containers/ProposalsOverview';
import { Proposal } from '../../models/Proposal';
import { createProposal, loadProposals, voteNo, voteYes } from '../../redux/proposals/proposalsActions';
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

    function handleYesClick(proposal: Proposal, id: number) {
        dispatch(voteYes(id.toString()));
    }

    function handleNoClick(proposal: Proposal, id: number) {
        dispatch(voteNo(id.toString()));
    }

    return (
        <ProposalsOverview
            onProposalSubmit={handleSubmit} 
            proposals={proposals}
            onYesClick={handleYesClick}
            onNoClick={handleNoClick}
        />
    );
}