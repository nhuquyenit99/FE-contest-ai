import { DataAccess } from '../access/base';
const CONTEST_PATH = 'api/contest/';

const fetchAllContest = () => {
    return DataAccess.Get(CONTEST_PATH);
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