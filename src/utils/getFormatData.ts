import { DataItem } from '../types';

export const getFormatData = (data: DataItem[]) => {
  return data.map((item: DataItem) => ({
    name: item.month,
    value: item.value,
  }));
};
