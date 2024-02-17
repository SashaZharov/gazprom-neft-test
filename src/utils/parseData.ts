import { CurrencyData, ResponseGetCurrencyDataType } from '../types';
import { CURRENCY_TITLE_TO_CURRENCY } from '../constants';

export const parseData = (
  data: ResponseGetCurrencyDataType
): Partial<CurrencyData> => {
  const res: Partial<CurrencyData> = {};

  data.forEach((item) => {
    const currency = CURRENCY_TITLE_TO_CURRENCY[item.indicator];
    if (!res[currency]) res[currency] = [];

    res[currency]!.push(item);
  });

  return res;
};
