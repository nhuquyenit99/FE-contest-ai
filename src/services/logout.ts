import { eraseCookie } from 'utils/cookie';

const removeAccessToken = () => {
    eraseCookie('access_token');
};

export default function logOut() {
    console.log('logout');
    removeAccessToken();
}