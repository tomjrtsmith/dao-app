import React, { ChangeEvent, useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Dialog from '../../compositions/Dialog';
import trans from '../../translation/trans';
import ResoluteMarketForm from './proposalsForms/ResoluteMarketForm';
import { ProposalFormKind } from '../../models/Proposal';
import createDefaultProposalFormValues from './services/createDefaultProposalFormValues';
import { ResoluteMarketFormValues } from './services/createDefaultResoluteMarketFormValues';
import { ProposalFormValues } from '../../services/ProposalsService';
import { MarketViewModel } from '../../models/Market';

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
    const [type, setType] = useState(ProposalFormKind.ResoluteMarket);
    const [formValues, setFormValues] = useState(createDefaultProposalFormValues());

    function handleSelectChange(event: ChangeEvent<{name?: string, value: unknown}>) {
        setType(event.currentTarget.value as ProposalFormKind);
    }

    function handleResoluteMarketChange(resoluteMarket: ResoluteMarketFormValues) {
        setFormValues({
            ...formValues,
            resoluteMarket,
        });
    }

    return (
        <Dialog 
            open={open} 
            title={trans('proposalDialog.title')}
            onSubmitClick={() => onSubmit(formValues)}
            onRequestClose={onRequestClose}
        >
            <Select value={type} onChange={handleSelectChange}>
                <MenuItem value={ProposalFormKind.ResoluteMarket}>{trans('proposalDialog.types.resoluteMarket')}</MenuItem>
            </Select>

            {type === ProposalFormKind.ResoluteMarket && (
                <ResoluteMarketForm
                    markets={markets}
                    values={formValues.resoluteMarket}
                    onChange={handleResoluteMarketChange}
                />
            )}
        </Dialog>
    );
}