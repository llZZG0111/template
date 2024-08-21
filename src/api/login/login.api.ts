import http from '@/axios';
import captureResult from '@/axios/captureResult';
import qs from 'qs';
import type { ILoginParam } from './types';

const RequestUrl = {
  getLogin: '/getLogin', //登录鉴权
  loginLayout: '/logout', // 退出登录
};

export async function getLogin(params: ILoginParam) {
  return captureResult(
    http.post(`${RequestUrl.getLogin}?${qs.stringify(params)}`)
  );
}

/* yapi地址 */
export function loginLayout() {
  return http.post(RequestUrl.loginLayout);
}
