import React from "react";
import ShopThing from "../shop-thing/ShopThing";
import useDataStore from "../hooks/useDataStore";
import "./ItemShop.css"
import "../shared-styles.css"

const ItemShop = () => {

  const shopItems = useDataStore((state) => state.shopItems);

  const sortedShopItems = shopItems.reduce((acc, item) => {

    if(item.bundleName !== 'solo') {
      const bundleIndex = acc.bundles.findIndex(bundle => bundle.name === item.bundleName);
      if(bundleIndex === -1) {
        acc.bundles.push({name: item.bundleName, items: [item]});
      } else {
        acc.bundles[bundleIndex].items.push(item);
      } 
    }
    else {
      acc.soloItems.push(item);
    }

    return acc;
  }, {bundles: [], soloItems: []})


  const mappedShopItems = sortedShopItems.soloItems.map((item, index) => <ShopThing key={`${item.id}${index}`} item={item} />);

  const bundledShopItems = sortedShopItems.bundles.map((bundle, index) => {
    const mappedItems = bundle.items.map((item, index) => <ShopThing key={`${item.id}${index}`} item={item} />);
    return (
      <div className="bundle-container" key={bundle.name}>
        <div key={bundle.name} className="bundle">
          <h2 className="bundle-name">{bundle.name}</h2>
          <div className="bundle-items">
            {mappedItems}
          </div>
        </div>
      </div>
    )
  });

  return (
    <div className="shop">
      <h2 className="shop-update">Items updated daily at 0:00UTC</h2>
      <div className="item-container">
        {bundledShopItems}
        {mappedShopItems}
      </div>
    </div>
  )
};

export default ItemShop;