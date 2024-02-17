import { Currency, ResponseGetCurrencyDataType } from '../types';

export const getCurrencyData = async (currency: Currency) => {
  try {
    const response = await fetch(
      'https://65cfdcf8bdb50d5e5f5be89d.mockapi.io/currency_data',
      {
        cache: 'force-cache',
      }
    );
    const parseResponse: ResponseGetCurrencyDataType = await response.json();
    const data = parseResponse.at(0);

    return data && data[currency];
  } catch (error) {
    console.error(error);
  }
};
