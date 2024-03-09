import React, { useState } from 'react';
import { Button, TextField, Typography, Container, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For navigation on successful signup
function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate(); // For navigation after signup

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    if (!agreeTerms) {
      alert('Please agree to the terms and conditions.');
      return;
    }
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
  


    alert('Signup successful!'); // Placeholder for successful signup notification
    window.location.href = '/login';
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
           <Typography variant="body2" color="textSecondary">
            Password must contain at least one uppercase letter, one number, one special symbol, and be at least 8 characters long.
          </Typography>
          <FormControlLabel
            control={<Checkbox checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} value="agree" color="primary" />}
            label="I agree to the terms and conditions"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Signup;
