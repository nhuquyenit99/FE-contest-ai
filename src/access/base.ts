import { fetchRefreshToken } from 'services/token';
import { readCookie, eraseCookie, createCookie } from 'utils/cookie';

const axios = require('axios');

const headers = {
    'Content-Type': 'application/json',
};
const BASE_URL = 'http://127.0.0.1:8000';

const CLOUD_NAME = 'dj5xafymg';
type ConfigType = {
    method: string,
    url: string,
    data?: any,
    params?: any,
}
const getBaseConfigAxios = (config: ConfigType) => {
    const token = readCookie('access_token');
    const {method, url, data, params} = config;
    return {
        method: method,
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
        params: params,
        data: data
    };
};

const fetchAxios = <T>(config: ConfigType): Promise<T> => {
    return axios(getBaseConfigAxios({...config}))
        .then(response => {
            return response as Promise<{ data: T }>;
        })
        .then(data => data.data)
        .catch(err => {
            if (err.response.status === 401) {
                fetchRefreshToken()?.then(access_resp => {
                    if (!access_resp) return;
                    eraseCookie('access_token');
                    createCookie('access_token', access_resp.access);
                });
                console.log('refresh');
            }
        });
};



const APIPost = <T>(url: string, data?: any): Promise<T> => {
    let config :ConfigType = {
        method: 'POST',
        url,
        data
    };
    return fetchAxios(config);
};

const APIGet = <T>(url: string, params?: object): Promise<T> => {
    let config :ConfigType = {
        method: 'GET',
        url,
        params
    };
    return fetchAxios(config);
};

const APIDelete = <T>(url: string, data?: string): Promise<T> => {
    let config :ConfigType = {
        method: 'DELETE',
        url,
        data
    };
    return fetchAxios(config);
};
const APIPut = <T>(url: string, data: any): Promise<T> => {
    let config :ConfigType = {
        method: 'PUT',
        url,
        data
    };
    return fetchAxios(config);
};
const IMAGEPost = (data: any) => {
    return axios({
        method: 'POST',
        url: `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        data: data,
        header: {
            'Content-Type': 'multipart/form-data',
            'Accept': '*/*',
        },
    });
};
export const DataAccess = {
    Get: APIGet,
    Post: APIPost,
    Delete: APIDelete,
    Put: APIPut,
    IMAGEPost,
};
