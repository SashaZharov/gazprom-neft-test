import { ChartDataItem } from '../types';

export const getMaxValue = (array: ChartDataItem[]) => {
  return array.reduce((maxValue: number, currentItem: ChartDataItem) => {
    return Math.max(maxValue, currentItem.value);
  }, 0);
};
