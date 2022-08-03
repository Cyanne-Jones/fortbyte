import '../shared-styles.css';
import './App.css';
import { Route, NavLink, Routes, Link } from "react-router-dom";
import News from "../news/News";
import Stats from "../stats/Stats";
import ItemShop from "../item-shop/ItemShop";
import useDataStore from "../hooks/useDataStore";
import { useEffect } from 'react';

function App() {
  const setNewsItems = useDataStore((state) => state.setNewsItems);

  useEffect(() => {
    fetch('https://fortnite-api.com/v2/news')
    .then(res => res.json())
    .then(res => {
      const newItems = res.data.br.motds.map(item => ({...item, isFavorited: false}))
      setNewsItems(newItems)
    })
    .catch(error => console.log(error));
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
        <Route exact path="/" element={<News />} />
        <Route exact path="stats" element={<Stats />} />
        <Route exact path="shop" element={<ItemShop />} />
      </Routes>
    </div>
  );
};

export default App;
