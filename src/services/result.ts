import { DataAccess } from 'access/base';
import { BaseListResponse } from './base';
const RESULT_PATH = 'api/result/';

type ResultPost = {
    problem_id: number,
    model_file: any,
    code_train: any,
    code_test: any,
    language_id: number
};
export type Result = {
    _id: number,
    problem: string,
    created_user: string,
    model_file: string,
    code_test: string,
    code_train: string,
    accuracy: number,
    time_submit: string,
    language: string
};

export type ListMySubmissions = BaseListResponse & {
    results: Result[]
};

const fetchSubmitResult = (body: ResultPost) => {
    console.log('body', body);
    return DataAccess.FilePost(RESULT_PATH, body);
};
const fetchListMySubmission = (created_user_id: number, problem_id: number): Promise<ListMySubmissions> => {
    const params = `?created_user=${created_user_id}&problem=${problem_id}`;
    return DataAccess.Get(RESULT_PATH + params);
};

export {
    fetchSubmitResult,
    fetchListMySubmission
};