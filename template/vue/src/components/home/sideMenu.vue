<template>
  <el-menu
    class="menu_wrap"
    background-color="#545c64"
    text-color="#fff"
    unique-opened
    router
    :default-active="defaultActive"
    :default-openeds="defaultOpeneds"
    @select="selectMenu"
  >
    <template v-for="(menu, index) in menuList" :key="`${menu.path}${index}`">
      <el-sub-menu :index="menu.path">
        <template #title>
          <el-icon><component :is="menu.icon"></component></el-icon>
          <span>{{ menu.name }}</span>
        </template>
        <template
          v-for="(menuItem, num) in menu.children.filter(
            (child) => child.isMenu
          )"
          :key="`${menuItem.path}${num}`"
        >
          <el-menu-item :index="menuItem.path">
            <el-icon><component :is="menuItem.icon"></component></el-icon>
            {{ menuItem.name }}
          </el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
interface IMenuDefine {
  icon: string;
  path: string;
  name: string;
  children: IChildParam[];
}

type IChildParam = {
  isMenu: boolean;
} & Omit<IMenuDefine, 'children'>;

const router = useRouter();
const route = useRoute();
const menuList = ref<IMenuDefine[]>([
  {
    icon: 'Female',
    path: '/parent',
    name: '权限管理',
    children: [
      {
        icon: 'Clock',
        path: '/a',
        name: '菜单管理',
        isMenu: true,
      },
    ],
  },
  {
    icon: 'EditPen',
    path: '/parent1',
    name: '商家管理',
    children: [
      {
        icon: 'ChatLineRound',
        path: '/b',
        name: '商家管理',
        isMenu: true,
      },
    ],
  },
]);

const defaultActive = ref<string>('');
const defaultOpeneds = ref<string[]>([]);

const currentRoutePath = route.path;
let currentRouteParam: any = null;
let parentPath = '';
menuList.value.forEach((menu) => {
  const param = menu.children.find((child) => child.path === currentRoutePath);
  if (param) {
    parentPath = menu.path;
    currentRouteParam = param;
  }
});
if (currentRouteParam) {
  defaultActive.value = currentRouteParam.path;
  defaultOpeneds.value = [parentPath];
} else {
  defaultActive.value = menuList.value[0].children[0].path;
  defaultOpeneds.value = [menuList.value[0].path];
}

router.replace(defaultActive.value);

const selectMenu = (index: string, item: string[]) => {
  defaultActive.value = index;
  defaultOpeneds.value = [item[0]];
};
</script>

<style lang="scss" scoped>
.menu_wrap {
  height: calc(100% - 60px);
}
</style>
