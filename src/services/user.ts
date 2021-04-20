import axios from 'axios';
import { API_ADDRESS } from 'const/api';
const USER_API_ADDRESS = API_ADDRESS.concat('/api/user/');

const fetchAllUser = () => {
    return axios.get(USER_API_ADDRESS);
};

const fetchLogin = (username: string, password: string) => {
    const body = {username, password};
    return axios.post(USER_API_ADDRESS, body);
};
// const fetchAddLanguage = (body) => {
//     return axios.post(LANGUAGE_API_ADDRESS, body);
// };

// const fetchDeleteLanguage = (id) => {
//     const apiDeleteLanguageId = LANGUAGE_API_ADDRESS.concat(id).concat('/');
//     return axios.delete(apiDeleteLanguageId);
// };

// const fetchUpdateLanguage = (id, newObj) => {
//     const apiUpdateLanguageId = LANGUAGE_API_ADDRESS.concat(id).concat('/');
//     return axios.put(apiUpdateLanguageId, newObj);
// };

export {
    fetchLogin,
    fetchAllUser,
    // fetchAddLanguage,
    // fetchDeleteLanguage,
    // fetchUpdateLanguage,
};