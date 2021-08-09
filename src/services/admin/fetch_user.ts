import { DataAccess } from 'access/base';
const USER_PATH = 'api/admin/user';


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
    page: number,
}
const fetchAllUser = () : Promise<AllUserRespone>=> {
    return DataAccess.Get(USER_PATH);
};
const fetchAllUserPagination = (query: PaginationQuery) : Promise<AllUserRespone>=> {
    return DataAccess.Get(USER_PATH, query);
};



type InfoNotification = {
    msg: string   
}
const fetchDeleteUser = (id: number) : Promise<InfoNotification> => {
    return DataAccess.Delete(USER_PATH+'/'+id);
};

export {
    fetchAllUser,
    fetchAllUserPagination,
    fetchDeleteUser,
};