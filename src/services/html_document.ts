import { DataAccess } from '../access/base';
const AUTH_PATH = 'api/document/';

export type SampleCodeHelp = {
    _id: number,
    name: string,
    html_content: string,
}
const fetchSampleCodeHelp = (): Promise<SampleCodeHelp> => {
    return DataAccess.Get(AUTH_PATH+'sample-code');
};
const fetchUpdateSampleCodeHelp = (html_content: string): Promise<SampleCodeHelp> => {
    const body = {
        html_content
    };
    return DataAccess.Put(AUTH_PATH+'sample-code', body);
};

export {
    fetchSampleCodeHelp,
    fetchUpdateSampleCodeHelp
};