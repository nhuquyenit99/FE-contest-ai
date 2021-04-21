import axios from 'axios';
import { API_ADDRESS } from 'const/api';
import { DataAccess } from '../access/base';
const LANGUAGE_PATH = 'api/language/';

const fetchAllLanguage = () => {
    return DataAccess.Get(LANGUAGE_PATH);
};
const fetchAddLanguage = (body) => {
    return DataAccess.Post(LANGUAGE_PATH, body);
};

const fetchDeleteLanguage = (id) => {
    const apiDeleteLanguageId = LANGUAGE_PATH.concat(id).concat('/');
    return DataAccess.Delete(apiDeleteLanguageId);
};

const fetchUpdateLanguage = (id, newObj) => {
    const apiUpdateLanguageId = LANGUAGE_PATH.concat(id).concat('/');
    return DataAccess.Put(apiUpdateLanguageId, newObj);
};

export {
    fetchAllLanguage,
    fetchAddLanguage,
    fetchDeleteLanguage,
    fetchUpdateLanguage,
};