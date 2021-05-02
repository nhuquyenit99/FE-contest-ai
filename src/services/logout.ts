import { eraseCookie } from 'utils/cookie';

const removeTokens = () => {
    eraseCookie('access_token');
    eraseCookie('refresh_token');
};

export default function logOut() {
    console.log('logout');
    removeTokens();
}