import axios from 'axios';
import { API_ADDRESS } from 'const/api';
const CONTEST_API_ADDRESS = API_ADDRESS.concat('/api/contest/');

const fetchAllContest = () => {
    return axios.get(CONTEST_API_ADDRESS);
};
const fetchAddContest = (body) => {
    return axios.post(CONTEST_API_ADDRESS, body);
};

const fetchDeleteContest = (id) => {
    const apiDeleteContestId = CONTEST_API_ADDRESS.concat(id).concat('/');
    return axios.delete(apiDeleteContestId);
};

const fetchUpdateContest = (id, newObj) => {
    const apiUpdateContestId = CONTEST_API_ADDRESS.concat(id).concat('/');
    return axios.put(apiUpdateContestId, newObj);
};

export {
    fetchAllContest,
    fetchAddContest,
    fetchDeleteContest,
    fetchUpdateContest,
};