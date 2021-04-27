import { readCookie } from 'utils/cookie';

const axios = require('axios');

const headers = {
    'Content-Type': 'application/json',
};
const BASE_URL = 'http://127.0.0.1:8000';

const CLOUD_NAME = 'dj5xafymg';
const APIPost = <T>(url: string, data?: T): Promise<T> => {
    const token = readCookie('access_token');
    return axios({
        method: 'POST',
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
        data: data
    })
        .then(response => {
            if (response.statusText !== 'OK') {
                throw new Error(response.statusText);
            }
            return response as Promise<{ data: T }>;
        })
        .then(data => {
            return data.data;
        });
};

const APIGet = <T>(url: string, params?: object): Promise<T> => {
    const token = readCookie('access_token');
    return axios({
        method: 'GET',
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
        params: params
    })
        .then(response => {
            if (response.statusText !== 'OK') {
                throw new Error(response.statusText);
            }
            return response as Promise<{ data: T }>;
        })
        .then(data => {
            return data.data;
        });
};

const APIDelete = <T>(url: string, data?: string): Promise<T> => {
    const token = readCookie('access_token');
    return axios({
        method: 'DELETE',
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
        data: data
    })
        .then(response => {
            console.log(response);
            if (response.statusText !== 'OK') {
                throw new Error(response.statusText);
            }
            return response as Promise<{ data: T }>;
        })
        .then(data => {
            return data.data;
        });
};
const APIPut = <T>(url: string, data: T): Promise<T> => {
    const token = readCookie('access_token');
    return axios({
        method: 'PUT',
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
        data: data
    }).then(response => {
        console.log(response);
        if (response.statusText !== 'OK') {
            throw new Error(response.statusText);
        }
        return response as Promise<{ data: T }>;
    })
        .then(data => {
            return data.data;
        });
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
