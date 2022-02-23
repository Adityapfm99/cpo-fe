import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Export CPO',
        },
    },
};

const labels = ['Jan-21', 'Feb-21', 'Mar-21', 'Apr-21', 'May-21', 'Jun-21', 'Jul-21', 'Aug-21', 'Sep-21', 'Okt-21', 'Nov-21', 'Dec-21'];

const labelsFrecat = ['Jan-21', 'Feb-21'];
const datapointsForecast = [null, 480, 420, 440, 860, 310, 190, 700, 320, 1000, 405, 430];
const datapoints = [290, 400, null, null, null, null, null, null, null, null, null, null, null];


export const data = {
    labels,
    datasets: [
        {
            label: 'Export CPO',
            data: datapoints,
            borderColor: 'rgb(150, 50, 8)',
            backgroundColor: 'rgba(9, 55, 8, 0.5)',
        },
        {
            label: 'Forecast',
            data: datapointsForecast,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 152, 235, 0.5)',
        },
       
    ],
};

const ChartExportCPO = () => {
    return <Line options={options} data={data} />;
}

export default ChartExportCPO
