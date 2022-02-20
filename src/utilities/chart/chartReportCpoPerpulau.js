import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Sumatera', 'Kalimantan', 'Papua', 'Jawa'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgb(247,200,168)',
                'rgb(121,121,121)',
                'rgb(0,176,80)',
                'rgb(255,76,76)',
            ],
            borderColor: [
                'rgb(247,200,168)',
                'rgb(121,121,121)',
                'rgb(0,176,80)',
                'rgb(255,76,76)',
            ],
            borderWidth: 1,
        },
    ],
};

const ChartReportCpoPerpulau = () => {
    return <Doughnut data={data} />;
}

export default ChartReportCpoPerpulau
