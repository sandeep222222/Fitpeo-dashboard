import React from 'react';
import ApexCharts from 'react-apexcharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MyBarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [5, 6, 7, 8, 9, 10, 11, 13, 14, 17, 19, 21, 23, 25, 27],
      labels: {
        style: {
          colors: '#6E6F75',                     // [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,],   
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#6E6F75',
          fontSize: '12px',
        },
      },
    },
    plotOptions: {
      bar: {
        // borderRadius: 50,
        horizontal: false,
        columnWidth: '30%',
      },
    },
    dataLabels: {
      enabled: false,
    },

    colors: ['#7494FF'],
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [2000, 3500, 4500, 5500, 5000, 4500, 3600, 2900, 2000, 2600, 3100, 3700, 4800, 5300, 5500],
    },
  ];

  const [age, setAge] = React.useState('10');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className='styledCard'>
      <CardContent>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={2}>
          <Typography variant="h5" fontWeight={600}>Activity</Typography>
          <FormControl sx={{minWidth: 120 }} className='styledDropdown'>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={10}>Weekly</MenuItem>
              <MenuItem value={20}>Monthly</MenuItem>
              <MenuItem value={30}>Year</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <ApexCharts
          options={options}
          series={series}
          type="bar"
          height={260}
        />
      </CardContent>
    </Card>
  );
};

export default MyBarChart;