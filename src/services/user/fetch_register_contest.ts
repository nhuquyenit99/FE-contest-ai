import { DataAccess } from '../../access/base';




const fetchRegisterContest = (contest_id: number) : Promise<{message: string, status: string}>=> {
    const url = 'api/nuser/contest/register/'+contest_id;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return DataAccess.Post(url);
}; 

// eslint-disable-next-line import/no-anonymous-default-export
export {
    fetchRegisterContest
};