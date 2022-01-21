import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Context from '../../store/Context';
import searchFruitAll from '../../utils/searchFruitAll';

import imgCart from '../../assets/icons/iconCart.svg';

const SectionCards = () => {
  const { allFruits, setAllFruits } = useContext(Context);

  useEffect(async () => {
    const all = await searchFruitAll();
    await setAllFruits(all);
  }, []);

  const history = useNavigate();
  const handleOnClick = ({ id }) => {
    history(`/details/${id}`);
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
