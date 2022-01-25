import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()

    const { user, registerUser, isLoading, authError } = useAuth()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard"
                            sx={{ width: '80%', m: 1 }} />
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard"
                            sx={{ width: '80%', m: 1 }} />
                        <TextField
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard"
                            type="password"
                            sx={{ width: '80%', m: 1 }} />
                        <TextField
                            id="standard-basic"
                            label="Retype Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard"
                            type="password"
                            sx={{ width: '80%', m: 1 }} />
                        <Button type='submit' sx={{ width: '80%', m: 3 }} style={{ backgroundColor: '#5CE7ED' }} variant="contained">Register</Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                    <NavLink
                        to='/login'
                        style={{ textDecoration: 'none' }}>
                        <Button sx={{ color: 'black', m: 2 }}>Already Registered ? Please Login</Button>
                    </NavLink>

                </Grid>
                <Grid item xs={12} md={6} >
                    <img src={login} style={{ width: '90%' }} alt="" srcset="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;