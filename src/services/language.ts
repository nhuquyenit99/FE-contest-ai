import axios from 'axios';
import {LANGUAGE_API_ADDRESS} from 'const/api';


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