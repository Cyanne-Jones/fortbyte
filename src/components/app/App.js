import './App.css';
import { Route, NavLink, Routes } from "react-router-dom"
import News from "../news/News"
import Stats from "../stats/Stats"
import ItemShop from "../item-shop/ItemShop"

function App() {


  return (
    <div className="App">
      <header>
        <h1>FORTBYTE</h1>
        <nav>
          <NavLink to="/">News</NavLink>
          <NavLink to="stats">Stats</NavLink>
          <NavLink to="shop">Item shop</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="stats" element={<Stats />} />
        <Route path="shop" element={<ItemShop />} />
      </Routes>
    </div>
  );
}

export default App;
