import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chartInstance.destroy();
    }

    const chartOptions = {
      responsive: true,
    };

    chartRef.current = new Line(chartRef.current, {
      data: chartData,
      options: chartOptions,
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, [data]);

  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: 'Exchange Rate',
        data: data.map((item) => item.rate),
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 1,
      },
    ],
  };

  return <canvas ref={chartRef} />;
};

export default Chart;