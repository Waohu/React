import React from 'react';
import "./proitem.scss";

const ProductItem = ({ name, price, src }) => {
    // const productImageStyle = {
    //     backgroundImage: `url(${src})` // Sử dụng src như background-image
    // };
    // console.log(productImageStyle);

  return (
    <div className="product-item">
      <div className={`product-img ${src}`} ></div>
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
    </div>
  );
};

export default ProductItem;
