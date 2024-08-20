import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalized,
} from 'vue-router';
import qs from 'qs';
import { getLogin } from '@/api/login/login.api';
import { ElMessage } from 'element-plus';
import { getUserInfo } from '@/service/userInfo';

/* 路由动态注入 */
import routerList from './modules';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    children: [...routerList],
  },
  {
    path: '/c',
    name: 'c',
    component: () => import('@/views/c/c.vue'),
  },
  {
    path: '/notfound',
    name: 'notfound',
    meta: {
      name: '无权限',
    },
    component: () => import('@/views/notfound/notfound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const isPageRefresh = true;
router.beforeEach(async (to: RouteLocationNormalized) => {
  const query = to.query;
  const ticket = query.ticket as any as string;
  if (to.path !== '/notfound') {
    /* oa登录 */
    if (ticket) {
      const path = to.path;
      delete query.ticket;
      const param = qs.stringify(query);
      let service = `${window.origin}${path}`;
      if (param) {
        service += `?${param}`;
      }
      const [err, res] = await getLogin({
        ticket,
        service,
      });
      if (err) {
        ElMessage.warning('网络异常，请稍后再试');
        return '/notfound';
      }
      if (res) {
        const data = res.data;
        if (data.returncode !== 0) {
          ElMessage.warning(data.message);
          return '/notfound';
        } else {
          return `${path}?${param}`;
        }
      }
    } else {
      /* 获取用户信息，menu信息，注册路由 */
      // const userInfo = getUserInfo();
      // if (!userInfo) {
      //   await USERSPINIA.getUserInfo();
      // }
      // if (isPageRefresh) {
      //   await MENUSPINIA.getMenuList();
      //   const routeList = router.getRoutes();
      //   if (to.path !== '/') {
      //     if (!routeList.find((r) => r.path === to.path)) {
      //       return '/notfound';
      //     }
      //   }
      //   isPageRefresh = false;
      //   return to;
      // }
    }
  }
});

export default router;
