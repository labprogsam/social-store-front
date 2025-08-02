import Cookies from 'js-cookie';

export function clearCookies() {
    Cookies.remove('access_token', { path: '' });
    Cookies.remove('profile', { path: '' });
}
