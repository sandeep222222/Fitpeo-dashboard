import * as React from 'react';
import { Grid, Card, CardContent, Avatar, Typography, Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const stats = [
  {
    title: 'Total Orders',
    value: 75,
    icon: <ShoppingCartIcon fontSize='large' />,
    color: '#29326A',
    iconColor: '#4264FC',
    trend: { direction: 'up', percentage: '3%', color: 'success.main' },
  },

  
  {
    title: 'Total Delivered',
    value: 70,
    icon: <LocalMallIcon fontSize='large' />,
    color: '#125347',
    iconColor: '#03C78C',
    trend: { direction: 'down', percentage: '3%', color: 'error' },
  },
  {
    title: 'Total Cancelled',
    value: 5,
    icon: <LocalMallIcon fontSize='large' />,
    color: '#5E3336',
    iconColor: '#F65D5C',
    trend: { direction: 'down', percentage: '3%', color: 'success.main' },
  },
  {
    title: 'Total Revenue',
    value: '$12k',
    icon: <RequestQuoteIcon fontSize='large' />,
    color: '#5F2C4B',
    iconColor: '#E0429D',
    trend: { direction: 'down', percentage: '3%', color: 'error' },
  },
];



export default function StatsGrid() {
  return (
    <Grid container spacing={2}>
      {stats.map(({ title, value, icon, color, iconColor, trend }, index) => (
        <Grid item xs={12} md={6} lg={3} key={index}>
          <Card className='styledCard'>
            <CardContent>
              <Avatar sx={{ backgroundColor: color, p: 4, borderRadius: '16px', color: iconColor }} variant="square">
                {icon}
              </Avatar>
              <Typography variant="body1" mt={1} fontWeight={400}>
                {title}
              </Typography>
              <Stack direction='row' mt={2} alignItems='center' justifyContent='space-between'>
                <Typography variant="h4" fontWeight={500} sx={{ mb: 0 }} gutterBottom>
                  {value}
                </Typography>
                <Typography variant="h6" color={trend.color}>
                  <Stack direction='row' alignItems='center'>
                    {trend.direction === 'up' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    <Typography variant='span'>{trend.percentage}</Typography>
                  </Stack>
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}