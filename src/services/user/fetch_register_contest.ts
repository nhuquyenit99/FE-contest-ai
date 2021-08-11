import { DataAccess } from 'access/base';


const fetchRegisterContest = (contest_id: number) : Promise<{message: string, status: string}>=> {
    const url = 'api/nuser/contest/register/'+contest_id;
    return DataAccess.Post(url);
}; 


export {
    fetchRegisterContest
};