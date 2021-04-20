import axios from 'axios';
import { API_ADDRESS } from 'const/api';
const LANGUAGE_API_ADDRESS = API_ADDRESS.concat('/api/language/');

const fetchAllLanguage = () => {
    return axios.get(LANGUAGE_API_ADDRESS);
};
const fetchAddLanguage = (body) => {
    return axios.post(LANGUAGE_API_ADDRESS, body);
};

const fetchDeleteLanguage = (id) => {
    const apiDeleteLanguageId = LANGUAGE_API_ADDRESS.concat(id).concat('/');
    return axios.delete(apiDeleteLanguageId);
};

const fetchUpdateLanguage = (id, newObj) => {
    const apiUpdateLanguageId = LANGUAGE_API_ADDRESS.concat(id).concat('/');
    return axios.put(apiUpdateLanguageId, newObj);
};

export {
    fetchAllLanguage,
    fetchAddLanguage,
    fetchDeleteLanguage,
    fetchUpdateLanguage,
};