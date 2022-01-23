import React, { useContext } from 'react';
import Context from '../store/Context';
import { useNavigate } from 'react-router-dom';
import melonImg from '../assets/img/melonImg.png';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from '../components/header/Header';
import Style from './styles/Login.module.css';

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
      <section className={Style.sectionLogin}>
        <img src={melonImg} alt="imagem de melancia" className={Style.imagemLogin} />
        <form className={Style.formLogin}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className={Style.InputUser}>
            <TextField
              id="input-with-sx"
              label="User"
              variant="standard"
              onChange={(e) => handleOnChange(e.target, 'nomeUser')}
              required
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }} className={Style.InputUser}>
            <TextField
              type="password"
              id="input-with-sx"
              label="Password"
              variant="standard"
              onChange={(e) => handleOnChange(e.target, 'password')}
              required
            />
          </Box>
          <div className={Style.iconesLogin}>
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/30/000000/google-logo.png" />
            </a>
            <a href="https://www.linkedin.com/in/luiscarloscruzz/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/color/30/000000/linkedin.png" />
            </a>
            <a href="https://www.icloud.com/" target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios-glyphs/30/000000/mac-client.png" />
            </a>
          </div>
          <div className={Style.buttonLogin}>
            <Button
              type="submit"
              onClick={() => handleOnClick()}
              variant="contained"
              color="success">
              Login
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
