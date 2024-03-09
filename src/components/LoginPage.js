import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  

  const handleLogin = () => {
    // Basic validation: Check if email and password fields are not empty
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email.trim() === '') {
      // If email or password is empty, do not proceed with login
      alert('Please enter valid email ');
      return;
    }
    if ( password.trim() === '') {
      // If email or password is empty, do not proceed with login
      alert('Please enter password');
      return;
    }
  
    // Check if the email contains the "@" symbol
    if (!email.includes('@gmail.com')) {
      alert('Please enter a valid email address');
      return;
    }
  
    // Check if the password meets the complexity requirements
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must contain at least one uppercase letter, one number, one special symbol, and be at least 8 characters long');
      return;
    }
  
    // Perform login actions here (e.g., validate credentials, authenticate user)
    // For demo purposes, I'm setting loggedIn to true immediately
    setLoggedIn(true);
    window.location.href = '/';
  };
  
  
  return (
    <Container component="main" maxWidth="xs" className="login-container">
      <div className="login-form">
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Typography variant="body2" color="textSecondary">
            Password must contain at least one uppercase letter, one number, one special symbol, and be at least 8 characters long.
          </Typography>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="submit-button"
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
        {loggedIn && (
          <Typography variant="body1" color="primary">
            Successfully logged in!
          </Typography>
        )}
      </div>
    </Container>
  );
}

export default Login;
