export const defaultUser = {
    'avatar': '',
    'bio': '',
    'cover_img': '',
    'display_name': '',
    'followers': 0,
    'followings': 0,
    'list_post': [
        {
            'category': null,
            'comment': 0,
            'content': '...',
            'created_date': 'Tue, 22 Dec 2020 04:19:02 GMT',
            'id': '5fe11146a4cd25deeff560d1',
            'image': '',
            'time_to_read': 0,
            'title': '',
            'vote': 0
        },
        {
            'category': {
                'name_category': 'Tâm sự',
                'url': 'talk'
            },
            'comment': 0,
            'content': '123...',
            'created_date': 'Fri, 11 Dec 2020 20:50:25 GMT',
            'id': '5fd379213780da72834cbd37',
            'image': '',
            'time_to_read': 0,
            'title': 'asdgasfg',
            'vote': 1
        },
        {
            'category': {
                'name_category': 'Tâm sự',
                'url': 'talk'
            },
            'comment': 0,
            'content': '123...',
            'created_date': 'Mon, 14 Dec 2020 20:31:43 GMT',
            'id': '5fd7693fe3e5ebc7d85f6e8e',
            'image': '',
            'time_to_read': 0,
            'title': 'asdgasfg',
            'vote': 0
        },
        {
            'category': null,
            'comment': 0,
            'content': '...',
            'created_date': 'Tue, 22 Dec 2020 04:19:04 GMT',
            'id': '5fe11148a4cd25deeff560d2',
            'image': '',
            'time_to_read': 0,
            'title': '',
            'vote': 0
        },
        {
            'category': {
                'name_category': 'Tâm sự',
                'url': 'talk'
            },
            'comment': 2,
            'content': '123...',
            'created_date': 'Mon, 14 Dec 2020 22:29:30 GMT',
            'id': '5fd784da2212a0ad6f72cc49',
            'image': '',
            'time_to_read': 0,
            'title': 'asdgasfg',
            'vote': 1
        }
    ],
    'username': 'abc',
    '_id': '122333444444'
};

export type UserType = typeof defaultUser;

export const topUser = {
    '_id': '5fb23496685674ae279f0e24',
    'avatar': 'https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-xs-avatar/549da160f73711eaa3740de1963a09bb.jpg',
    'bio': '♬♪♫ ♬♪♫♬♪♫♪♩♫♪',
    'cover_img': 'https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-cover/558b7ef0cc0c11e98333537ccdd8d8e6.jpg',
    'display_name': 'Trà Kha',
    'email': '',
    'link_facebook': '',
    'username': 'inrajakha'
};

export type TopUserType = typeof topUser;

export type MiniData = {
    _id: string;
    avatar?: string
}
