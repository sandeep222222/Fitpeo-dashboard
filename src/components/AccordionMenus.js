import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import Link from '@mui/material/Link';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';


export default function AccordionMenus() {
    return (
        <>
            <Card className='styledCard'>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
                        <Avatar sx={{ backgroundColor: '#5E323E', p: 4, color: '#DB6F3C' }}>
                            <TokenOutlinedIcon fontSize='large' />
                        </Avatar>
                        <Typography variant="h6" mt={1} fontWeight={400}>Goals</Typography>
                    </Stack>
                    <Link href="#" underline="none">
                        <Avatar sx={{ backgroundColor: '#454749', p: 2, color: '#fff', width: 24, height: 24 }}>
                            <ChevronRightIcon fontSize='medium' />
                        </Avatar>
                    </Link>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={2}>
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
                        <Avatar sx={{ backgroundColor: '#293268', p: 4, color: '#7088E4' }}>
                            <LunchDiningOutlinedIcon fontSize='large' />
                        </Avatar>
                        <Typography variant="h6" mt={1} fontWeight={400}>Popular Dishes</Typography>
                    </Stack>
                    <Link href="#" underline="none">
                        <Avatar sx={{ backgroundColor: '#454749', p: 2,color: '#fff', width: 24, height: 24 }}>
                            <ChevronRightIcon fontSize='medium' />
                        </Avatar>
                    </Link>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={2}>
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
                        <Avatar sx={{ backgroundColor: '#204A60', p: 4, color: '#32A1CA' }}>
                            <RestaurantOutlinedIcon fontSize='large' />
                        </Avatar>
                        <Typography variant="h6" mt={1} fontWeight={400}>Menus</Typography>
                    </Stack>
                    <Link href="#" underline="none">
                        <Avatar sx={{ backgroundColor: '#454749', p: 2,color: '#fff', width: 24, height: 24 }}>
                            <ChevronRightIcon fontSize='medium' />
                        </Avatar>
                    </Link>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={2}>
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2}>
                        <Avatar sx={{ backgroundColor: '#293268', p: 4, color: '#7088E4' }}>
                            <LunchDiningOutlinedIcon fontSize='large' />
                        </Avatar>
                        <Typography variant="h6" mt={1} fontWeight={400}>Popular Dishes</Typography>
                    </Stack>
                    <Link href="#" underline="none">
                        <Avatar sx={{ backgroundColor: '#454749', p: 2,color: '#fff', width: 24, height: 24 }}>
                            <ChevronRightIcon fontSize='medium' />
                        </Avatar>
                    </Link>
                </Stack>
            </Card>
        </>
    );
}