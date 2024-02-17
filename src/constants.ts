import { Currency } from './types';

export const CURRENCY_TITLE_TO_CURRENCY: Record<string, Currency> = {
  'Курс юаня': Currency.cny,
  'Курс евро': Currency.eur,
  'Курс доллара': Currency.usd,
};

export const CURRENCY_TO_CURRENCY_TITLE: Record<Currency, string> = {
  [Currency.cny]: 'Курс юаня',
  [Currency.eur]: 'Курс евро',
  [Currency.usd]: 'Курс доллара',
};

export const API_URL = 'https://65cfdcf8bdb50d5e5f5be89d.mockapi.io';
