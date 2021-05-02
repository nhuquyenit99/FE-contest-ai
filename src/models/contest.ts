export const defaultContestItem = {
    _id: '1234567',
    title: 'Contest Name',
    created_user: '',
    created: '',
    constestants: [] as string[],
    language: ['Python', 'Java'],
    time_start: '2013-07-17T23:00:00.000Z',
    time_end: '2013-07-19T23:00:00.000Z',
};

export type ContestItem = typeof defaultContestItem;