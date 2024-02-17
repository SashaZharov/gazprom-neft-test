import { DataItem } from '../../types';
import { formatterTooltip } from '../../utils/formatterToltip';
import { getFormatData } from '../../utils/getFormatData';
import { getMinValue } from '../../utils/getMinValue';
import { ReactECharts } from '../Echarts/ReactECharts';

interface IChart {
  data: DataItem[];
}

export const Chart: React.FC<IChart> = ({ data }) => {
  const minValue = getMinValue(getFormatData(data)) - 5;
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
      splitLine: {
        lineStyle: {
          type: 'dashed',
        },
      },
    },
    tooltip: {
      trigger: 'axis',
      formatter: formatterTooltip(data),
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
  return (
    <>
      <ReactECharts option={chartOption} style={{ height: '400px' }} />
    </>
  );
};
