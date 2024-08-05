import React from 'react';
import { Grid, Paper } from '@mui/material';
import Card from './Card';
import ProfitCard from './ProfitCard';
import AccordionMenus from './AccordionMenus';
import OrderTable from './OrderTable';
import Testimonials from './Testimonials';
import Chart from './Chart';
import Typography from '@mui/material/Typography';

export default function Dashboard() {
    return (<>
        <Typography variant="h5" mb={3} fontWeight={600}>Dashboard</Typography>

        <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
                <Card />
            </Grid>
            <Grid item xs={12} md={4}>
                <ProfitCard />
            </Grid>
            <Grid item xs={12} md={8}>
                <Chart />
            </Grid>
            <Grid item xs={12} md={4}>
                <AccordionMenus />
            </Grid>
            <Grid item xs={12} md={8}>
                <OrderTable />
            </Grid>
            <Grid item xs={12} md={4}>
                <Testimonials />
            </Grid>
        </Grid>
    </>
    )
}