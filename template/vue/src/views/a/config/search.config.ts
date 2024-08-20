import { IFormProp } from '@/components/common/form/types';

const formProp: IFormProp = {
  inline: true,
  formList: [
    {
      field: 'taskId',
      type: 'input',
      label: '任务ID',
      placeholder: '请输入任务ID',
      options: {
        clearable: true,
        isNumber: true,
      },
    },
    {
      field: 'taskName',
      type: 'input',
      label: '任务名称',
      placeholder: '请输入任务名称',
      options: {
        clearable: true,
      },
    },
    {
      field: 'taskType',
      type: 'select',
      label: '任务类型',
      placeholder: '请选择任务类型',
      options: {
        clearable: true,
      },
      childItems: [
        {
          value: 1,
          label: '任务1',
        },
        {
          value: 2,
          label: '任务2',
        },
      ],
    },
    {
      field: 'sex',
      type: 'radio',
      label: '性别',
      options: {},
      childItems: [
        {
          value: 1,
          label: '男',
        },
        {
          value: 2,
          label: '女',
        },
      ],
    },
    {
      field: 'hobby',
      type: 'checkbox',
      label: '爱好',
      options: {},
      childItems: [
        {
          value: 1,
          label: '唱',
        },
        {
          value: 2,
          label: '跳',
        },
        {
          value: 3,
          label: 'rap',
        },
        {
          value: 4,
          label: '篮球',
        },
      ],
    },
    {
      field: 'dateBirth',
      type: 'datePicker',
      label: '出生日期',
      placeholder: '请选择出生日期',
      options: {
        type: 'date',
        editable: false,
        'value-format': 'YYYY-MM-DD',
      },
    },
    {
      field: 'timeBirth',
      type: 'timePicker',
      label: '出生时间',
      placeholder: '请选择出生时间',
      options: {
        editable: false,
        format: 'HH:mm:ss',
        'value-format': 'HH:mm:ss',
      },
    },
  ],
};

export default formProp;
