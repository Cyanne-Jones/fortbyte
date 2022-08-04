import React from "react";
import ShopThing from "../shop-thing/ShopThing"
import useDataStore from "../hooks/useDataStore"

const ItemShop = () => {

  const shopItems = useDataStore((state) => state.shopItems)
  return (
    <h1>SHOP</h1>
  )
};

export default ItemShop;