export enum Currency {
  usd = 'usd',
  eur = 'eur',
  cny = 'cny',
}

export enum CurrencyTag {
  usd = '$',
  eur = '€',
  cny = '¥',
}

export type DataItem = {
  date: string;
  month: string;
  indicator: string;
  value: number;
};

export type ChartDataItem = {
  name: string;
  value: number;
};

export type ResponseGetCurrencyDataType = DataItem[];

export type CurrencyData = Record<Currency, DataItem[]>;
