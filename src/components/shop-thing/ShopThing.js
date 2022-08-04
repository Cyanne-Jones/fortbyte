import React from "react";

const ShopThing = ({item}) => {
  return(
    <div className="shop-thing">
      <h3 className="item-name">{item.name}</h3>
      <p className="type-and-rarity">{`${item.rarity} ${item.type}`}</p>
      <div className="image-and-price">
        <img className="item-image" src={item.image} alt={`${item.name} image`} />
        <p className="item-price">{item.price} v bucks</p>
      </div>
      <p className="description">{item.description}</p>
    </div>
  );
};

export default ShopThing;