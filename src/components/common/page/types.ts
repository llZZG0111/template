/* https://element-plus.gitee.io/zh-CN/component/pagination.html */
export interface pageProp {
  small?: boolean;
  background?: boolean;
  total: number;
  layout?: string;
  'page-sizes'?: number[];
  'hide-on-single-page': boolean;
}

export interface IPageParam {
  pageSize: number;
  pageNo: number;
}
