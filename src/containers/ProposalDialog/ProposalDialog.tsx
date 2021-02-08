import React, { ChangeEvent, useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Dialog from '../../compositions/Dialog';
import trans from '../../translation/trans';
import ResoluteMarketForm from './proposalsForms/ResoluteMarketForm';
import { ProposalKindType } from '../../models/Proposal';
import createDefaultProposalFormValues, { NewCouncilFormValues } from './services/createDefaultProposalFormValues';
import { ResoluteMarketFormValues } from './services/createDefaultResoluteMarketFormValues';
import { ProposalFormValues } from '../../services/ProposalsService';
import { MarketViewModel } from '../../models/Market';
import NewCouncilForm from './proposalsForms/NewCouncilForm';

interface Props {
    open: boolean;
    markets: MarketViewModel[];
    onRequestClose: () => void;
    onSubmit: (value: ProposalFormValues) => void;
}

export default function ProposalDialog({
    open,
    markets,
    onRequestClose,
    onSubmit,
}: Props) {
    const [formValues, setFormValues] = useState(createDefaultProposalFormValues());

    function handleSelectChange(event: ChangeEvent<{name?: string, value: unknown}>) {
        setFormValues({
            ...formValues,
            type: event.target.value as ProposalKindType
        });
    }

    function handleResoluteMarketChange(resoluteMarket: ResoluteMarketFormValues) {
        setFormValues({
            ...formValues,
            resoluteMarket,
        });
    }

    function handleNewCouncilChange(newCouncil: NewCouncilFormValues) {
        setFormValues({
            ...formValues,
            newCouncil,
        });
    }

    return (
        <Dialog 
            open={open} 
            title={trans('proposalDialog.title')}
            onSubmitClick={() => onSubmit(formValues)}
            onRequestClose={onRequestClose}
        >
            <Select value={formValues.type} onChange={handleSelectChange}>
                <MenuItem value={ProposalKindType.ResoluteMarket}>{trans('proposalDialog.types.resoluteMarket')}</MenuItem>
                <MenuItem value={ProposalKindType.NewCouncil}>{trans('proposalDialog.types.newCouncil')}</MenuItem>
            </Select>

            {formValues.type === ProposalKindType.ResoluteMarket && (
                <ResoluteMarketForm
                    markets={markets}
                    values={formValues.resoluteMarket}
                    onChange={handleResoluteMarketChange}
                />
            )}

            {formValues.type === ProposalKindType.NewCouncil && (
                <NewCouncilForm
                    values={formValues.newCouncil}
                    onChange={handleNewCouncilChange}
                />
            )}
        </Dialog>
    );
}