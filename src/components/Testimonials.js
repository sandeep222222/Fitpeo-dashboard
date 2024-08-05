import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import TestimonialsIcon1 from './img/pic4.jpeg';
import TestimonialsIcon2 from './img/pic1.jpeg';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';

export default function Testimonials() {
    const TestimonialCard = styled(Card)(({ theme }) => ({
        maxHeight: '450px',
        overflowY: 'scroll',
        boxShadow: 'none',
    }));
    return (
        <Card className='styledCard'>
            <Typography variant="h5" fontWeight={600}>Customer's Feedback</Typography>
            <TestimonialCard className="testimonialCard">
                <CardContent>
                    <Box my={2}>
                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Avatar
                                alt="Remy Sharp"
                                src={TestimonialsIcon1}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Typography variant="h6" fontWeight={400}>Jenny</Typography>
                        </Stack>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{ my: 1 }} />
                        <Typography variant="body1" fontWeight={300}>We loved this place because it wasn’t just the typical dishes you usually find. We ended up ordering Burger. Some of the dishes did feel a bit pricey for the size, but we enjoyed them so much, we felt they were worth it.</Typography>
                    </Box>
                    <Divider sx={{ borderColor: '#3b3b3b' }} />
                    <Box my={2}>
                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Avatar
                                alt="Remy Sharp"
                                src={TestimonialsIcon1}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Typography variant="h6" fontWeight={400}>Dianny</Typography>
                        </Stack>
                        <Rating name="half-rating" defaultValue={4} precision={0.5} sx={{ my: 1 }} />
                        <Typography variant="body1" fontWeight={300}>We loved this place because it wasn’t just the typical dishes you usually find. We ended up ordering Burger. Some of the dishes did feel a bit pricey for the size.</Typography>
                    </Box>
                    <Divider sx={{ borderColor: '#3b3b3b' }} />
                    <Box my={2}>
                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Avatar
                                alt="Remy Sharp"
                                src={TestimonialsIcon1}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Typography variant="h6" fontWeight={400}>Devon</Typography>
                        </Stack>
                        <Rating name="half-rating" defaultValue={4} precision={0.5} sx={{ my: 1 }} />
                        <Typography variant="body1" fontWeight={300}>We loved this place because it wasn’t just the typical dishes you usually find. We ended up ordering Burger. Some of the dishes did feel a bit pricey for the size.</Typography>
                    </Box>
                    <Divider sx={{ borderColor: '#3b3b3b' }} />
                    <Box my={2}>
                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Avatar
                                alt="Remy Sharp"
                                src={TestimonialsIcon1}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Typography variant="h6" fontWeight={400}>Jenny</Typography>
                        </Stack>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{ my: 1 }} />
                        <Typography variant="body1" fontWeight={300}>We loved this place because it wasn’t just the typical dishes you usually find. We ended up ordering Burger. Some of the dishes did feel a bit pricey for the size, but we enjoyed them so much, we felt they were worth it.</Typography>
                    </Box>
                    <Divider sx={{ borderColor: '#3b3b3b' }} />
                    <Box my={2}>
                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Avatar
                                alt="Remy Sharp"
                                src={TestimonialsIcon1}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Typography variant="h6" fontWeight={400}>Jenny</Typography>
                        </Stack>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} sx={{ my: 1 }} />
                        <Typography variant="body1" fontWeight={300}>We loved this place because it wasn’t just the typical dishes you usually find. We ended up ordering Burger. Some of the dishes did feel a bit pricey for the size, but we enjoyed them so much, we felt they were worth it.</Typography>
                    </Box>
                </CardContent>
            </TestimonialCard>
        </Card>
    );
}