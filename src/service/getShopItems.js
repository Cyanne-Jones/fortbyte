export const getShopItems = async () => {
  try {
    const items = await fetch("https://fortnite-api.com/v2/shop/br")
    .then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        console.log('response', res)
        throw new Error("Error fetching shop items")
      }
    });
  } catch (error) {
    console.log(error)
  }
}