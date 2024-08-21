<template>
  <el-dropdown @command="handleCommand">
    <span class="userName_wrap">
      <span>用户昵称</span>
      <el-icon><ArrowDown /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="layout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { delUserInfo } from '@/service/userInfo';
import { loginLayout } from '@/api/login/login.api';
import { OA_LOGOUT_URL } from '@/axios/request/config';
const handleCommand = (key: string) => {
  if (key === 'layout') {
    /* 示例 */
    loginLayout().then(() => {
      /* 退出 */
      delUserInfo();
      const href = window.location.href;
      window.location.href = `${OA_LOGOUT_URL}?service=${encodeURIComponent(
        href
      )}`;
    });
  }
};
</script>

<style lang="scss" scoped>
.userName_wrap {
  cursor: pointer;
  display: flex;
  align-items: center;
  & > span {
    margin-right: 4px;
  }
}
</style>
