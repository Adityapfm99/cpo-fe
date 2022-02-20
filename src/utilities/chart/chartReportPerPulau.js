import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Report Produksi Per Pulau',
        },
    },
};

const labels = ['Sumatera', 'Kalimantan', 'Papua', 'Jawa'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Produksi TBS',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgba(255, 76, 76, 1)',
            backgroundColor: 'rgba(255, 76, 76, 1)',
        },
        {
            label: 'Produksi CPO',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgba(255, 192, 0, 1)',
            backgroundColor: 'rgba(255, 192, 0, 1)',
        },
        {
            label: 'Export CPO',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            borderColor: 'rgba(151, 151, 151, 1)',
            backgroundColor: 'rgba(151, 151, 151, 1)',
        },
    ],
};

const ChartReportPerPulau = () => {
    return <Bar options={options} data={data} />;
}

export default ChartReportPerPulau
