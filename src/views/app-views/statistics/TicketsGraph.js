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
      min: 0,
      max: 30,
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
      min: 0,
      max: 300,
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

const labels = [
		'01', 
		'02', 
		'03', 
		'04', 
		'05',
		'06', 
		'07', 
		'08', 
		'09',
		'10', 
		'11', 
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'20',
		'21',
		'22',
		'23',
		'24',
		'25',
		'26',
		'27',
		'28',
		'29',
		'30',
	];

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
    data: [150, 135, 180, 250, 200, 160, 180, 190, 210, 230, 240, 220, 150, 135, 180, 250, 200, 160, 180, 190, 210, 230, 240, 220, 150, 135, 180, 250, 200, 160, 180, 190, 210, 230, 240, 220],
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

export default function TicketsGraph() {
  return (
    <div style={{ height: '360px' }}>
      <Line options={options} data={data} />
    </div>
  )
}
