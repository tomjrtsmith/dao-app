import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MarketViewModel } from '../../models/Market';
import { Proposal } from '../../models/Proposal';
import { ProposalFormValues } from '../../services/ProposalsService';
import trans from '../../translation/trans';
import ProposalDialog from '../ProposalDialog';
import ProposalInfo from '../ProposalInfo';

interface Props {
    onProposalSubmit: (values: ProposalFormValues) => void;
    proposals: Proposal[];
    markets: MarketViewModel[];
    hasMoreProposals: boolean;
    onRequestMoreProposals: () => void;
    onYesClick: (proposal: Proposal, id: number) => void;
    onNoClick: (proposal: Proposal, id: number) => void;
    onFinalizeClick: (proposal: Proposal, id: number) => void;
}


export default function ProposalsOverview({
    onProposalSubmit,
    onNoClick,
    onYesClick,
    onFinalizeClick,
    onRequestMoreProposals,
    hasMoreProposals,
    proposals,
    markets,
}: Props) {
    const [isOpen, setOpen] = useState(false);

    function onCreateClick() {
        setOpen(true);
    }

    return (
        <section>
            <button onClick={onCreateClick}>{trans('proposalsOverview.create')}</button>

            <InfiniteScroll
                dataLength={proposals.length}
                next={onRequestMoreProposals}
                hasMore={hasMoreProposals}
                loader={<div />}
            >
                {proposals.map((proposal, index) => (
                    <ProposalInfo
                        key={index}
                        proposal={proposal}
                        onNoClick={() => onNoClick(proposal, index)}
                        onYesClick={() => onYesClick(proposal, index)}
                        onFinalizeClick={() => onFinalizeClick(proposal, index)}
                    />
                ))}
            </InfiniteScroll>

            <ProposalDialog
                markets={markets}
                open={isOpen} 
                onRequestClose={() => setOpen(false)}
                onSubmit={onProposalSubmit}
            />
        </section>
    );
}