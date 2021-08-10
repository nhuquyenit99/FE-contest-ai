import { DataAccess } from 'access';

let rankExample = {
    _id: '61118dbd9b3c823e5056111d',
    user: {
        _id: '6110ea689b3c8209089ed050',
        username: 'dai',
        first_name: 'Đại',
        last_name: 'Nguyễn'
    },
    total_score: 120,
    created: '2021-08-10T03:19:09.696000+07:00',
    updated: '2021-08-10T03:19:09.697000+07:00'
};

type RankResponse = (typeof rankExample)[];


const fetchRank = (contest_id: number): Promise<RankResponse> => {
    return DataAccess.Get(`api/nuser/contest/${contest_id}/rank`);
};

export { fetchRank };