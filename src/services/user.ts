import axios from 'axios';
import { API_ADDRESS } from 'const/api';
import { DataAccess } from 'access/base';
const USER_PATH = 'api/user/';
const REGISTER_API_ADDRESS = API_ADDRESS.concat('/api/register/');
const LOGIN_API_ADDRESS = API_ADDRESS.concat('/api/login/');

export type User = {
    username: string,
    first_name?:string,
    last_name?: string,
    created: string,
    is_admin: boolean,
    is_organizer: boolean
}
export type ListUser = User[]
type RespLogin = {
    access_token: string,
    reset_token: string,
    username: string,
    first_name: string,
    last_name: string
}
type AllUserRespone = {
    count: number,
    next: string,
    previous: string,
    results: ListUser
}
const fetchAllUser = () : Promise<AllUserRespone>=> {
    return DataAccess.Get<AllUserRespone>(USER_PATH);
};

const fetchLogin = (username: string, password: string) => {
    const body = {username, password};
    return axios.post<RespLogin>(LOGIN_API_ADDRESS, body);
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