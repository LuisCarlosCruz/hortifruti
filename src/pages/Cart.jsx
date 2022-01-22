import React, { useContext } from 'react';
import ButtonQtd from '../components/cart/ButtonQtd';
import Header from '../components/header/Header';
import Context from '../store/Context';

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
      {cartList.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h4>{item.genus}</h4>
          <h4>{item.family}</h4>
          <h4>{item.order}</h4>
          <div>
            <h5>Nutritions</h5>
            <ul>
              <li>Carbohydrates: {item.nutritions.carbohydrates}</li>
              <li>Protein: {item.nutritions.protein}</li>
              <li>Fat: {item.nutritions.fat}</li>
              <li>Sugar: {item.nutritions.calories}</li>
            </ul>
          </div>
          <ButtonQtd type={'menos'} text={'-'} item={item} func={handleOnClick} />
          <p>{item.qtd}</p>
          <ButtonQtd type={'mais'} text={'+'} item={item} func={handleOnClick} />
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => handleOnRemoveFruit(item)}>
            Remove
          </button>
        </div>
      ))}
      {cartList.length !== 0 ? (
        <button type="button" className="btn btn-danger" onClick={() => setCartList([])}>
          CLEAR CART
        </button>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
