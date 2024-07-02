import React, { useEffect } from "react";
import ShopThing from "../shop-thing/ShopThing";
import useDataStore from "../hooks/useDataStore";
import "./ItemShop.css"
import "../shared-styles.css"

const ItemShop = () => {

  const filters = [
    {
      displayName: 'Show All',
      filterValue: 'showAll'
    },
    {
      displayName: 'Bundles',
      filterValue: 'bundles'
    },
    {
      displayName: 'Outfits',
      filterValue: 'Outfit'
    },
    {
      displayName: 'Pickaxes',
      filterValue: 'Pickaxe'
    },
    {
      displayName: 'Emotes',
      filterValue: 'Emote'
    },
    {
      displayName: 'Back Bling',
      filterValue: 'Back Bling'
    },
    {
      displayName: 'Wraps',
      filterValue: 'Wrap'
    },
    {
      displayName: 'Glider',
      filterValue: 'Glider'
    }
  ]

  const shopItems = useDataStore((state) => state.shopItems);
  const [sortMode, setSortMode] = React.useState('showAll');
  const [areFiltersExpandedMobile, setAreFiltersExpandedMobile] = React.useState(false);

  useEffect(() => {
    areFiltersExpandedMobile && setAreFiltersExpandedMobile(false);
  }, [areFiltersExpandedMobile, sortMode])

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


  const bundledShopItems = sortedShopItems.bundles.map((bundle) => {
    const shopThings = bundle.items.map((item, index) => <ShopThing key={`${item.id}${index}`} item={item} />);
    return (
      <div className="bundle-container" key={bundle.name}>
        <div key={bundle.name} className="bundle">
          <h2 className="bundle-name">{bundle.name}</h2>
          <div className="bundle-items">
            {shopThings}
          </div>
        </div>
      </div>
    )
  });

  const shopItemMapper = (type) =>  {
    if (type === 'showAll') return shopItems.map((item, index) => <ShopThing key={`${item.id}${index}`} item={item} />);
    if (type === 'bundles') return bundledShopItems;
    const filteredItems = shopItems.filter(item => item.type === type);
    return filteredItems.map((item, index) => <ShopThing key={`${item.id}${index}`} item={item} />);
  }

  return (
    <div className="shop">
      <h2 className="shop-update">Items updated daily at 0:00UTC</h2>
      <div className="mobile-filter-button-container">
      <button 
        className='mobile-filter-show filter-button' 
        onClick={() => setAreFiltersExpandedMobile(!areFiltersExpandedMobile)}
      >
        {areFiltersExpandedMobile ? 'Hide' : 'Show'} filters
      </button>
      </div>
      <div className={`filter-button-group ${!areFiltersExpandedMobile && 'hide'}`}>
      {filters.map(filter =>(
        <button 
          className={`filter-button ${sortMode === filter.filterValue ? 'filter-active' : 'filter-inactive'}`} 
          key={filter.filterValue} 
          onClick={() => setSortMode(filter.filterValue)} 
        >
          {filter.displayName}
        </button>
      ))}
      </div>

      <div className="item-container">
        {shopItemMapper(filters.find(filter => filter.filterValue === sortMode).filterValue)}
      </div>
    </div>
  )
};

export default ItemShop;