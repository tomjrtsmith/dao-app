import React from 'react';
import ProposalsConnector from '../../connectors/ProposalsConnector';
import Page from '../../containers/Page';
import trans from '../../translation/trans';


export default function HomePage() {
    return (
        <Page>
            <h1>{trans('home.title')}</h1>
            <ProposalsConnector />
        </Page>
    );
}