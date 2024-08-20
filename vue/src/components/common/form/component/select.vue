<template>
  <el-select
    v-model="currentEl"
    :placeholder="formItem.placeholder"
    :size="formItem.size"
    :class="formItem.class"
    :style="formItem.style"
    v-bind="formItem?.options"
    @change="changeSelect"
  >
    <el-option
      v-for="item in formItem.childItems"
      :value="item.value"
      :label="item.label"
      :key="item.value"
    ></el-option>
  </el-select>
</template>

<script lang="ts" setup>
import type { IFormItem } from '../types';

type valType = number | string | string[] | undefined;

type IProp = {
  formItem: IFormItem;
  modelValue: valType;
};

const props = defineProps<IProp>();

const emits = defineEmits(['handlerChange']);

const currentEl = ref<valType>('');

watch(
  () => props.modelValue,
  (val) => {
    currentEl.value = val;
  },
  {
    deep: true,
    immediate: true,
  }
);

const changeSelect = (val: valType) => {
  emits('handlerChange', val);
};
</script>

<style lang="scss" scoped></style>
