import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import faker from 'faker'

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const labels = ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21', 'Okt-21', 'Nov-21', 'Dec-21'];

export const data = {
    labels,
    datasets: [
        {
            type: 'line',
            label: 'Produksi CPO',
            borderColor: '#C55A11',
            borderWidth: 2,
            fill: false,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        },
        {
            type: 'bar',
            label: 'Produksi TBS',
            backgroundColor: '#A9D18E',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        },
    ],
};

const ChartProductTbs = () => {
    return <Chart type='bar' data={data} />;
}

export default ChartProductTbs