import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent } from 'react';
import OptionSwitch from '../../../../components/OptionSwitch';
import trans from '../../../../translation/trans';
import { ResoluteMarketFormValues } from '../../services/createDefaultResoluteMarketFormValues';

interface Props {
    onChange: (values: ResoluteMarketFormValues) => void;
    values: ResoluteMarketFormValues;
}

export default function ResoluteMarketForm({
    onChange,
    values,
}: Props) {
    function handleMarketTypeChange(isInvalid: boolean) {
        onChange({
            ...values,
            isInvalidMarket: isInvalid,
        });
    }

    function handleMarketIdChange(event: ChangeEvent<HTMLInputElement>) {
        onChange({
            ...values,
            marketId: parseInt(event.currentTarget.value),
        });
    }

    function handlePayoutNumeratorChange(event: ChangeEvent<HTMLInputElement>) {
        onChange({
            ...values,
            payoutNumerator: event.currentTarget.value,
        });
    }

    return (
        <div>
            <OptionSwitch
                labelA={trans('resoluteMarketForm.input.validMarket')}
                labelB={trans('resoluteMarketForm.input.invalidMarket')} 
                value={values.isInvalidMarket}
                onChange={handleMarketTypeChange}
            />

            <div>
                <TextField 
                    type="number" 
                    label={trans('resoluteMarketForm.input.marketId')} 
                    onChange={handleMarketIdChange}
                    value={values.marketId}
                />
            </div>
            <div>
                <TextField
                    helperText={trans('resoluteMarketForm.input.payoutNumeratorHelper')}
                    label={trans('resoluteMarketForm.input.payoutNumerator')} 
                    onChange={handlePayoutNumeratorChange}
                    value={values.payoutNumerator}
                />
            </div>
        </div>
    );
}