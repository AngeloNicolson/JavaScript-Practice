const fetchGot = async () => {
  const result = await fetch("#");

  console.log(result);
};

fetchGot();