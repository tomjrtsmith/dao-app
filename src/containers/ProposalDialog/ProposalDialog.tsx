import React, { ChangeEvent, useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Dialog from '../../compositions/Dialog';
import trans from '../../translation/trans';
import ResoluteMarketForm from './proposalsForms/ResoluteMarketForm';
import { ProposalKindType } from '../../models/Proposal';
import createDefaultProposalFormValues, { AddTokenWhitelistFormValues, NewCouncilFormValues, RemoveCouncilFormValues } from './services/createDefaultProposalFormValues';
import { ResoluteMarketFormValues } from './services/createDefaultResoluteMarketFormValues';
import { ProposalFormValues } from '../../services/ProposalsService';
import { MarketViewModel } from '../../models/Market';
import NewCouncilForm from './proposalsForms/NewCouncilForm';
import AddTokenWhitelist from './proposalsForms/AddTokenWhitelist';
import RemoveCouncilForm from './proposalsForms/RemoveCouncilForm';

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

    function handleAddTokenWhitelistChange(addTokenWhitelist: AddTokenWhitelistFormValues) {
        setFormValues({
            ...formValues,
            addTokenWhitelist,
        });
    }

    function handleRemoveCouncilChange(removeCouncil: RemoveCouncilFormValues) {
        setFormValues({
            ...formValues,
            removeCouncil,
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
                <MenuItem value={ProposalKindType.RemoveCouncil}>{trans('proposalDialog.types.removeCouncil')}</MenuItem>
                <MenuItem value={ProposalKindType.AddTokenWhitelist}>{trans('proposalDialog.types.addTokenWhitelist')}</MenuItem>
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

            {formValues.type === ProposalKindType.AddTokenWhitelist && (
                <AddTokenWhitelist 
                    values={formValues.addTokenWhitelist}
                    onChange={handleAddTokenWhitelistChange}
                />
            )}

            {formValues.type === ProposalKindType.RemoveCouncil && (
                <RemoveCouncilForm
                    values={formValues.removeCouncil}
                    onChange={handleRemoveCouncilChange}
                />
            )}
        </Dialog>
    );
}