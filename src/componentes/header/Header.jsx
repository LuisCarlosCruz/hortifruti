import React, { useContext } from 'react';
import Context from '../../store/Context';
import iconeCart from '../../assets/icons/iconCart.png';

const Header = () => {
  const { nomeUser } = useContext(Context);
  const pathname = window.location.pathname;

  return (
    <div>
      {(pathname.includes('/details') || pathname.includes('/cart')) && <p>ICONE HOME</p>}
      <h1>HORTIFRUTI</h1>
      {pathname.includes('/listProducts') && (
        <div>
          <p>{nomeUser}</p>
          <div>
            <img src={iconeCart} alt="icone do carrinho" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
