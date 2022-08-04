import React from "react";
import "./ShopThing.css"
import "../shared-styles.css";
import PropTypes from 'prop-types';

const ShopThing = ({item}) => {
  return(
    <div className="shop-thing yellow-gradient box-shadow">
      <h3 className="item-name blue-gradient">{item.name}</h3>
      <p className="type-and-rarity">{`${item.rarity} ${item.type}`}</p>
      <div className="image-and-price">
        <img className={`item-image box-shadow default ${item.rarity.toLowerCase()}`} src={item.image} alt={`${item.name} image`} />
        <p className="item-price">{item.price}</p>
        <img className="v-buck" src="https://i.imgur.com/zATA1lA.png" alt="vbuck"/>
      </div>
      <p className="description">{item.description}</p>
    </div>
  );
};

ShopThing.propTypes = {
  item: PropTypes.object
};

export default ShopThing;