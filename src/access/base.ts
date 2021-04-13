const axios = require('axios');

const headers = {
    'Authorization': 'Basic Og==',
    'Content-Type': 'application/json',
    'accept': '*/*',
    'Access-Control-Allow-Origin': '*'
};
const BASE_URL = 'http://103.113.83.246:8006';

const CLOUD_NAME = 'dj5xafymg';
const APIPost = async (url: string, data?: string) => {
    const token = localStorage.getItem('token');
    return await axios({
        method: 'POST',
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
        data: data
    });
};

const APIGet = async (url: string) => {
    const token = localStorage.getItem('token');
    return await axios({
        method: 'GET',
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
    });
};

const APIDelete = async (url: string, data?: string) => {
    const token = localStorage.getItem('token');
    return await axios({
        method: 'DELETE',
        url: `${BASE_URL}/${url}`,
        headers: token ? {...headers, 'Authorization' : `Bearer ${token}`} : headers,
        data: data
    });
};
const APIPut = async (url: string, data: string) => {
    const token = localStorage.getItem('token');
    return await axios({
        method: 'PUT',
        url: `${BASE_URL}/${url}`,
        headers: token ? { ...headers, 'Authorization': `Bearer ${token}` } : headers,
        data: data
    });
};
const IMAGEPost = async (data: any) => {
    return await axios({
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
