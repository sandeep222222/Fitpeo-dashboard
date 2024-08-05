import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import TestimonialsIcon1 from './img/pic4.jpeg';

export default function SideMenu() {
    return (
        <>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    px: {xs:2,sm:2.5},
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr:3,
                        justifyContent: 'center',
                    }}
                >
                    <HomeIcon sx={{color:'#999B9F'}}/>
                </ListItemIcon>
                <ListItemText primary={'Home'} />
            </ListItemButton>
            <ListItemButton
                sx={{
                    minHeight: 48,
                    px: {xs:2,sm:2.5},
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr:3,
                        justifyContent: 'center',
                    }}
                >
                    <BarChartOutlinedIcon sx={{color:'#999B9F'}}/>
                </ListItemIcon>
                <ListItemText primary={'Activity'} />
            </ListItemButton>

            <ListItemButton
                sx={{
                    minHeight: 48,
                    px: {xs:2,sm:2.5},
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr:3,
                        justifyContent: 'center',
                    }}
                >
                    <AssignmentTurnedInOutlinedIcon sx={{color:'#999B9F'}}/>
                </ListItemIcon >
                <ListItemText primary={'Report'} />
            </ListItemButton>

            <ListItemButton
                sx={{
                    minHeight: 48,
                    px: {xs:2,sm:2.5},
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr:3,
                        justifyContent: 'center',
                    }}
                >
                    <AccountBalanceWalletOutlinedIcon sx={{color:'#999B9F'}}/>
                </ListItemIcon>
                <ListItemText primary={'Wallet'} />
            </ListItemButton>

            <ListItemButton
                sx={{
                    minHeight: 48,
                    px: {xs:2,sm:2.5},
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr:3,
                        justifyContent: 'center',
                    }}
                >
                    <LocalMallOutlinedIcon sx={{color:'#999B9F'}}/>
                </ListItemIcon>
                <ListItemText primary={'Delivered'} />
            </ListItemButton>

            <ListItemButton
                sx={{
                    minHeight: 48,
                    px: {xs:2,sm:2.5},
                    position:'absolute',
                    bottom:0,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr:3,
                        justifyContent: 'center',
                    }}
                >
                    <LogoutIcon sx={{color:'#999B9F'}}/>
                </ListItemIcon>
                <ListItemText primary={'Logout'} />
            </ListItemButton>
    </>
  )
}