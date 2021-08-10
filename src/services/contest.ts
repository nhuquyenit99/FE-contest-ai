import { DataAccess } from '../access/base';
import { BaseListResponse } from './base';
const CONTEST_PATH = 'api/contest/';
export type Contest = {
    _id: number,
    title: string,
    created_user?: number,
    created: string,
    contestants: number[];
    time_start: string,
    time_end: string,
}
export type ConstestWithProblems = Contest & { 
    problems: {
        title: string 
    }[],
}
export type ListContests = Contest[];
type AllContestResponse = ListContests;
export type ALlContestWithProblemsResponse = BaseListResponse &{
    results: ConstestWithProblems[]
} 

const fetchAllContest = (): Promise<AllContestResponse> => {
    return DataAccess.Get<AllContestResponse>(CONTEST_PATH);
};


const fetchDeleteContest = (id) => {
    const apiDeleteContestId = CONTEST_PATH.concat(id).concat('/');
    return DataAccess.Delete(apiDeleteContestId);
};


// const fetchUpdateContest = (id, newObj) => {
//     const apiUpdateContestId = CONTEST_API_ADDRESS.concat(id).concat('/');
//     return axios.put(apiUpdateContestId, newObj);
// };

export {
    fetchAllContest,
    fetchDeleteContest,
    // fetchAddContest,
    // fetchDeleteContest,
    // fetchUpdateContest,
};