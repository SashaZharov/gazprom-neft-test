import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { useState } from 'react';
import { CurrencyTag, Currency } from '../../types';

const items: Currency[] = [Currency.usd, Currency.eur, Currency.cny];

interface IChoiceTab {
  value: any;
  setValue: any;
}

export const ChoiceTab: React.FC<IChoiceTab> = ({ value, setValue }) => {
  return (
    <ChoiceGroup
      size="xs"
      value={value}
      onChange={({ value }) => setValue(value)}
      items={items}
      getItemLabel={(item: Currency) => CurrencyTag[item]}
      multiple={false}
      name="ChoiceGroup"
    />
  );
};
