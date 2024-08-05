import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import userIcon from './img/pic3.png';
import OrderTable from './img/pic4.jpeg';



import styled from "@emotion/styled";

function createData(name, order, amount, status,) {
    return { name, order, amount, status, };
}

const rows = [
    createData('Wade Warren', 15478256, '$124.00', 'Deliverd',),
    createData('Jana Coopar', 4895788, '$365.02', 'Completed',),
    createData('Guy Hawkins', 78958215, '$45.88', 'Pending',),
    createData('Kristin Watson', 20965732, '$05.00', 'Pending',),
    createData('Cody Fisher', 95715620, '$545.00', 'Completed',),
    createData('Savannath Nguyen', 78514568, '$128.20', 'Completed',),
];

const SuccessChips = styled(Chip)(({ theme, variant }) => {
    return {
        backgroundColor: '#0D5446',
        color: '#219F7E',
        fontWeight: 700,
        padding: '3px',
        height:'auto',
        borderRadius: '20px',
        borderColor: 'transparent',
    }
});
const ErrorChips = styled(Chip)(({ theme, variant }) => {
    return {
        backgroundColor: '#63343E',
        color: '#A0565E',
        fontWeight: 700,
        padding: '3px',
        height:'auto',
        borderRadius: '20px',
        borderColor: 'transparent',
    }
});

export default function BasicTable() {
    return (
        <Card className='styledCard'>
            <Typography variant="h5" fontWeight={600}>Recent Orders</Typography>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customers</TableCell>
                            <TableCell>Order No.</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                                        <Avatar alt={row.name} src={row.imageUrl} />
                                        <Typography>{row.name}</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>{row.order}</TableCell>
                                <TableCell>{row.amount}</TableCell>
                                <TableCell>{row.status === 'Completed' ? <SuccessChips label='Delivered' variant='outlined' /> : <ErrorChips label='Cancelled' variant='outlined' />}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}