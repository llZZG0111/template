import localCache from './cache';

const USER_INFO = 'userInfo';
/* 获取用户信息 */
function getUserInfo() {
  return localCache.getCache(USER_INFO);
}

function setUserInfo(userInfo: any) {
  localCache.setCache(USER_INFO, userInfo);
}

/* 删除用户信息 */
function delUserInfo() {
  localCache.deleteCache(USER_INFO);
}

export { getUserInfo, setUserInfo, delUserInfo };
