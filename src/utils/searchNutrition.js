const searchNutrition = async (type, min, max) => {
  try {
    const URL = `/${type}?min=${min}&max=${max}`;
    const resp = await fetch(URL);
    const data = await resp.json();
    if (data.error) {
      throw 'not found';
    }
    return data;
  } catch (err) {
    alert('🚨  Fruit not found 🚨');
  }
};

export default searchNutrition;
