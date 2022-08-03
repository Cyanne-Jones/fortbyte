import '../shared-styles.css'
import './App.css';
import { Route, NavLink, Routes } from "react-router-dom"
import News from "../news/News"
import Stats from "../stats/Stats"
import ItemShop from "../item-shop/ItemShop"
import useDataStore from "../hooks/useDataStore"
import { useEffect } from 'react';

function App() {

  const newsItems = useDataStore((state) => state.newsItems)
  const storeItems = useDataStore((state) => state.storeItems)
  const setNewsItems = useDataStore((state) => state.setNewsItems)

  useEffect(() => {
    fetch('https://fortnite-api.com/v2/news')
    .then(res => res.json())
    .then(res => setNewsItems(res.data.br.motds))
  }, []);

  return (
    <div className="App">
      <header>
        <h1 className="text-drop-shadow">FORTBYTE</h1>
        <nav>
          <NavLink to="/" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font text-drop-shadow" : "text-drop-shadow")}
          >
            News
          </NavLink>
          <NavLink to="stats" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font text-drop-shadow" : "text-drop-shadow")}
          >
            Stats
          </NavLink>
          <NavLink to="shop" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font text-drop-shadow" : "text-drop-shadow")}
          >
            Item shop
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route exact path="/" element={<News />} />
        <Route exact path="stats" element={<Stats />} />
        <Route exact path="shop" element={<ItemShop />} />
      </Routes>
    </div>
  );
}

export default App;
