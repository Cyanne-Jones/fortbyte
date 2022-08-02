import '../shared-styles.css'
import './App.css';
import { Route, NavLink, Routes } from "react-router-dom"
import News from "../news/News"
import Stats from "../stats/Stats"
import ItemShop from "../item-shop/ItemShop"
import { getValue } from '@testing-library/user-event/dist/utils';

function App() {

  return (
    <div className="App">
      <header>
        <h1>FORTBYTE</h1>
        <nav>
          <NavLink to="/" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font" : "")}
          >
            News
          </NavLink>
          <NavLink to="stats" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font" : "")}
          >
            Stats
          </NavLink>
          <NavLink to="shop" className={({isActive}) => 
            (isActive ? "yellow-gradient blue-font" : "")}
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
