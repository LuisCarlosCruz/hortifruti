import React, { useContext, useEffect } from 'react';
import Context from '../../store/Context';
import searchFruitAll from '../../utils/searchFruitAll';

import imgCart from '../../assets/icons/iconCart.svg';
import imgMelon from '../../assets/icons/imgMelon.svg';

const SectionCards = () => {
  const { allFruits, setAllFruits, cartList, setCartList } = useContext(Context);

  useEffect(async () => {
    const all = await searchFruitAll();
    await setAllFruits(all);
  }, []);

  const handleOnClick = async ({ id }) => {
    const all = await searchFruitAll();
    const filterFruit = all.filter((item) => (item.id === id ? item : null));
    const fruit = filterFruit[0];
    fruit.qtd = 1;

    const existe = cartList.some((item) => item.id === id);

    if (!existe) {
      const array = [...cartList, fruit];
      setCartList(array);
      alert('✔️ Fruit added to cart');
    }

    if (existe) {
      const addQtd = cartList.map((item) => {
        if (item.id === id) {
          item.qtd += 1;
          return item;
        }
        return item;
      });
      setCartList(addQtd);
      alert('✔️ Fruit added to cart');
    }
  };

  return (
    <div>
      <div>
        <img src={imgMelon} alt="imagem mulher com melancia" />
      </div>
      {allFruits &&
        allFruits.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <img src={imgCart} alt="image cart" onClick={() => handleOnClick(item)} />

            <br />
            <br />
          </div>
        ))}
    </div>
  );
};

export default SectionCards;
