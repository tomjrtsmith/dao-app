import { Vote } from "./Vote"

export enum ProposalKindType {
    ResoluteMarket = 'ResoluteMarket',
    NewCouncil = 'NewCouncil',
}

export enum ProposalStatus {
    /// Proposal is in active voting stage.
    Vote = 'Vote',
    /// Proposal has successfully passed.
    Success = 'Success',
    /// Proposal was rejected by the vote.
    Reject = 'Reject',
    /// Proposal is finalized
    Finalized = 'Finalized',
    /// Proposal is rejected
    Rejected = 'Rejected'
}

export interface Proposal {
    status: ProposalStatus;
    proposer: string;
    description: string;
    kind: {
        type: ProposalKindType,
    };
    last_vote: number;
    vote_period_end: number;
    vote_yes: number;
    vote_no: number;
    votes: Map<string, Vote>;
}