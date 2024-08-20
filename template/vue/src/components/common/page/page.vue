<template>
  <el-pagination
    :page-size="pageSize"
    :current-page="pageNo"
    :total="total"
    :hide-on-single-page="value"
    layout="prev, pager, next"
  />
</template>

<script lang="ts" setup>
import type { pageProp } from './types';
type IProp = {
  pageSize: number;
  pageNo: number;
} & pageProp;

const props = withDefaults(defineProps<IProp>(), {
  pageSize: 20,
  pageNo: 1,
  small: false,
  background: false,
  total: 0,
  layout:
});
</script>

<style lang="scss" scoped></style>
