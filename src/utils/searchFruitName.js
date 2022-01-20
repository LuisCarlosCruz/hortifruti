const searchFruitAll = async (name) => {
  try {
    const URL = `/${name}`;
    const resp = await fetch(URL);
    const data = await resp.json();
    // console.log(data);
    return data;
  } catch (erro) {
    console.error('Erro: ', erro.message);
  }
};

export default searchFruitAll;
