import React from 'react';
import Grid from '@mui/material/Grid';
import Chair from '../../../images/chair.png';
import bg from '../../../images/bg.png'
import { Button, Typography, Container, Box } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}



const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box>
                        <Typography variant='h3'>
                            Your New Smile <br />
                            Starts Here.
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, fontSize: 14, color: '#8B8888' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }} variant="contained">GET APPOINTMENT</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img src={Chair} style={{ width: '400px' }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;