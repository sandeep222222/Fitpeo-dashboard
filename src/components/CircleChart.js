import { Typography } from '@mui/material';
import React from 'react';
import ApexCharts from 'react-apexcharts';

const CircularProgressBar = () => {
    const options = {
        series: [70],
        chart: {
            type: 'radialBar',
            height: 200,
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '50%',
                    background: 'transparent',
                },
                track: {
                    background: '#293364',
                    strokeWidth: '100%',
                },
                dataLabels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '12px',
                        offsetY: 14,
                        formatter: () => `Completed`,
                        color: '#999B9F',
                    },
                    value: {
                        show: true,
                        fontSize: '21px',
                        fontWeight: 900,
                        color: '#fff',
                        offsetY: -15,
                        formatter: (val) => `${val}%`
                    }
                }
            }
        },
        colors: ['#7494FF'],
        fill: {
            //   type: 'solid',
        },
        stroke: {
            lineCap: 'round',
            width: 5,
        },
    };

    return (
        <div id="chart">
            <ApexCharts options={options} series={options.series} type="radialBar" height={200} />
            <Typography variant="caption" display="block" color={'#999B9F'} textAlign={'center'}>*The values has been rounded off</Typography>
        </div>
    );
};

export default CircularProgressBar;