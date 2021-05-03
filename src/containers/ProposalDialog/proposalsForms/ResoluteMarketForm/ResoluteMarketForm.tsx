import FluxSdk from '@fluxprotocol/amm-sdk';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Big from 'big.js';
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
            marketId: market?.id ?? '',
            marketDescription: market?.description ?? '',
            collateralTokenId: market?.collateralTokenId ?? '',
            payoutNumerators: market?.outcomeTags.map(_ => 0) ?? [],
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

    function handleScalarChange(value: string) {
        try {
            onChange({
                ...values,
                scalarValue: value,
            });

            const result = FluxSdk.utils.calcScalarDistributionPercentages(new Big(value), new Big(selectedMarket?.outcomeTags[0] ?? '0'), new Big(selectedMarket?.outcomeTags[1] ?? '0'));
    
            onChange({
                ...values,
                scalarValue: value,
                payoutNumerators: result,
            });
        } catch (error) {
            console.error(error);
        }
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
                {!values.isInvalidMarket && !selectedMarket?.isScalar && (
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

                {!values.isInvalidMarket && selectedMarket?.isScalar && (
                    <div>
                        <div>Short bound: {selectedMarket.outcomeTags[0]}</div>
                        <div>Long bound: {selectedMarket.outcomeTags[1]}</div>

                        <TextField
                            label={trans('resoluteMarketForm.input.scalarValue')}
                            onChange={(event) => handleScalarChange(event.target.value)}
                            value={values.scalarValue}
                            type="number"
                        />

                        <div>Payout %</div>
                        <div>Short: {values.payoutNumerators[0]}</div>
                        <div>Long: {values.payoutNumerators[1]}</div>
                    </div>
                )}
            </div>
        </div>
    );
}