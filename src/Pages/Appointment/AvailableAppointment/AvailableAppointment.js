import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: 9
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 am – 11:30 am',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '  5:00 pm – 6:30 pm',
        space: 6
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '   7:00 am – 8:30 am',
        space: 5
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '6:00 PM - 9:00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '7:00 PM - 10:00 PM',
        space: 10
    },


]

const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant='h4' sx={{ color: '#1CC7C1', mb: 3 }} >Available Appointments On {date.toDateString()}</Typography>

            {bookingSuccess && < Alert sx={{ m: 3 }} severity="success">Appointment Booked Successfully </Alert>}

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container >
    );
};

export default AvailableAppointment;