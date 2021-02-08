import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import { AddTokenWhitelistFormValues } from '../../services/createDefaultProposalFormValues';
import trans from '../../../../translation/trans';

interface Props {
    onChange: (values: AddTokenWhitelistFormValues) => void;
    values: AddTokenWhitelistFormValues;
}


export default function AddTokenWhitelist({
    onChange,
    values,
}: Props) {
    function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
        onChange({
            ...values,
            description: event.currentTarget.value,
        });
    }

    function handleAccountIdChange(event: ChangeEvent<HTMLInputElement>) {
        onChange({
            ...values,
            accountId: event.currentTarget.value,
        });
    }

    return (
        <div>
            <div>
                <TextField
                    label={trans('addTokenWhitelist.input.accountId')}
                    onChange={handleAccountIdChange}
                    value={values.accountId}
                />
            </div>
            <div>
                <TextField
                    label={trans('addTokenWhitelist.input.description')}
                    onChange={handleDescriptionChange}
                    value={values.description}
                />
            </div>
        </div>
    );
}