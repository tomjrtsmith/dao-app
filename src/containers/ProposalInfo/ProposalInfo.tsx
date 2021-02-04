import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Proposal } from '../../models/Proposal';
import Button from '../../components/Button';
import trans from '../../translation/trans';

interface Props {
    proposal: Proposal;
    onYesClick: () => void;
    onNoClick: () => void;
}

export default function ProposalInfo({
    proposal,
    onNoClick,
    onYesClick,
}: Props) {
    const date = new Date(proposal.vote_period_end / 1000000);

    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {proposal.description}
                    </Typography>
                    <pre>
                        {JSON.stringify(proposal.kind, null, 4)}
                    </pre>
                    <Typography gutterBottom variant="body1" component="p">
                        {trans('proposalInfo.label.status', {
                            status: proposal.status
                        })}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p">
                        {trans('proposalInfo.label.creator', {
                            creator: proposal.proposer
                        })}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p">
                        {trans('proposalInfo.label.votePeriodEnd', {
                            date: date.toString(),
                        })}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={onYesClick}>
                    {trans('proposalInfo.action.voteYes', {
                        amount: proposal.vote_yes.toString(),
                    })}
                </Button>
                <Button onClick={onNoClick}>
                    {trans('proposalInfo.action.voteNo', {
                        amount: proposal.vote_no.toString(),
                    })}
                </Button>
            </CardActions>
        </Card>
    );
}