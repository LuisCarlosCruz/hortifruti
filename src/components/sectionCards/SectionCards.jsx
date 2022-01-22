import React, { useContext, useEffect } from 'react';
import { Link /* , useNavigate */ } from 'react-router-dom';
import Context from '../../store/Context';
import searchFruitAll from '../../utils/searchFruitAll';

import imgCart from '../../assets/icons/iconCart.svg';

const SectionCards = () => {
  const { allFruits, setAllFruits, cartList, setCartList } = useContext(Context);

  useEffect(async () => {
    const all = await searchFruitAll();
    await setAllFruits(all);
  }, []);

  // const history = useNavigate();
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

    // history(`/details/${id}`);
  };

  return (
    <div>
      {/* <h3>LOGO SVG</h3> */}
      {allFruits &&
        allFruits.map((item) => (
          <div key={item.id}>
            <Link to={`/details/${item.id}`}>
              <p>{item.name}</p>
            </Link>
            <img src={imgCart} alt="image cart" onClick={() => handleOnClick(item)} />

            <br />
            <br />
          </div>
        ))}
    </div>
  );
};

export default SectionCards;
