import React from "react";
import ShopThing from "../shop-thing/ShopThing"
import useDataStore from "../hooks/useDataStore"

const ItemShop = () => {

  const shopItems = useDataStore((state) => state.shopItems);
  const mappedShopItems = shopItems.map(item => <ShopThing key={item.id} item={item} />);

  return (
    <div className="shop">
      {mappedShopItems}
    </div>
  )
};

export default ItemShop;