import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'


const appointmentBanner = {
    background: `url(${bg})`,
    marginTop: 100,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity'

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1,}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'

                }}>
                    <Box >
                        <Typography variant='h6' sx={{ mb: 4 }} style={{ color: '#5CE7ED' }}>
                            APPOINTMENT
                        </Typography>
                        <Typography variant='h4' sx={{ my: 4 }} style={{ color: 'white' }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{ mb: 4 }} style={{ color: 'white', fontSize: 14 }}>
                            Make An Appointment Today
                        </Typography>
                        <Button style={{ backgroundColor: '#5CE7ED' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;