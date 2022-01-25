import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import login from '../../../images/login.png'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, isLoading, loginUser, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = (location, history) => {
        signInWithGoogle()
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard"
                            sx={{ width: '80%', m: 1 }} /> <br />
                        <TextField
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard"
                            type="password"
                            sx={{ width: '80%', m: 1 }} /> <br />
                        <Button type='submit' sx={{ width: '80%', m: 3 }} style={{ backgroundColor: '#5CE7ED' }} variant="contained">Login</Button>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">LoggedIn Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}

                        <NavLink
                            to='/register'
                            style={{ textDecoration: 'none' }}>

                            <Button sx={{ color: 'black', m: 2 }}>NEW USER ? PLEASE REGISTER</Button>
                            <br />
                        </NavLink>
                    </form>

                    <Button onClick={handleGoogleSignIn} style={{ backgroundColor: '#5CE7ED' }} variant="contained">Google SignIn</Button>



                </Grid>
                <Grid item xs={12} md={6} >
                    <img src={login} style={{ width: '90%' }} alt="" srcset="" />
                </Grid>
            </Grid>
        </Container>

    )
};

export default Login;