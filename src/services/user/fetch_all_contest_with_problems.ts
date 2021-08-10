import { DataAccess } from 'access/base';
import { ALlContestWithProblemsResponse } from '../contest';

export enum ContestStatus {
    'expired',
    'ongoing',
    'upcoming',
    'all'
}

const fetchAllContestWithProblems = (show_problems: boolean, contest_status: ContestStatus, paginationProps?: {
    page?: number,
}): Promise<ALlContestWithProblemsResponse> => {
    let params = '?';
    if (paginationProps) {
        if (paginationProps.page) {
            params += `page=${paginationProps.page}&`;
        }
    }
    if (ContestStatus[contest_status].toString() !== ContestStatus.all.toString()) {
        params += `status=${contest_status}&`;
    }
    if (show_problems) {
        params += 'show_problems';
    }
    return DataAccess.Get('api/nuser/contest'+params);
};

export {
    fetchAllContestWithProblems,
};