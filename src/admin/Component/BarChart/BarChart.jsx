import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
    const chartData = {
        labels: ['Pemasukan', 'Pengeluaran'],
        datasets: [
            {
                label: 'Statistik Keuangan',
                data: [data.pemasukan, data.pengeluaran],
                backgroundColor: ['#36A2EB', '#FF6384'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Bar data={chartData} />
        </div>
    );
};

export default BarChart;
