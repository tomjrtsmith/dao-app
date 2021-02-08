import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Proposal, ProposalKindType, ProposalStatus } from '../../models/Proposal';
import Button from '../../components/Button';
import trans from '../../translation/trans';
import { FLUX_MARKET_DETAIL_URL } from '../../config';

interface Props {
    proposal: Proposal;
    onYesClick: () => void;
    onNoClick: () => void;
    onFinalizeClick: () => void;
}

export default function ProposalInfo({
    proposal,
    onNoClick,
    onYesClick,
    onFinalizeClick,
}: Props) {
    const date = new Date(proposal.vote_period_end / 1000000);

    function handleCardClick() {
        if (proposal.kind.type === ProposalKindType.ResoluteMarket) {
            // @ts-ignore
            window.open(`${FLUX_MARKET_DETAIL_URL}${proposal.kind.market_id}`, '_blank');
        }
    }

    return (
        <Card>
            <CardActionArea onClick={handleCardClick}>
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
                {proposal.status === ProposalStatus.Vote && (
                    <>
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
                    </>
                )}

                {proposal.status === ProposalStatus.Success && (
                    <Button onClick={onFinalizeClick}>
                        {trans('proposalInfo.action.finalize')}
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}