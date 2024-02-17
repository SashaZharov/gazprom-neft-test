import { ChartDataItem } from '../types';

export const getMinValue = (array: ChartDataItem[]) => {
  return array.reduce((minValue: number, currentItem: ChartDataItem) => {
    return Math.min(minValue, currentItem.value);
  }, Infinity);
};
