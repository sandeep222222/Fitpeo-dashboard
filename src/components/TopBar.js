import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment, Stack, Box } from '@mui/material';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Badge from '@mui/material/Badge';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ProfileImage from './img/pic3.png';

export default function TopBar() {
    const SearchBar = () => {
        return (
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
                <TextField
                    className='searchInput'
                    variant="outlined"
                    placeholder="Search..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Box sx={{ display: 'flex', gap: '15px' }}>
                    <Link href="#" underline="none">
                        <Avatar sx={{backgroundColor:'#292B2F',color:'#999B9F'}}>
                            <EmailOutlinedIcon />
                        </Avatar>
                    </Link>
                    <Link href="#" underline="none">
                        <Avatar sx={{backgroundColor:'#292B2F',color:'#999B9F'}}>
                            <SettingsOutlinedIcon />
                        </Avatar>
                    </Link>
                    <Link href="#" underline="none">
                        <Avatar sx={{backgroundColor:'#292B2F',color:'#999B9F'}}>
                            <Badge color="secondary" variant="dot">
                                <NotificationsNoneOutlinedIcon />
                            </Badge>
                        </Avatar>
                    </Link>
                    <Link href="#" underline="none">
                        <Avatar
                            alt="ProfileImage"
                            src={ProfileImage}
                        /></Link>
                </Box>
            </Stack >
        );
    };
    return (
        <>
            <SearchBar />
        </>
    )
}