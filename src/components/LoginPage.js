import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  

  const handleLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email.trim() === '') {
      alert('Please enter valid email ');
      return;
    }
    if ( password.trim() === '') {
      alert('Please enter password');
      return;
    }
    if (!email.includes('@gmail.com')) {
      alert('Please enter a valid email address');
      return;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must contain at least one uppercase letter, one number, one special symbol, and be at least 8 characters long');
      return;
    }
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
