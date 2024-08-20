import type { CheckboxValueType } from 'element-plus';

export interface ISearchParam {
  [key: string]: any;
  taskId?: number | string;
  taskName?: string;
  taskType?: number | string | undefined;
  sex?: number | string | undefined;
  hobby?: CheckboxValueType[] | string;
  dateBirth?: string | string[] | undefined;
  timeBrith?:
    | number
    | string
    | Date
    | [number, number]
    | [string, string]
    | [Date, Date];
}
