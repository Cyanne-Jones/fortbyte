import React from "react";
import ShopThing from "../shop-thing/ShopThing";
import useDataStore from "../hooks/useDataStore";
import "./ItemShop.css"
import "../shared-styles.css"

const ItemShop = () => {

  const shopItems = useDataStore((state) => state.shopItems);
  const mappedShopItems = shopItems.map((item, index) => <ShopThing key={`${item.id}${index}`} item={item} />);

  return (
    <div className="shop">
      <h2 className="shop-update">Daily items updated every day at 0:00UTC</h2>
      <div className="item-container">
        {mappedShopItems}
      </div>
    </div>
  )
};

export default ItemShop;