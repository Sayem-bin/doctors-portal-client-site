import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';


const services = [
    {
        "id": "01",
        "img": "https://i.ibb.co/3cj3Ywb/fluoride.png",
        "name": "Fluoride Treatment",
        "description": "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth "
    },
    {
        "id": "02",
        "img": "https://i.ibb.co/LvqrxwG/cavity.png",
        "name": "Cavity Filling",
        "description": "Amalgam Fillings: Amalgam has been used by dental professionals for more than a century; it is the most researched material used for filling cavities."
    },
    {
        "id": "03",
        "img": "https://i.ibb.co/2FC9yZg/whitening.png",
        "name": "Teeth Whitening",
        "description": "Teeth whitening involves bleaching your teeth to make them lighter. It can not make your teeth brilliant white, but it can lighten the existing colour by several"
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'primary.main', m: 3 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 500, m: 4 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Services;