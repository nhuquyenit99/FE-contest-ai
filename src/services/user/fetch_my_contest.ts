import { BaseListResponse } from 'services/base';
import { Contest } from 'services/contest';
import { DataAccess } from '../../access/base';

export interface ContestAndScore {
    contest: Contest
    total_score: number
    _id: number
}

export type ContestAndScoreListResponse = BaseListResponse& {
    results: ContestAndScore[]
};

const fetchMyContests = (user_id: number, contest_status: string) => {
    const url = 'api/nuser/user/'+user_id+'/contest?status='+contest_status+'&limit=3';
    return DataAccess.Get<ContestAndScoreListResponse>(url);
}; 

export {
    fetchMyContests
};