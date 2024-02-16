import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { useState } from 'react';

type Item = string;

const items: Item[] = ['$', '€', '¥'];

export const ChoiceTab = () => {
  const [value, setValue] = useState<string | null>(items[0]);
  return (
    <ChoiceGroup
      size="s"
      value={value}
      onChange={({ value }) => setValue(value)}
      items={items}
      getItemLabel={(item) => item}
      multiple={false}
      name="ChoiceGroup"
    />
  );
};
