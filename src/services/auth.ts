import { DataAccess } from '../access/base';
const AUTH_PATH = 'api/auth/';

export type UserInfo = {
    _id: number,
    username: string,
    last_name: string,
    first_name: string
}
const fetchGetInfo = (): Promise<UserInfo> => {
    return DataAccess.Get<UserInfo>(AUTH_PATH+'userinfo');
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
    fetchGetInfo,
    // fetchAddContest,
    // fetchDeleteContest,
    // fetchUpdateContest,
};
