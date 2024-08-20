<template>
  <el-container class="container">
    <el-aside class="aside_left_wrap" width="200px">
      <div class="home_logo">这是logo</div>
      <sideMenu />
    </el-aside>
    <el-container>
      <el-header class="header_wrap">
        <sideHeader />
      </el-header>
      <el-main class="home_content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import sideMenu from '@/components/home/sideMenu.vue';
import sideHeader from '@/components/home/sideHeader.vue';
</script>

<style lang="scss" scoped>
.container {
  .aside_left_wrap {
    display: flex;
    flex-direction: column;
    .home_logo {
      background-color: #2d8cf0;
      color: #fff;
      text-align: center;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      flex-shrink: inherit;
      & > img {
        width: 70%;
      }
    }
  }
  .header_wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-bottom: 1px solid #dddee1;
  }
  .home_content {
    padding: 16px;
    height: calc(100% - 92px);
    overflow: auto;
    background: #f5f7f9;
  }
}
</style>
