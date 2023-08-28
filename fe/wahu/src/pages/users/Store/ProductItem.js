import React from 'react';
import "./style.scss"
const ProductItem = ({ name, price, src }) => {

  return (
    <div className="col l-2-4 m-4 c-6">
                <a className="home-product__item">
                  <div className={`home-product__item-img ${src}`}>
                  </div>
                  <h4 className="home-product__item-name">{name}</h4>
                  <div className="home-product__item-price">
                 
                    <span className="home-product__item-price__current-price">{price}</span>
                  </div>
                  <div className="home-product__item-origin">
                    <span className="home-product__item-origin-brand">Cafe Mèo</span>
                    <span className="home-product__item-origin-place">TP. Hồ Chí Minh</span>
                  </div>
                </a>
              </div>
  );
};

export default ProductItem;
