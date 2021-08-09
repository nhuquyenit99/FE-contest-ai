import { DataAccess } from 'access/base';

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
const fetchProblemsOnContestId = (contest_id: string): Promise<AllProblemResponse> => {
    return DataAccess.Get('api/nuser/problem?contest_id='+contest_id);
};

export {
    fetchProblemsOnContestId
};