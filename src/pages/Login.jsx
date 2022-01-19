import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <div>
      <header>
        <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/54/000000/external-fruit-store-itim2101-lineal-color-itim2101.png" />
        <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/54/000000/external-shopping-cart-shopping-and-store-wanicon-lineal-color-wanicon.png" />
        <h1>HORTFRUTI</h1>
      </header>
      <form>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField id="input-with-sx" label="User" variant="standard" required />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField id="input-with-sx" label="Password" variant="standard" required />
        </Box>
        <br />
        <img src="https://img.icons8.com/color/38/000000/google-logo.png" />
        <img src="https://img.icons8.com/color/38/000000/linkedin.png" />
        <img src="https://img.icons8.com/ios-glyphs/38/000000/mac-client.png" />
        <br />
        <br />
        <Button type="submit" variant="contained" color="success">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
