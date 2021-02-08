import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent } from 'react';
import OptionSwitch from '../../../../components/OptionSwitch';
import { MarketViewModel } from '../../../../models/Market';
import trans from '../../../../translation/trans';
import { ResoluteMarketFormValues } from '../../services/createDefaultResoluteMarketFormValues';

interface Props {
    onChange: (values: ResoluteMarketFormValues) => void;
    values: ResoluteMarketFormValues;
    markets: MarketViewModel[];
}

export default function ResoluteMarketForm({
    onChange,
    values,
    markets,
}: Props) {
    function handleMarketTypeChange(isInvalid: boolean) {
        onChange({
            ...values,
            isInvalidMarket: isInvalid,
        });
    }

    function handleMarketIdChange(event: ChangeEvent<{ name?: string, value: unknown }>) {
        const market = markets.find(market => market.id === event.target.value);

        onChange({
            ...values,
            marketId: market?.id || '',
            marketDescription: market?.description || '',
        });
    }

    function handlePayoutNumeratorChange(event: ChangeEvent<HTMLInputElement>) {
        onChange({
            ...values,
            payoutNumerator: event.currentTarget.value,
        });
    }

    const selectedMarket = markets.find(market => market.id === values.marketId);

    return (
        <div>
            <div>
                <Select label={trans('resoluteMarketForm.input.marketId')} value={values.marketId} onChange={handleMarketIdChange}>
                    {markets.map((market) => (
                        <MenuItem key={market.id} value={market.id}>{market.id} - {market.description}</MenuItem>
                    ))}
                </Select>
            </div>
            <div>
                <br />
                {selectedMarket?.extraInfo}
            </div>
            <OptionSwitch
                labelA={trans('resoluteMarketForm.input.validMarket')}
                labelB={trans('resoluteMarketForm.input.invalidMarket')} 
                value={values.isInvalidMarket}
                onChange={handleMarketTypeChange}
            />
            <div>
                {!values.isInvalidMarket && (
                    <>
                        <div>
                            {selectedMarket?.outcomeTags.map((outcome, index) => (
                                <div key={index}>
                                    <span>{index}</span>
                                    <span>{outcome}</span>
                                </div>
                            ))}
                        </div>
                        <TextField
                            helperText={trans('resoluteMarketForm.input.payoutNumeratorHelper')}
                            label={trans('resoluteMarketForm.input.payoutNumerator')} 
                            onChange={handlePayoutNumeratorChange}
                            value={values.payoutNumerator}
                        />
                    </>
                )}
            </div>
        </div>
    );
}