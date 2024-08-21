import type { FormItemRule } from 'element-plus';

export type IFormType =
  | 'input'
  | 'select'
  | 'datePicker'
  | 'timePicker'
  | 'radio'
  | 'checkbox';

/* el-form */
export interface IFormProp {
  inline?: boolean /* 行内表单模式 */;
  labelWidth?: number | string /* 标签的长度 */;
  labelSuffix?: string /* 表单域标签的后缀 */;
  size?: '' | 'large' | 'default' | 'small' /* 用于控制该表单内组件的尺寸 */;
  formList?: IFormItem[] /* 表单类型 */;
}

export interface IFormItem {
  field: string /* formItem的key，与入参key对应 */;
  type: IFormType /* 组件类型 */;
  label?: string /* 标签文本 */;
  labelWidth?: string | number /* 标签宽度 */;
  size?:
    | ''
    | 'large'
    | 'default'
    | 'small' /* 用于控制该表单域下组件的默认尺寸 */;
  rules?: FormItemRule[];
  formItemStyle?: any /* itemForm style */;
  formItemClass?: string /* itemForm class */;
  style?: any /* 内部组件 style */;
  class?: string /* 内部组件 class */;
  placeholder?: string;
  /* options中的配置可参照element中的配置属性添加，这里只加一些常用的 */
  options?: {
    type?: any; // input类型 | date类型 | time类型
    clearable?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    /* input */
    maxlength?: number /* 最大输入长度 */;
    'show-word-limit'?: boolean /* 是否显示统计字数 */;
    rows?: number; // textarea配置
    autosize?: boolean | object; // textarea配置
    isNumber?: boolean /* 是否只能输入数字 */;
    /* select */
    multiple?: boolean /* 是否多选 */;
    filterable?: boolean /* 是否可筛选 */;
    /* date-picker */
    'start-placeholder'?: string /* 范围选择时开始日期的占位内容 */;
    'end-placeholder'?: string /* 范围选择时结束日期的占位内容 */;
    format?: string /* 显示在输入框中的格式 */;
    'range-separator'?: string /* 选择范围时的分隔符 */;
    'disabled-date'?: () => boolean /* 日期禁用 */;
    editable?: boolean /* 文本框可输入 */;
    'value-format'?: string /* 绑定值的格式 */;
    'unlink-panels'?: boolean /* 在范围选择器里取消两个日期面板之间的联动 */;
    /* time-picker */
    'is-range'?: boolean /* 是否为时间范围选择 */;
    'arrow-control'?: boolean /* 是否使用箭头进行时间选择 */;
    'disabled-hours'?: () => number[] /* 禁止选择部分小时选项 */;
    'disabled-minutes'?: () => number[] /* 禁止选择部分分钟选项 */;
    'disabled-seconds'?: () => number[] /* 禁止选择部分秒选项 */;
  };
  childItems?: IChildList[] /* 子类列表。例如select -> option */;
  suffixOptions?: {
    // 表单后携带文字配置
    text: string;
    style?: any;
    class?: any;
  };
}

interface IChildList {
  label: string;
  value: number | string;
}
