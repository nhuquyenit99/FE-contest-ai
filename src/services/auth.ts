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

export type AdminPermissionAuthResponse = {
    _id: number,
    username: string,
    is_admin: boolean
};
const fetchAdminPermissionAuth = (user_id: number, is_admin: boolean): Promise<AdminPermissionAuthResponse> => {
    const body = {
        user_id, 
        is_admin: is_admin?'1':'0'
    };
    return DataAccess.Put(AUTH_PATH+'admin', body);
};

export type OrganizerPermissionAuthResponse = {
    _id: number,
    username: string,
    is_organizer: boolean
};
const fetchOrganizerPermissionAuth = (user_id: number, is_organizer: boolean): Promise<OrganizerPermissionAuthResponse> => {
    const body = {
        user_id, 
        is_organizer: is_organizer?'1':'0'
    };
    return DataAccess.Put(AUTH_PATH+'organizer', body);
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
    fetchAdminPermissionAuth,
    fetchOrganizerPermissionAuth
    // fetchAddContest,
    // fetchDeleteContest,
    // fetchUpdateContest,
};
