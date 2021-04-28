import { DataAccess } from '../access/base';
import { readCookie } from 'utils/cookie';
const TOKEN_PATH = 'api/token/';
type RefreshTokenResponse = {
    access: string
}
const fetchRefreshToken = (): Promise<RefreshTokenResponse> | undefined => {
    let refresh = readCookie('refresh_token');
    if (!refresh) return undefined;
    let body = {
        refresh
    };
    console.log(refresh);
    return DataAccess.Post<RefreshTokenResponse>(TOKEN_PATH + 'refresh', body);
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
    fetchRefreshToken,
    // fetchAddContest,
    // fetchDeleteContest,
    // fetchUpdateContest,
};
