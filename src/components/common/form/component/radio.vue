<template>
  <el-radio-group
    v-model="currentEl"
    :size="formItem.size"
    :class="formItem.class"
    :style="formItem.style"
    @change="changeRadio"
  >
    <el-radio
      v-for="(item, index) in formItem.childItems"
      :key="index"
      :label="item.value"
      v-bind="formItem.options"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts" setup>
import type { IFormItem } from '../types';

type valType = number | string | boolean | undefined;

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

const changeRadio = (val: valType) => {
  emits('handlerChange', val);
};
</script>

<style lang="scss" scoped></style>
