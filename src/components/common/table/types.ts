/* https://www.iviewui.com/view-ui-plus/component/form/table#API */
import { pageProp } from '../page/types';
export interface ItableColumn {
  type?: string;
  title?: string;
  key?: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  align?: string;
  ellipsis?: boolean;
  tooltip?: boolean;
  slot?: string;
  fixed?: string;
}

export interface ITableProp {
  columns: ItableColumn[];
  data: any[];
  options?: {
    /* 表格的一些设置 */
    stripe?: boolean;
    border?: boolean;
    'show-header'?: boolean;
    size?: 'large' | 'default' | 'small';
    height?: number | string;
    'max-height'?: number | string;
  };
  isShowPage: boolean /* 是否显示分页 */;
  pageOptions?: pageProp;
}
