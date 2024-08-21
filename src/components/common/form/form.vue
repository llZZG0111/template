<template>
  <el-form
    ref="formRef"
    :model="formData"
    :inline="inline"
    :label-width="labelWidth"
    :label-suffix="labelSuffix"
    :size="size"
  >
    <el-form-item
      v-for="(formItem, index) in formList"
      :key="`formItem${index}`"
      :prop="formItem.field"
      :label="formItem.label"
      :label-width="formItem.labelWidth"
      :rules="formItem.rules"
      :style="formItem.formItemStyle"
      :class="formItem.formItemClass"
    >
      <component
        :is="getComponentName(formItem.type)"
        v-model="formData[`${formItem.field}`]"
        :placeholder="formItem.placeholder"
        :size="formItem.size"
        :class="formItem.class"
        :style="formItem.style"
        v-bind="formItem?.options"
        :formItem="formItem"
        v-on="getElemits(formItem)"
      ></component>
      <span
        :style="formItem.suffixOptions?.style"
        :class="formItem.suffixOptions?.class"
        >{{ formItem.suffixOptions?.text }}</span
      >
      <!-- <el-input
          v-model="formData[`${formItem.field}`]"
          :placeholder="formItem.placeholder"
          :size="formItem.size"
          :class="formItem.class"
          :style="formItem.style"
          v-bind="formItem?.options"
          @input="inputChange(formItem, $event)"
          @blur="inputBlur(formItem, $event)"
        />
        <span
          :style="formItem.suffixOptions?.style"
          :class="formItem.suffixOptions?.class"
          >{{ formItem.suffixOptions?.text }}</span
        > -->

      <!-- <template v-if="formItem.type === 'select'">
        <el-select
          v-model="formData[`${formItem.field}`]"
          :placeholder="formItem.placeholder"
          :size="formItem.size"
          :class="formItem.class"
          :style="formItem.style"
          v-bind="formItem?.options"
          @change="changeSelect(formItem, $event)"
        >
          <el-option
            v-for="item in formItem.childItems"
            :value="item.value"
            :label="item.label"
            :key="item.value"
          ></el-option>
        </el-select>
        <span
          :style="formItem.suffixOptions?.style"
          :class="formItem.suffixOptions?.class"
          >{{ formItem.suffixOptions?.text }}</span
        >
      </template> -->

      <!-- <template v-if="formItem.type === 'radio'">
        <el-radio-group
          v-model="formData[`${formItem.field}`]"
          :size="formItem.size"
          :class="formItem.class"
          :style="formItem.style"
          @change="changeRadio(formItem, $event)"
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
        <span
          :style="formItem.suffixOptions?.style"
          :class="formItem.suffixOptions?.class"
          >{{ formItem.suffixOptions?.text }}</span
        >
      </template> -->

      <!-- <template v-if="formItem.type === 'checkbox'">
        <el-checkbox-group
          v-model="formData[`${formItem.field}`]"
          :size="formItem.size"
          :class="formItem.class"
          :style="formItem.style"
          @change="changeCheckbox(formItem, $event)"
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
        <span
          :style="formItem.suffixOptions?.style"
          :class="formItem.suffixOptions?.class"
          >{{ formItem.suffixOptions?.text }}</span
        >
      </template> -->

      <!-- <template v-if="formItem.type === 'datePicker'">
        <el-date-picker
          v-model="formData[`${formItem.field}`]"
          :size="formItem.size"
          :placeholder="formItem.placeholder"
          :class="formItem.class"
          :style="formItem.style"
          v-bind="formItem?.options"
          @change="changeDate(formItem, $event)"
        />
        <span
          :style="formItem?.suffixOptions?.style"
          :class="formItem?.suffixOptions?.class"
          >{{ formItem?.suffixOptions?.text }}</span
        >
      </template> -->

      <!-- <template v-if="formItem.type === 'timePicker'">
        <el-time-picker
          v-model="formData[`${formItem.field}`]"
          :size="formItem.size"
          :placeholder="formItem.placeholder"
          :class="formItem.class"
          :style="formItem.style"
          v-bind="formItem?.options"
          @change="changeTime(formItem, $event)"
        />
        <span
          :style="formItem?.suffixOptions?.style"
          :class="formItem?.suffixOptions?.class"
          >{{ formItem?.suffixOptions?.text }}</span
        >
      </template> -->
    </el-form-item>
    <el-form-item>
      <slot name="buttonSlot"></slot>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import emitNameList from './emitFunctionName';
import type { IFormProp, IFormItem, IFormType } from './types';
import type { CheckboxValueType } from 'element-plus';
// import { ElInput, ElDatePicker, ElTimePicker } from 'element-plus';
import customSelect from './component/select.vue';
import customRadio from './component/radio.vue';
import customCheckbox from './component/checkbox.vue';

type IProp = {
  modelValue: object;
} & IFormProp;
const props = withDefaults(defineProps<IProp>(), {
  inline: false,
  labelWidth: 80,
  labelSuffix: ':',
  size: 'default',
  formList: () => [],
});

const emits = defineEmits(Object.values(emitNameList));

const formData = ref<any>({});

watch(
  () => props.modelValue,
  (val) => {
    formData.value = val;
  },
  {
    deep: true,
    immediate: true,
  }
);

watch(
  () => formData.value,
  (val) => {
    emits(emitNameList.UPDATEMODELVALUE, val);
  },
  {
    deep: true,
  }
);

const getComponentName = (type: IFormType) => {
  if (type === 'input') {
    return ElInput;
  } else if (type === 'select') {
    return customSelect;
  } else if (type === 'radio') {
    return customRadio;
  } else if (type === 'checkbox') {
    return customCheckbox;
  } else if (type === 'datePicker') {
    return ElDatePicker;
  } else if (type === 'timePicker') {
    return ElTimePicker;
  }
  return '';
};

/* input change事件 */
const inputChange = (formItem: IFormItem, val: string | number) => {
  emits(emitNameList.HANDLERINPUT, formItem, val);
};

/* input失去焦点事件 */
const inputBlur = (formItem: IFormItem, e: FocusEvent) => {
  const { field } = formItem;
  formData.value[field] = e.target?.value.trim();
  const options = formItem.options;
  if (options && options.isNumber) {
    const val = parseInt(formData.value[field]);
    formData.value[field] = isNaN(val) ? '' : val;
  }
  emits(emitNameList.HANDLEINPUTBLUR, field);
};

/* select change事件 */
const changeSelect = (
  formItem: IFormItem,
  val: number | string | string[] | undefined
) => {
  emits(emitNameList.CHANGESELECT, formItem, val);
};

/* radio change事件 */
const changeRadio = (
  formItem: IFormItem,
  val: string | number | boolean | undefined
) => {
  emits(emitNameList.CHANGRADIO, formItem, val);
};

/* checkbox change事件 */
const changeCheckbox = (formItem: IFormItem, val: CheckboxValueType[]) => {
  emits(emitNameList.CHAHNECHECKBOX, formItem, val);
};

/* date change事件 */
const changeDate = (
  formItem: IFormItem,
  val: string | string[] | undefined
) => {
  emits(emitNameList.CHANGEDATE, formItem, val);
};
const changeTime = (
  formItem: IFormItem,
  val:
    | number
    | string
    | Date
    | [number, number]
    | [string, string]
    | [Date, Date]
) => {
  emits(emitNameList.CHANGETIME, formItem, val);
};

const getElemits = (formItem: IFormItem) => {
  const type = formItem.type;
  if (type === 'input') {
    return {
      input: ($event: string | number) => inputChange(formItem, $event),
      blur: ($event: FocusEvent) => inputBlur(formItem, $event),
    };
  } else if (type === 'select') {
    return {
      handlerChange: (val: number | string | string[] | undefined) => {
        formData.value[formItem.field] = val;
        changeSelect(formItem, val);
      },
    };
  } else if (type === 'radio') {
    return {
      handlerChange: (val: number | string | boolean | undefined) => {
        formData.value[formItem.field] = val;
        changeRadio(formItem, val);
      },
    };
  } else if (type === 'checkbox') {
    return {
      handlerChange: (val: CheckboxValueType[]) => {
        formData.value[formItem.field] = val;
        changeCheckbox(formItem, val);
      },
    };
  } else if (type === 'datePicker') {
    return {
      change: (val: string | string[] | undefined) => {
        changeDate(formItem, val);
      },
    };
  } else if (type === 'timePicker') {
    return {
      change: (
        val:
          | number
          | string
          | Date
          | [number, number]
          | [string, string]
          | [Date, Date]
      ) => {
        changeTime(formItem, val);
      },
    };
  }
};
</script>

<style lang="scss" scoped></style>
