import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <form noValidate>
          <TextField
            id="standard-Email-input"
            label="Email"
            type="email"
            autoComplete="email"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="password"
          />
          <Button
            component={Link} to={`${process.env.PUBLIC_URL}/`}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;