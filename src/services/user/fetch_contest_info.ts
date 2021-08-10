import { DataAccess } from '../../access/base';

let contest_info = {
    created: '2021-07-30T08:06:26.819000+07:00',
    created_user: 'dai',
    description: 'This is a description',
    time_end: '2021-06-15T21:20:11.572000+07:00',
    time_start: '2021-06-01T21:15:11.572000+07:00',
    title: 'Sample Contest 100001',
    _id: '610350929b3c82229413a7f0'
};

export type ContestInfo = typeof contest_info;

const fetchContestInfo = (contest_id: string) => {
    const url = 'api/nuser/contest/'+contest_id;
    return DataAccess.Get<ContestInfo>(url);
}; 

export {
    fetchContestInfo,
};