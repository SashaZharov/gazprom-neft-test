import { useState, useEffect, FC } from 'react';
import { Loader } from '@consta/uikit/Loader';
import { Card } from '@consta/uikit/Card';
import { CURRENCY_TO_CURRENCY_TITLE } from './constants';
import { getAverageValue, parseData } from './utils';
import { ChoiceTab, Chart } from './components';
import { getCurrencyData } from './api';
import { Currency, CurrencyData, CurrencyTag } from './types';

import './App.css';

const App: FC = () => {
  const [currency, setCurrency] = useState(Currency.usd);
  const [data, setData] = useState<Partial<CurrencyData>>({});
  const currentData = data[currency];
  const averageValue = currentData && getAverageValue(currentData);
  const formatedAvrgValue = averageValue?.toFixed(1).replace('.', ',');
  const title = CURRENCY_TO_CURRENCY_TITLE[currency].toUpperCase();
  const currencySymbol = CurrencyTag[currency];

  useEffect(() => {
    getCurrencyData().then((res) => {
      res && setData(parseData(res));
    });
  }, []);

  return (
    <div className="App">
      <Card verticalSpace="xs" horizontalSpace="xs" className="App__card">
        <div className="App__cardHeader">
          <h1 className="App__cardHeaderTitle">
            {title}, {currencySymbol}/₽
          </h1>
          <ChoiceTab value={currency} setValue={setCurrency} />
        </div>

        <div className="App__chartContainer">
          {currentData ? (
            <Chart currency={currency} data={currentData} />
          ) : (
            <div className="App__chartLoader">
              <Loader size="m" />
            </div>
          )}
          <div className="App__chartStatistics">
            <div className="App__chartStatisticsSubtitle">
              Среднее за период
            </div>
            <div className="App__chartStatisticsCell">
              <h3 className="App__chartStatisticsCellValue">
                {formatedAvrgValue || '--,-'}
              </h3>
              <p className="App__chartStatisticsCellSymbol">₽</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default App;
