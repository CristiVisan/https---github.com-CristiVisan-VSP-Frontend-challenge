import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
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

  const chartOptions = {
    scales: {
      x: {
        type: 'category', // Register "category" scale for the x-axis
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default Chart;