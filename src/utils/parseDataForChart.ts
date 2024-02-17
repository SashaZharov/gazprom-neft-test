import { DataItem } from '../types';

export const parseDataForChart = (data: DataItem[]) => {
  return data.map((item: DataItem) => ({
    name: item.month,
    value: item.value,
  }));
};
