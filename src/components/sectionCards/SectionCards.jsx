import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../store/Context';
import searchFruitAll from '../../utils/searchFruitAll';

const SectionCards = () => {
  const { allFruits, setAllFruits } = useContext(Context);

  useEffect(async () => {
    const all = await searchFruitAll();
    await setAllFruits(all);
  }, []);
  // useEffect(() => {}, [searchedFruit]);

  const history = useNavigate();
  const handleOnClick = ({ id }) => {
    history(`/details/${id}`);
  };

  return (
    <div>
      {/* <h3>LOGO SVG</h3> */}
      {allFruits &&
        allFruits.map((item) => (
          <div key={item.id} onClick={() => handleOnClick(item)}>
            <h4>{`Name: ${item.name}`}</h4>
            <p>{`Family: ${item.family}`}</p>
            <br />
          </div>
        ))}
    </div>
  );
};

export default SectionCards;
