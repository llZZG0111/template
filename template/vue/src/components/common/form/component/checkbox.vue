<template>
  <el-checkbox-group
    v-model="currentEl"
    :size="formItem.size"
    :class="formItem.class"
    :style="formItem.style"
    @change="changeCheckbox"
  >
    <el-checkbox
      v-for="(item, index) in formItem.childItems"
      :key="index"
      :label="item.value"
      v-bind="formItem.options"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script lang="ts" setup>
import type { IFormItem } from '../types';
import type { CheckboxValueType } from 'element-plus';

type IProp = {
  formItem: IFormItem;
  modelValue: (string | number)[];
};

const props = defineProps<IProp>();

const emits = defineEmits(['handlerChange']);

const currentEl = ref<(string | number)[]>();

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

const changeCheckbox = (val: CheckboxValueType[]) => {
  emits('handlerChange', val);
};
</script>

<style lang="scss" scoped></style>
