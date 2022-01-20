import React, { useContext } from 'react';
import Context from '../store/Context';
import { useNavigate } from 'react-router-dom';
// import melonImg from '../assets/img/melonImg.svg'; // CORRIGIR PATH

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from '../components/header/Header';

const Login = () => {
  const { setNomeUser, nomeUser, setPassword, password } = useContext(Context);

  const handleOnChange = ({ value }, typeInput) => {
    typeInput === 'nomeUser' ? setNomeUser(value) : setPassword(value);
  };

  const history = useNavigate();
  const handleOnClick = () => {
    if (nomeUser && password) history('/listProducts');
    if (!password) alert('! ! !  Por favor informe os dados corretamente  ! ! !');
  };

  return (
    <div>
      <Header />
      <form>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField
            id="input-with-sx"
            label="User"
            variant="standard"
            onChange={(e) => handleOnChange(e.target, 'nomeUser')}
            required
          />
        </Box>
        <br />
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField
            type="password"
            id="input-with-sx"
            label="Password"
            variant="standard"
            onChange={(e) => handleOnChange(e.target, 'password')}
            required
          />
        </Box>
        <br />
        <img src="https://img.icons8.com/color/25/000000/google-logo.png" />
        <img src="https://img.icons8.com/color/25/000000/linkedin.png" />
        <img src="https://img.icons8.com/ios-glyphs/25/000000/mac-client.png" />
        <br />
        <br />
        <Button type="submit" onClick={() => handleOnClick()} variant="contained" color="success">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
