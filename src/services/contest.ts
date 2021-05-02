import { DataAccess } from '../access/base';
const CONTEST_PATH = 'api/contest/';

export type Contest = {
    _id: number,
    title: string,
    created_user?: number,
    created: string,
    contestants: number[];
    language: number[],
    time_start: string,
    time_end: string,
}
export type ListContests = Contest[];
type AllContestResponse = ListContests;
const fetchAllContest = (): Promise<AllContestResponse> => {
    return DataAccess.Get<AllContestResponse>(CONTEST_PATH);
};
// const fetchAddContest = (body) => {
//     return axios.post(CONTEST_API_ADDRESS, body);
// };

// const fetchDeleteContest = (id) => {
//     const apiDeleteContestId = CONTEST_API_ADDRESS.concat(id).concat('/');
//     return axios.delete(apiDeleteContestId);
// };

// const fetchUpdateContest = (id, newObj) => {
//     const apiUpdateContestId = CONTEST_API_ADDRESS.concat(id).concat('/');
//     return axios.put(apiUpdateContestId, newObj);
// };

export {
    fetchAllContest,
    // fetchAddContest,
    // fetchDeleteContest,
    // fetchUpdateContest,
};