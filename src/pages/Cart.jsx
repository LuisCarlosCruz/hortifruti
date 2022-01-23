import React, { useContext } from 'react';
import ButtonQtd from '../components/cart/ButtonQtd';
import Header from '../components/header/Header';
import Context from '../store/Context';

import Style from './styles/Cart.module.css';

const Cart = () => {
  const { cartList, setCartList } = useContext(Context);

  const handleOnClick = (type, item) => {
    if ((type === 'menos') & (item.qtd > 1)) {
      item.qtd -= 1;
    }
    if (type === 'mais') {
      item.qtd += 1;
    }
    const array = cartList.map((i) => (i.id === item.id ? item : i));
    setCartList(array);
  };

  const handleOnRemoveFruit = (item) => {
    const array = cartList.filter((i) => i.id !== item.id);
    setCartList(array);
  };

  return (
    <div>
      <Header />
      <div className={Style.cart}>
        <div className={Style.listCart}>
          {cartList.map((item) => (
            <div key={item.id} className={Style.fruitCard}>
              <div className={Style.infoFruit}>
                <div>
                  <p>
                    Name: <h5> {item.name}</h5>
                  </p>
                  <p>
                    Genus: <h5>{item.genus}</h5>{' '}
                  </p>
                  <p>
                    Family: <h5>{item.family}</h5>{' '}
                  </p>
                  <p>
                    Order:
                    <h5> {item.order}</h5>
                  </p>
                </div>
                <div className={Style.nutritions}>
                  <h5>Nutritions</h5>
                  <ul>
                    <li>Carbohydrates: {item.nutritions.carbohydrates}</li>
                    <li>Protein: {item.nutritions.protein}</li>
                    <li>Fat: {item.nutritions.fat}</li>
                    <li>Sugar: {item.nutritions.calories}</li>
                  </ul>
                </div>
              </div>
              <div className={Style.btnsCart}>
                <ButtonQtd type={'menos'} text={'-'} item={item} func={handleOnClick} />
                <p className={Style.qtdFruit}>{item.qtd}</p>
                <ButtonQtd type={'mais'} text={'+'} item={item} func={handleOnClick} />
                <div className={Style.btnWarning}>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleOnRemoveFruit(item)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={Style.clearCart}>
          {cartList.length !== 0 ? (
            <button type="button" className="btn btn-danger" onClick={() => setCartList([])}>
              CLEAR CART
            </button>
          ) : (
            <p className={Style.infoListEmpty}>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
