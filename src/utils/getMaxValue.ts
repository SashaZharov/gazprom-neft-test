import { FormatData } from '../types';

export const getMaxValue = (array: FormatData[]) =>
  array.reduce(
    (maxValue: number, currentItem: FormatData) =>
      Math.max(maxValue, currentItem.value),
    -Infinity
  );
