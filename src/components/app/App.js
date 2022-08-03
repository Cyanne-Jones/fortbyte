import '../shared-styles.css';
import './App.css';
import { Route, NavLink, Routes, Link } from "react-router-dom";
import News from "../news/News";
import Stats from "../stats/Stats";
import ItemShop from "../item-shop/ItemShop";
import useDataStore from "../hooks/useDataStore";
import { useEffect, useState } from 'react';

function App() {
  const setNewsItems = useDataStore((state) => state.setNewsItems);
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://fortnite-api.com/v2/news')
    .then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw new Error("Oh no!")
      }
    })
    .then(res => {
      const newItems = res.data.br.motds.map(item => ({...item, isFavorited: false}))
      setNewsItems(newItems)
    })
    .catch(error => setError(error));
  }, []);

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
            (isActive ? "yellow-gradient blue-font text-drop-shadow box-shadow" : "text-drop-shadow")}
          >
            News
          </NavLink>
          <NavLink to="stats" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font text-drop-shadow box-shadow" : "text-drop-shadow")}
          >
            Stats
          </NavLink>
          <NavLink to="shop" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font text-drop-shadow box-shadow" : "text-drop-shadow")}
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
