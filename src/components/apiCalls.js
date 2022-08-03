const fetchData = (url) => {
  return fetch(url)
  .then(res => {
    if (res.status === 200) {
      return res.json()
    } else {
      throw new Error("Oh no!")
    }
  });
};

export default fetchData;