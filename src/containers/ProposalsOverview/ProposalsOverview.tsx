import React, { useState } from 'react';
import { Proposal } from '../../models/Proposal';
import { ProposalFormValues } from '../../services/ProposalsService';
import trans from '../../translation/trans';
import ProposalDialog from '../ProposalDialog';

interface Props {
    onProposalSubmit: (values: ProposalFormValues) => void;
    proposals: Proposal[];
}


export default function ProposalsOverview({
    onProposalSubmit,
    proposals,
}: Props) {
    const [isOpen, setOpen] = useState(false);

    function onCreateClick() {
        setOpen(true);
    }

    return (
        <section>
            <button onClick={onCreateClick}>{trans('proposalsOverview.create')}</button>

            <ProposalDialog
                open={isOpen} 
                onRequestClose={() => setOpen(false)}
                onSubmit={onProposalSubmit}
            />
        </section>
    );
}