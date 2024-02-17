import { useMemo, FC } from 'react';
import { parseDataForChart, getMaxValue, getMinValue } from '../../utils';
import { CURRENCY_TO_CURRENCY_TITLE } from '../../constants';
import { ReactECharts } from '../Echarts/ReactECharts';
import { ChartDataItem, Currency, DataItem } from '../../types';

interface ITooltipData {
  data: ChartDataItem;
}

const getTooltip = (tooltipItems: ITooltipData[], currency: Currency) => {
  const data = tooltipItems[0];
  if (!data) return '';

  const title = CURRENCY_TO_CURRENCY_TITLE[currency];

  const tooltipHTML = `
    <div><strong>${data.data.name}</strong></div>
    <div style="display: flex; align-items: center; margin-top: 8px; font-family: 'Inter', sans-serif;">
      <div style="width: 10px; height: 10px; background-color: orange; margin-right: 5px;  border-radius: 50%;"></div>
      <div>${title}</div>
      <strong style="margin-left: 10px; ">${data.data.value} ₽</strong>
    </div>
  `;

  return tooltipHTML;
};

interface IChart {
  data: DataItem[];
  currency: Currency;
}

export const Chart: FC<IChart> = ({ data, currency }) => {
  const parsedData = parseDataForChart(data);
  const minValue = getMinValue(parsedData);
  const maxValue = getMaxValue(parsedData);
  const chartOptions = useMemo(
    () => ({
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
        min: minValue,
        max: maxValue,
        splitLine: {
          lineStyle: {
            type: 'dashed',
          },
        },
      },
      tooltip: {
        trigger: 'axis',
        formatter: (props: ITooltipData[]) => getTooltip(props, currency),
      },
      series: [
        {
          name: currency,
          type: 'line',
          smooth: true,
          data: parsedData,
          showSymbol: false,
          lineStyle: {
            color: 'orange',
          },
          itemStyle: {
            color: 'orange',
          },
        },
      ],
    }),
    [currency, data, maxValue, minValue, parsedData]
  );

  return <ReactECharts option={chartOptions} style={{ height: '350px' }} />;
};
