import type { IFormType } from '@/components/common/form/types';

export function useVoluation(type: IFormType) {
  if (type === 'checkbox') {
    return [];
  } else {
    return '';
  }
}
