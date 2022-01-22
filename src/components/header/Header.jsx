import React, { useContext } from 'react';
import Context from '../../store/Context';
import iconeCart from '../../assets/icons/iconCart.png';
import iconHome from '../../assets/icons/iconHome.png';
import { useNavigate } from 'react-router-dom';
//
import styles from './Header.module.css';

const Header = () => {
  const { nomeUser } = useContext(Context);
  const pathname = window.location.pathname;

  const history = useNavigate();
  const handleOnClick = () => {
    history(`/cart`);
  };

  return (
    <div className={styles.divLogin}>
      {pathname.includes('/cart') && (
        <img src={iconHome} onClick={() => history(`/listProducts`)} />
      )}
      <h1 className={styles.titleH1}>HORTIFRUTI</h1>
      {pathname.includes('/listProducts') && (
        <div className={styles.divHeaderUserIconeCarrinho}>
          <p>
            Welcome <span>{nomeUser}</span>
          </p>
          <div>
            <img src={iconeCart} alt="icone do carrinho" onClick={() => handleOnClick()} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
