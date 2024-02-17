import { API_URL } from '../constants';
import { ResponseGetCurrencyDataType } from '../types';

export const getCurrencyData = async (): Promise<
  ResponseGetCurrencyDataType | undefined
> => {
  try {
    const response = await fetch(`${API_URL}/currency_data`);

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
