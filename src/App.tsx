import React, { useState, useEffect } from 'react';
import { ReactECharts } from './components/Echarts/ReactECharts.tsx';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Card } from '@consta/uikit/Card';
import { ChoiceTab } from './components/ChoiceTab/ChoiceTab.tsx';
import './App.css';
import { getCurrencyData } from './api/getCurrencyData.ts';
import { Currency, CurrencyTag, DataItem, FormatData } from './types.ts';
import { getMinValue } from './utils/getMinValue.ts';

function App() {
  const [currency, setCurrency] = useState(Currency.usd);
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    console.log(currency);
    getCurrencyData(currency).then((answer) => answer && setData(answer));
    // console.log(getMinValue(formatData(data)));
  }, [currency]);

  // Форматирование данных для ECharts
  const formatData = (data: DataItem[]) => {
    return data.map((item: DataItem) => ({
      name: item.month,
      value: item.value,
    }));
  };

  // Конфигурация графика
  const chartOption = {
    grid: {
      left: '20',
      right: '10',
      top: '40',
      bottom: '20',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: data.map((item) => item.month),
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        margin: 30,
      },
    },
    yAxis: {
      type: 'value',
      min: getMinValue(formatData(data)) - 5,
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    series: [
      {
        name: `${data[0]?.indicator}`,
        type: 'line',
        smooth: true,
        data: formatData(data),
        showSymbol: false,
        lineStyle: {
          normal: {
            color: 'orange',
          },
        },
        itemStyle: {
          normal: {
            color: 'orange',
          },
        },
      },
    ],
  };

  return (
    <Theme preset={presetGpnDefault}>
      <div className="root-container">
        <Card verticalSpace="xs" horizontalSpace="xs" className="card">
          <div className="header">
            <div className="title">
              {data[0]?.indicator.toUpperCase()}, {CurrencyTag[currency]}/₽
            </div>
            <div className="tab">
              <ChoiceTab value={currency} setValue={setCurrency} />
            </div>
          </div>

          <div className="chart-section">
            <ReactECharts option={chartOption} style={{ height: '400px' }} />
            <div className="statistics">
              <div className="subtitle">Среднее за период</div>
              <div className="statistic-cell">
                <div className="value">66,7</div>{' '}
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
