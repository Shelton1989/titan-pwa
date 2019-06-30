import React, {Component} from 'react';

import logo from '../assets/img/titan_logo_250.png';

import {
    TextField,
    Button,
    Typography,
    Paper
} from '@material-ui/core';

const LoginForm = (props) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }} className='login-form-wrapper'>

            <div className="logo mb2" style={{backgroundImage: `url(${logo})`}}>
            </div>

            <TextField 
                id="standard-dense"
                label="Username"
                className="login-form-item"
                margin="normal"
            />

            <TextField 
                id="standard-password-input"
                label="Password"
                className="login-form-item"
                type="password"
                autoComplete="current-password"
                margin="normal"
            />

            <Typography 
                variant="body1" gutterBottom className="login-form-item login-form-text mt2"
            >
                Forgot your password? <Typography variant="button" gutterBottom><a href='.'>Click here</a></Typography>.
            </Typography>

            <Button 
                variant="contained" 
                color="primary" 
                type="submit"
                className="mt3 login-form-item"
                block
            >
                LOGIN
            </Button>

            <Button 
                variant="outlined" 
                color="secondary" 
                onClick={(e)=>{
                    e.preventDefault();
                    console.log('to sign up')
                }}
                className="mt3 login-form-item"
                block
            >
                REGISTER
            </Button>
        </form>
    )
}

export default LoginForm;