import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      const labels = data.map(({ nama }) => nama);
      const counts = data.map(({ jumlah }) => jumlah);

      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Jumlah Judul',
            data: counts,
            backgroundColor: 'rgba(235, 195, 52, 0.6)',
            borderColor: 'rgba(235, 195, 52, 1)',
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
              },
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default BarChartComponent;