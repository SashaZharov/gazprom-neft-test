import { useState, useEffect } from 'react';
import './App.css';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Card } from '@consta/uikit/Card';
import { ChoiceTab } from './components/ChoiceTab/ChoiceTab.tsx';
import { getCurrencyData } from './api/getCurrencyData.ts';
import { Currency, CurrencyTag, DataItem } from './types.ts';
import { Chart } from './components/Сhart/Chart.tsx';
import { getAverageValue } from './utils/getAverageValue.ts';

function App() {
  const [currency, setCurrency] = useState(Currency.usd);
  const [data, setData] = useState<DataItem[]>([]);

  const averageValue = getAverageValue(data).toFixed(1).replace('.', ',');
  const title = data[0]?.indicator.toUpperCase();
  const currencySymbol = CurrencyTag[currency];

  useEffect(() => {
    // Get data from api
    getCurrencyData(currency).then((answer) => answer && setData(answer));
  }, [currency]);

  return (
    <Theme preset={presetGpnDefault}>
      <div className="root-container">
        <Card verticalSpace="xs" horizontalSpace="xs" className="card">
          <div className="header">
            <div className="title">
              {title}, {currencySymbol}/₽
            </div>
            <div className="tab">
              <ChoiceTab value={currency} setValue={setCurrency} />
            </div>
          </div>

          <div className="chart-section">
            <Chart data={data} />
            <div className="statistics">
              <div className="subtitle">Среднее за период</div>
              <div className="statistic-cell">
                <div className="value">{averageValue}</div>
                <div className="symbol">₽</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Theme>
  );
}

export default App;
