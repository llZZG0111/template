declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'qs';

declare module '*.json' {
  const value: any;
  export default value;
}

interface Window {
  [ftwo: string]: any;
}

declare interface EventTarget {
  value: string;
}
