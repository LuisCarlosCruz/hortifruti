const searchFruitName = async () => {
  try {
    const URL = '/all';
    const resp = await fetch(URL);
    const data = await resp.json();
    // console.log(data);
    return data;
  } catch (erro) {
    console.error('Erro: ', erro.message);
  }
};

export default searchFruitName;
