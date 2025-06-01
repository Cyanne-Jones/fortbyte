import '../shared-styles.css';
import './App.css';
import { Route, NavLink, Routes, Link } from "react-router-dom";
import News from "../news/News";
import Stats from "../stats/Stats";
import ItemShop from "../item-shop/ItemShop";
import useDataStore from "../hooks/useDataStore";
import { useEffect, useState } from 'react';
import { fetchData } from "../apiCalls"

function App() {
  const setNewsItems = useDataStore((state) => state.setNewsItems);
  const setShopItems = useDataStore((state) => state.setShopItems);
  const [error, setError] = useState('')

  useEffect(() => {
    fetchData("https://fortnite-api.com/v2/news")
    .then(res => {
      const newItems = res.data.br.motds.map(item => ({...item, isFavorited: false}))
      setNewsItems(newItems)
    })
    .catch(error => setError(error));

    fetchData("https://fortnite-api.com/v2/shop")
      .then(res => {
        const shopItems = [];

        res.data.entries.forEach( entry => {
          if (!entry.brItems) return;
          entry.brItems.forEach(item => {
            if (!entry.brItems || entry.brItems.length === 0) return;
            const newShopItem = {
              name: item.name,
              id: item.id,
              description: item.description,
              type: item.type.displayValue,
              price: entry.finalPrice,
              introduction: item.introduction?.text,
              rarity: item.rarity.displayValue,
              image: item.images.featured || item.images.icon || item.images.smallIcon,
              bundleName: entry.bundle?.name || 'solo',
              set: item.set?.text || ''
            }
            shopItems.push(newShopItem);
          })
        })
        setShopItems(shopItems);
      })
      .catch(error => {
        setError(error)
        console.log(`%c You 🫵🏼 have an error 😱`, "color: #C71585; font-size: 20px; font-family: cursive;")
        console.log(`%c ${error}`, "color: cyan;")
      })
  }, [ setNewsItems, setShopItems ]);

  return (
    <div className="App">
      <header>
        <Link to="/" 
          className="site-name"
        >
          <h1 className="text-drop-shadow">FORTBYTE</h1>
        </Link>
        <nav>
          <NavLink to="/" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font text-drop-shadow box-shadow news-button" : "text-drop-shadow news-button")}
          >
            News
          </NavLink>
          <NavLink to="stats" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font text-drop-shadow box-shadow stats-button" : "text-drop-shadow stats-button")}
          >
            Stats
          </NavLink>
          <NavLink to="shop" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font text-drop-shadow box-shadow shop-button" : "text-drop-shadow shop-button")}
          >
            Item Shop
          </NavLink>
        </nav>
      </header>
      <Routes>
      <Route path="*" element={<p>Page not found!</p>} />
        <Route exact path="/" element={<News />} />
        <Route exact path="stats" element={<Stats />} />
        <Route exact path="shop" element={<ItemShop />} />
      </Routes>
      <p className="app-error">
        {error ? "Oh no, something went wrong!" : ""}
      </p>
    </div>
  );
};

export default App;
