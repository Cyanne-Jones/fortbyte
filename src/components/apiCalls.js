const fetchData = (url) => {
  return fetch(url)
  .then(res => {
    if (res.status === 200) {
      return res.json()
    } else {
      console.log('response', res)
      throw new Error(`Error fetching data from ${url}`);
    }
  });
};

const fetchUserStats = (userName) => {
  return fetch(`https://fortnite-api.com/v2/stats/br/v2?name=${userName}`, {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY
    }
  })
  .then(res => {
    if(res.status === 200) {
      return res.json();
    }
    else if (res.status === 400) {
      throw new Error("Invalid username, try again");
    }
  });
};

export { fetchData, fetchUserStats };