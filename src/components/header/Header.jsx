import React, { useContext } from 'react';
import Context from '../../store/Context';
import iconeCart from '../../assets/icons/iconCart.png';
import iconHome from '../../assets/icons/iconHome.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { nomeUser } = useContext(Context);
  const pathname = window.location.pathname;

  const history = useNavigate();
  const handleOnClick = () => {
    history(`/cart`);
  };

  return (
    <div>
      {(pathname.includes('/details') || pathname.includes('/cart')) && (
        <img src={iconHome} onClick={() => history(`/listProducts`)} />
      )}
      <h1 className="titleH1">HORTIFRUTI</h1>
      {pathname.includes('/listProducts') && (
        <div>
          <p>{`Welcome ${nomeUser}`}</p>
          <div>
            <img src={iconeCart} alt="icone do carrinho" onClick={() => handleOnClick()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
