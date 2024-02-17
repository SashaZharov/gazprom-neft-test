import { FormatData } from '../types';

export const getMinValue = (array: FormatData[]) =>
  array.reduce(
    (minValue: number, currentItem: FormatData) =>
      Math.min(minValue, currentItem.value),
    Infinity
  );
