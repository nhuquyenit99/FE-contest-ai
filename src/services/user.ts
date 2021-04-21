import axios from 'axios';
import { API_ADDRESS } from 'const/api';
import { DataAccess } from 'access/base';
const USER_PATH = 'api/user/';
const REGISTER_API_ADDRESS = API_ADDRESS.concat('/api/register/');
const LOGIN_API_ADDRESS = API_ADDRESS.concat('/api/login/');
const fetchAllUser = () => {
    return DataAccess.Get(USER_PATH);
};

const fetchLogin = (username: string, password: string) => {
    const body = {username, password};
    return axios.post(LOGIN_API_ADDRESS, body);
};


const fetchRegister = (username: string, password: string) => {
    const body = {username, password};
    return axios.post(REGISTER_API_ADDRESS, body);
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
    fetchRegister,
    // fetchAddLanguage,
    // fetchDeleteLanguage,
    // fetchUpdateLanguage,
};