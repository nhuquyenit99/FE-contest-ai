export const defaultContestItem =     {
    '_id': '6093f5f4368e05ae7c819d85',
    'title': 'Sample Contest 1000',
    'created': '2021-05-06T20:58:11.927000+07:00',
    'created_user': {
        '_id': '608812ef9b3c821990718641',
        'first_name': 'Đại',
        'last_name': 'Nguyễn',
        'username': 'dai'
    },
    'time_start': '2021-05-06T20:58:10.976000+07:00',
    'time_end': '2021-05-06T20:58:10.976000+07:00',
    'description': 'test'
};

export type ContestItem = typeof defaultContestItem;

export const defaultContestPerUser =  {
    '_id': '610350929b3c82229413a7f0',
    'title': 'Sample Contest 100001',
    'created_user': null,
    'description': 'test',
    'created': '2021-07-30T08:06:26.819000+07:00',
    'time_start': '2021-06-01T21:15:11.572000+07:00',
    'time_end': '2021-06-15T21:20:11.572000+07:00'
};

export type ContestPerUser = typeof defaultContestPerUser;