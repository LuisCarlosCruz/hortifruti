const searchFruitSelect = async (type, family) => {
  try {
    const URL = `/${type}/${family}`;
    const resp = await fetch(URL);
    const data = await resp.json();
    console.log(data);
    return data;
  } catch (erro) {
    console.error('Erro: ', erro.message);
  }
};

export default searchFruitSelect;
