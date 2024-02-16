import React from 'react';
import { ReactECharts } from './components/Echarts/ReactECharts.tsx';
import { mockData } from './data/data.ts';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { ChoiceTab } from './components/ChoiceTab/ChoiceTab.tsx';
import './App.css';

function App() {
  const dollarData = mockData.filter(
    (item) => item.indicator === 'Курс доллара'
  );
  const euroData = mockData.filter((item) => item.indicator === 'Курс евро');
  const yuanData = mockData.filter((item) => item.indicator === 'Курс юаня');

  // Форматирование данных для ECharts
  const formatData = (data: any) => {
    return data.map((item: any) => ({
      name: item.month,
      value: item.value,
    }));
  };

  // Конфигурация графика
  const chartOption = {
    grid: {
      left: '30',
      right: '10',
      bottom: '30',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: dollarData.map((item) => item.month),
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
      min: 60,
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params: any) {
        // Форматирование текста тултипа
        return `<strong>${params[0].name}</strong>: <strong>${params[0].value}</strong>`;
      },
    },

    series: [
      {
        name: 'Доллар',
        type: 'line',
        smooth: true,
        data: formatData(dollarData),
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
      <Card verticalSpace="m" horizontalSpace="m" className="card">
        <div className="first-section">
          <div>Курс доллора</div>
          <div className="tab">
            <ChoiceTab />
          </div>
        </div>

        <div className="second-section">
          <ReactECharts option={chartOption} style={{ height: '400px' }} />
          <div className="statistic">66</div>
        </div>
      </Card>
    </Theme>
  );
}

export default App;
