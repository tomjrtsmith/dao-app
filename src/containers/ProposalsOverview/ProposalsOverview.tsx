import React, { useState } from 'react';
import { Proposal } from '../../models/Proposal';
import { ProposalFormValues } from '../../services/ProposalsService';
import trans from '../../translation/trans';
import ProposalDialog from '../ProposalDialog';
import ProposalInfo from '../ProposalInfo';

interface Props {
    onProposalSubmit: (values: ProposalFormValues) => void;
    proposals: Proposal[];
    onYesClick: (proposal: Proposal, id: number) => void;
    onNoClick: (proposal: Proposal, id: number) => void;
}


export default function ProposalsOverview({
    onProposalSubmit,
    onNoClick,
    onYesClick,
    proposals,
}: Props) {
    const [isOpen, setOpen] = useState(false);

    function onCreateClick() {
        setOpen(true);
    }

    return (
        <section>
            <button onClick={onCreateClick}>{trans('proposalsOverview.create')}</button>

            {proposals.map((proposal, index) => (
                <ProposalInfo 
                    key={index}
                    proposal={proposal}
                    onNoClick={() => onNoClick(proposal, index)}
                    onYesClick={() => onYesClick(proposal, index)}
                />
            ))}

            <ProposalDialog
                open={isOpen} 
                onRequestClose={() => setOpen(false)}
                onSubmit={onProposalSubmit}
            />
        </section>
    );
}