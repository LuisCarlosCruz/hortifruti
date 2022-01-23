import React, { useContext, useEffect } from 'react';
import Context from '../../store/Context';
import searchFruitAll from '../../utils/searchFruitAll';

import imgCart from '../../assets/icons/iconCart.svg';
import imgMelon from '../../assets/icons/imgMelon.svg';

import Style from './SectionCards.module.css';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

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
      <div className={Style.divImgFruit}>
        <img src={imgMelon} alt="imagem de melancia" />
      </div>
      <div className={Style.divSectionFruit}>
        {allFruits.length === 0 && (
          <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="success" />
          </Stack>
        )}
        {allFruits &&
          allFruits.map((item) => (
            <div key={item.id} className={Style.cardFruit}>
              <p>{item.name}</p>
              <img
                src={imgCart}
                className={Style.imgFruit}
                alt="image cart"
                onClick={() => handleOnClick(item)}
              />

              <br />
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectionCards;
