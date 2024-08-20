import { RouteRecordRaw } from 'vue-router';

const routerList: RouteRecordRaw[] = [];

const modulesFiles: any = import.meta.glob('./*.(ts|js)', {
  eager: true,
});

for (const key in modulesFiles) {
  const curModule = modulesFiles[key].default || modulesFiles[key];
  routerList.push(...curModule);
}

export default routerList;
