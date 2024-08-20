import axios from 'axios';
import type {
  InternalAxiosRequestConfig,
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
} from 'axios';
import { delUserInfo } from '@/service/userInfo';
import qs from 'qs';
import { IResponseParam } from './types';
import { OA_LOGIN_URL } from './config';
// import router from '@/router';

export default class Http {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        return res.data;
      },
      (error: any) => {
        if (error.response.status === 401) {
          delUserInfo();
          /* oa登录 */
          const href = window.location.href;
          window.location.href = `${OA_LOGIN_URL}?service=${encodeURIComponent(
            href
          )}`;
          /* 登录页面 */
          // router.replace('/login');
        }
        return Promise.reject(error);
      }
    );
  }

  request<T>(config: AxiosRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance.request<any, T>(config).then(
        (res) => {
          resolve(res);
        },
        (e) => {
          reject(e);
        }
      );
    });
  }

  get<T>(
    url: string,
    params?: T,
    config?: AxiosRequestConfig
  ): Promise<IResponseParam> {
    return new Promise((resolve, reject) => {
      this.instance
        .get<any, IResponseParam>(url, {
          params,
          ...config,
          paramsSerializer: {
            serialize(param) {
              if (!param) {
                return '';
              }
              const queryString = qs.stringify(param);
              return queryString;
            },
          },
        })
        .then(
          (res) => {
            resolve(res);
          },
          (e) => {
            reject(e);
          }
        );
    });
  }

  post<T>(
    url: string,
    params?: T,
    config?: AxiosRequestConfig
  ): Promise<IResponseParam> {
    return new Promise((resolve, reject) => {
      this.instance
        .post<any, IResponseParam>(url, {
          params,
          ...config,
        })
        .then(
          (res) => {
            resolve(res);
          },
          (e) => {
            reject(e);
          }
        );
    });
  }
}
