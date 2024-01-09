const groceriesList = () => {
  const res = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(obj)) {
    res.set(key, obj[key]);
  }
  return res;
};

export default groceriesList;
