export const defaultProblem = {
    '_id': '60ab6c41368e05c8577bd118',
    'title': 'Problem 102636eq',
    'description': '/media/contest/requirements_Rxym3Fn.txt',
    'score': 10.0,
    'code_test': '/media/contest/requirements_mBwOaix.txt',
    'data_sample': '/media/contest/requirements_r99y0RU.txt',
    'train_data': '/media/contest/requirements_g1IdBRl.txt',
    'test_data': '/media/contest/requirements_hHmQnyy.txt',
    'time_executed_limit': 1000.0,
    'contest': {
        '_id': '60947be0368e051d0af8a306',
        'title': 'Sample Contest 100001',
        'description': 'test',
        'created': '2021-05-07T06:29:36.721000+07:00',
        'created_user': 'dai',
        'time_start': '2021-05-07T06:29:36.076000+07:00',
        'time_end': '2021-05-07T06:29:36.076000+07:00'
    },
    'languages': [
        {
            '_id': '607c18ac85b67b915429d6c7',
            'name': 'java6',
            'created': '2021-04-18T18:31:55.993000+07:00',
            'path': '/usr/bin/java'
        },
        {
            '_id': '607dce059b3c820378d8ee88',
            'name': 'Python3',
            'created': '2021-04-20T01:37:57.271000+07:00',
            'path': 'bin/'
        }
    ]
};

export type Problem = typeof defaultProblem;