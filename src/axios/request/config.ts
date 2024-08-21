const TIME_OUT = 100000;
const BASE_URL = '/api/';

/* 此处根据转发情况处理 */
// if (import.meta.env.MODE === 'production') {
// } else {
// }

/* oa登录 */
const OA_URL = 'https://sso.corpautohome.com/';
/* oa登录登出地址 */
const OA_LOGIN_URL = `${OA_URL}login`;
const OA_LOGOUT_URL = `${OA_URL}logout`;

export { BASE_URL, TIME_OUT, OA_LOGIN_URL, OA_LOGOUT_URL };
