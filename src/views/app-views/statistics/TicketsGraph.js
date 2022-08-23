import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

export default function TicketsGraph({ domData, horizontalAxis, verticalAxis }) {

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point:{
        radius: 0
      }
    },
    scales: {
      xAxis: {
        min: horizontalAxis.min,
        max: horizontalAxis.max,
        grid: {
          lineWidth: 2,
          borderDash: [8],
          color: '#DFE5EE'
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 11,
          font: {
            size: 16,
            family: 'Poppins'
          },
          color: '#718EBF',
        }
      },
      yAxis: {
        display: false,
      },
      myScale: {
        min: verticalAxis.min,
        max: verticalAxis.max,
        grid: {
          lineWidth: 2,
          borderDash: [8],
          color: '#DFE5EE'
        },
        ticks: {
          font: {
            size: 16,
            family: 'Poppins'
          },
          color: '#718EBF',
          stepSize: 50,
          padding: 20
        }
      }
    }
  }

  const labels = horizontalAxis.data;

  let width, height, gradient;
  function getGradient(ctx, chartArea) {
    const chartWidth = 852.6000671386719;
    const chartHeight = 226;
    if (!gradient || width !== chartWidth || height !== chartHeight) {
      width = chartWidth;
      height = chartHeight;
      gradient = ctx.createLinearGradient(0, 258, 0, 32);
      gradient.addColorStop(0, 'rgba(40, 165, 221, 0)');
      gradient.addColorStop(1, 'rgba(40, 165, 221, 0.25)');
    }

    return gradient;
  }

  const data = {
    labels: labels,
    datasets: [{
      data: verticalAxis.data,
      fill: true,
      backgroundColor: function(context) {
        const chart = context.chart;
        const {ctx, chartArea} = chart;
        return getGradient(ctx, chartArea);
      },
      borderColor: '#28A5DD',
      tension: 0.7
    }]
  }

  return (
    <div style={{ height: '360px' }}>
      <Line options={options} data={data} />
    </div>
  )
}
