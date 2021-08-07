import { DataAccess } from 'access/base';
const USER_PATH = 'api/user/';
const REGISTER_API_ADDRESS = 'api/register/';
const LOGIN_API_ADDRESS = 'api/login/';
const ATTENDED_CONTEST_ADDRESS = 'api/user/attended-contest/';

export type User = {
    _id: number,
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
    refresh_token: string,
}
type AllUserRespone = {
    count: number,
    next: string,
    previous: string,
    results: ListUser
}
export type PaginationQuery = {
    limit: number,
    offset: number
}
const fetchAllUser = () : Promise<AllUserRespone>=> {
    return DataAccess.Get(USER_PATH);
};
const fetchAllUserPagination = (query: PaginationQuery) : Promise<AllUserRespone>=> {
    return DataAccess.Get(USER_PATH, query);
};

const fetchLogin = (username: string, password: string) => {
    const body = {username, password};
    return DataAccess.Post<RespLogin>(LOGIN_API_ADDRESS, body);
};

const fetchRegister = (form) => {
    const body = {...form};
    return DataAccess.Post(REGISTER_API_ADDRESS, body);
};


type InfoNotification = {
    msg: string   
}
const fetchDeleteUser = (id: number) : Promise<InfoNotification> => {
    return DataAccess.Delete(USER_PATH+id+'/');
};

export {
    fetchLogin,
    fetchAllUser,
    fetchAllUserPagination,
    fetchRegister,
    fetchDeleteUser,
};