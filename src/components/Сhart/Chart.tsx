import { DataItem } from '../../types';
import { getFormatData } from '../../utils/getFormatData';
import { getMaxValue } from '../../utils/getMaxValue';
import { getMinValue } from '../../utils/getMinValue';
import { ReactECharts } from '../Echarts/ReactECharts';
import { Tooltip } from '../Tooltip';

interface IChart {
  data: DataItem[];
}

export const Chart: React.FC<IChart> = ({ data }) => {
  const minValue = getMinValue(getFormatData(data));
  const maxValue = getMaxValue(getFormatData(data));
  const name = data[0]?.indicator;
  const formatData = getFormatData(data);

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
      formatter: Tooltip(data),
    },
    series: [
      {
        name: `${name}`,
        type: 'line',
        smooth: true,
        data: formatData,
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

  return <ReactECharts option={chartOption} style={{ height: '350px' }} />;
};
