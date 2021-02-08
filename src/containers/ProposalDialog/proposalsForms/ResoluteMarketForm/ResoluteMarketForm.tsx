import InputAdornment from '@material-ui/core/InputAdornment';
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
            payoutNumerators: market?.outcomeTags.map(_ => 0) || [],
        });
    }

    function handlePayoutNumeratorsChange(amount: string, index: number) {
        const newPayoutNumerators = values.payoutNumerators;
        newPayoutNumerators[index] = Number(amount);

        onChange({
            ...values,
            payoutNumerators: newPayoutNumerators,
        });
    }

    const selectedMarket = markets.find(market => market.id === values.marketId);
    const percentagesTogether = values.payoutNumerators.reduce((prev, current) => prev + current, 0);

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
                    <div>
                        {selectedMarket?.outcomeTags.map((outcome, index) => (
                            <div key={index}>
                                <TextField 
                                    label={outcome}
                                    onChange={(event) => handlePayoutNumeratorsChange(event.target.value, index)}
                                    value={values.payoutNumerators[index] || '0'}
                                    type="number"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <span>%</span>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>
                        ))}

                        {percentagesTogether !== 100 && (
                            <p>{trans('resoluteMarketForm.error.not100')}</p>
                        )}
                    </div>
                )}

            </div>
        </div>
    );
}