import { DataItem } from '../types';

export const getAverageValue = (data: DataItem[]) => {
  const sum = data.reduce((accumulator, item) => accumulator + item.value, 0);
  return sum / data.length;
};
