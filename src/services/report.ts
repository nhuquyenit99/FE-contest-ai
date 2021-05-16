import { DataAccess } from '../access/base';
const REPORT_PATH = 'api/report/';
type reportResp = {
    n_contests: number
    n_languages: number
    n_problems: number
    n_results: number
    n_users: number
}
const fetchReport = () : Promise<reportResp> => {
    return DataAccess.Get(REPORT_PATH);
};

export {
    fetchReport
};