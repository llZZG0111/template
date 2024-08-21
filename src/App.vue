<template>
  <div class="dlrContainer-wrapper">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';

import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
});
</script>

<style lang="scss">
// 引入全局样式
@import '@/assets/sass/dealerMass3/core/setting';
@import '@/assets/sass/dealerMass3/module/dlrLayerbase';
</style>
