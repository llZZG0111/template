<template>
  <el-card class="box-card">
    <template #header>
      <div>{{ $route.meta.name }}</div>
    </template>

    <formTemplate
      v-model="formParam"
      v-bind="formProp"
      @handlerInput="inputchange"
      @handlerInputBlur="inputBlur"
      @handlerSelectChange="selectChange"
      @handlerRadioChange="radioChange"
      @handlerDateChange="dateChange"
      @handlerTimeChange="timeChange"
    >
      <template #buttonSlot>
        <el-button type="primary" @click="search">搜索</el-button>
      </template>
    </formTemplate>
  </el-card>
</template>

<script lang="ts" setup>
import formTemplate from '@/components/common/form/form.vue';
import searchFormProp from './config/search.config';
import type { IFormProp, IFormItem } from '@/components/common/form/types';
import { ISearchParam } from './config/types';
import { useVoluation } from '@/hooks/useVoluation';

const formParam = ref<ISearchParam>({});

const formProp = ref<IFormProp>(JSON.parse(JSON.stringify(searchFormProp)));

const formList = formProp.value.formList ?? [];
for (const item of formList) {
  if (item.field) {
    if (item.field === 'taskType') {
      formParam.value[item.field] = 1;
    } else {
      formParam.value[item.field] = useVoluation(item.type);
    }
  }
}

const search = () => {
  console.log('formParam', formParam.value);
};

const inputchange = (formItem: IFormItem, val: string | number) => {
  if (formItem.field === 'taskId') {
    console.log('对指定field的表单组件监听inputchange事件', val);
  }
};
const inputBlur = (field: string) => {
  if (field === 'taskId') {
    console.log('对指定field的表单组件监听inputblur事件');
  }
};

const selectChange = (formItem: IFormItem, val: string | number) => {
  if (formItem.field === 'taskType') {
    console.log('对指定field的表单组件监听selectChange事件', val);
  }
};

const radioChange = (formItem: IFormItem, val: string | number | boolean) => {
  if (formItem.field === 'sex') {
    console.log('对指定field的表单组件监听radioChange事件', val);
  }
};

const dateChange = (
  formItem: IFormItem,
  val: string | string[] | undefined
) => {
  if (formItem.field === 'dateBirth') {
    console.log('对指定field的表单组件监听dateChange事件', val);
  }
};
const timeChange = (
  formItem: IFormItem,
  val: string | string[] | undefined
) => {
  if (formItem.field === 'timeBirth') {
    console.log('对指定field的表单组件监听timeChange事件', val);
  }
};
</script>

<style lang="scss" scoped>
.parent {
  overflow: hidden;
  display: flex;
}
</style>
