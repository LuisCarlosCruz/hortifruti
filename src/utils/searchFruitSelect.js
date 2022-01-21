const searchFruitSelect = async (type, param) => {
  try {
    const URL = `/${type}/${param}`;
    const resp = await fetch(URL);
    const data = await resp.json();
    // console.log(data, type, param);
    return data;
  } catch (erro) {
    console.error('Erro: ', erro.message);
  }
};

export default searchFruitSelect;
