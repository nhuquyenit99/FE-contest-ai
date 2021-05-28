import { DataAccess } from 'access/base';
const RESULT_PATH = 'api/result/';

type ResultPost = {
    problem_id: number,
    model_file: any,
    code_train: any,
    code_test: any,
    language_id: number
};

const fetchSubmitResult = (body: ResultPost) => {
    console.log(body);
    return DataAccess.FilePost(RESULT_PATH, body);
};

export {
    fetchSubmitResult
};