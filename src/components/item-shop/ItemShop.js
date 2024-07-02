import React from "react";
import ShopThing from "../shop-thing/ShopThing";
import useDataStore from "../hooks/useDataStore";
import "./ItemShop.css"
import "../shared-styles.css"

const ItemShop = () => {

  const shopItems = useDataStore((state) => state.shopItems);
  const [sortMode, setSortMode] = React.useState('bundles'); // bundles || outfit || pickaxes || emotes || wraps || gliders || contrails || backblings || music || loadingScreens ||

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


  const unbundledShopItems = sortedShopItems.soloItems.map((item, index) => <ShopThing key={`${item.id}${index}`} item={item} />);
  
  const allShopItems = shopItems.map((item, index) => <ShopThing key={`${item.id}${index}`} item={item} />);

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

  const outfits = shopItems.filter(item => item.type === 'Outfit').map((item, index) => <ShopThing key={`${item.id}${index}`} item={item} />);
  const pickaxes = shopItems.filter(item => item.type === 'Pickaxe').map((item, index) => <ShopThing key={`${item.id}${index}`} item={item} />);

  

  return (
    <div className="shop">
      <h2 className="shop-update">Items updated daily at 0:00UTC</h2>
      <button onClick={() => setSortMode('outfit')} style={{backgroundColor: sortMode === 'outfit' ? 'cyan' : 'yellow'}}>outfits</button>
      <button onClick={() => setSortMode('bundles')}>bundles</button>
      <button onClick={() => setSortMode('pickaxes')}>pickaxes</button>
      <button onClick={() => setSortMode('showAll')}>show all</button>
      <div className="item-container">
        {sortMode === 'bundles' && (
          <>
          {bundledShopItems}
          {unbundledShopItems}
        </>
        )}
        {sortMode === 'outfit' && (
          <>
            {outfits}
          </>
        )}
        {sortMode === 'pickaxes' && (
          <>
            {pickaxes}
          </>
        )}
        {sortMode === 'showAll' && (
          <>
            {allShopItems}
          </>
        )}
      </div>
    </div>
  )
};

export default ItemShop;