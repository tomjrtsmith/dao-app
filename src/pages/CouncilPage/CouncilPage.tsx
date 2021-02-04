import React from 'react';
import CouncilConnector from '../../connectors/CouncilConnector';
import Page from '../../containers/Page';
import trans from '../../translation/trans';


export default function CouncilPage() {
    return (
        <Page>
            <h1>{trans('council.title')}</h1>
            
            <CouncilConnector />
        </Page>
    );
}