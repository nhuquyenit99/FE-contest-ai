import { DataAccess } from '../access/base';
const PROBLEM_PATH = 'api/problem/';

export type Problem = {
    _id: number,
    title: string,
    created_id: number,
    description?: string,
    score: number,
    code_test: string,
    data_sample: string,
    train_data: string,
    test_data: string,
    time_executed_limit: number,
    languages: {
        _id: number,
        name: string,
        file_extensions: string
    }[]
}
export type ListProblems = Problem[];
type AllProblemResponse = ListProblems;
const fetchProblemWithContestId = (querySearch: string): Promise<AllProblemResponse> => {
    let newQuerySearch = querySearch.replace('id', 'contest_id');
    return DataAccess.Get(PROBLEM_PATH+newQuerySearch);
};

export {
    fetchProblemWithContestId
};