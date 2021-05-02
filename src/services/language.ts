import { DataAccess } from '../access/base';
const LANGUAGE_PATH = 'api/language/';

export type Language = {
    _id: number,
    name: string,
    path: string,
    created: string
};
type LanguagePost = {
    name: string,
    path: string
};
type LanguagePut = {
    name: string,
    path: string
};
type ListLanguage = Language[];

const fetchAllLanguage = () : Promise<ListLanguage> => {
    return DataAccess.Get(LANGUAGE_PATH);
};
const fetchAddLanguage = (body: LanguagePost) => {
    return DataAccess.Post(LANGUAGE_PATH, body);
};

const fetchDeleteLanguage = (id: number) => {
    const apiDeleteLanguageId = LANGUAGE_PATH.concat(String(id)).concat('/');
    return DataAccess.Delete(apiDeleteLanguageId);
};

const fetchUpdateLanguage = (id: number, newObj: LanguagePut) => {
    const apiUpdateLanguageId = LANGUAGE_PATH.concat(String(id)).concat('/');
    return DataAccess.Put(apiUpdateLanguageId, newObj);
};

export {
    fetchAllLanguage,
    fetchAddLanguage,
    fetchDeleteLanguage,
    fetchUpdateLanguage,
};