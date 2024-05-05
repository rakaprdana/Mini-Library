import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChartComponent = ({ data }) => {
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

      // Array berisi kumpulan warna yang diinginkan
      const colors = [
        'rgba(235, 195, 52, 0.6)',
        'rgba(235, 102, 52, 0.6)',
        'rgba(52, 235, 195, 0.6)',
        'rgba(52, 102, 235, 0.6)',
        // Tambahkan warna tambahan jika diperlukan
      ];

      // Memilih warna dari array colors untuk setiap potongan
      const backgroundColors = colors.slice(0, labels.length);
      const borderColors = colors.map(color => color.replace('0.6', '1')); // Mengubah opacity untuk border

      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Jumlah Judul',
            data: counts,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right' // Ubah 'right' menjadi 'left' jika ingin label berada di sebelah kiri
            }
          },
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

export default PieChartComponent;
