import React from 'react';
import { Link } from "react-router-dom";
import "../fontawesome-free-6.1.2-web/css/all.min.css"
import "./grid.css";
import "./main.css";
import "./base.css";
import ProductItem from './ProductItem';
const products = [];

const randomCatNames = [
  'Mèo Mướp', 'Mèo Ba Tư', 'Mèo Munchkin', 'Mèo Siamese', 'Mèo Bengal',
  'Mèo Maine Coon', 'Mèo Scottish Fold', 'Mèo Ragdoll', 'Mèo Sphynx', 'Mèo Russian Blue'
];

const randomPrices = [
  "20.000.000 đ", "5.000.000 đ", "7.000.000 đ","3.000.000 đ","19.000.000 đ","9.000.000 đ" , "50.000.000 đ", "30.000.000 đ"
];

for (let i = 1; i <= 50; i++) {
  const randomName = randomCatNames[Math.floor(Math.random() * randomCatNames.length)];
  const randomPrice = randomPrices[Math.floor(Math.random() * randomPrices.length)];
  products.push({ name: randomName, price: randomPrice, src: `a${i}` });
}

const Meo = () => {
  return (
    <div className="grid wide">
      <div className="row mt-16 sm-gutter">
        <div className="col l-2 m-0 c-0">
          <nav className="category">
            <h3 className="category__heading">
              <i className="fa-solid fa-list category__heading-icon"></i>
              Danh Mục
            </h3>
            <ul className="category-list">
              
              <li className="category-item">
                <Link to="/cua-hang/do-pha-san" className="category-item__link">ĐỒ PHA SẴN</Link>
              </li>
              <li className="category-item  category-item--active">
                <a href="#" className="category-item__link">MỒN LÈO</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col l-10 m-12 c-12">

          <div className="home-product">
            <div className="row sm-gutter mobile-product">

              
              {products.map((product, index) => (
                <ProductItem key={index} name={product.name} price={product.price} src={product.src} />
              ))}

            </div>
          </div>

          <ul className="pagination home-product-pagination">
            <li className="pagination-item">
              <a className="pagination-item-link" href="#">
                <i className="pagination-control-icon fa-solid fa-angle-left"></i>
              </a>
            </li>
            <li className="pagination-item pagination-item--active">
              <a className="pagination-item-link" href="#">1</a>
            </li>
            <li className="pagination-item">
              <a className="pagination-item-link" href="#">2</a>
            </li>
            <li className="pagination-item">
              <a className="pagination-item-link" href="#">3</a>
            </li>
            <li className="pagination-item">
              <a className="pagination-item-link" href="#">4</a>
            </li>
            <li className="pagination-item">
              <a className="pagination-item-link" href="#">5</a>
            </li>
            <li className="pagination-item">
              <a className="pagination-item-link" href="#">...</a>
            </li>
            <li className="pagination-item">
              <a className="pagination-item-link" href="#">13</a>
            </li>
            <li className="pagination-item">
              <a className="pagination-item-link" href="#">14</a>
            </li>
            <li className="pagination-item">
              <a className="pagination-item-link" href="#">
                <i className="pagination-control-icon fa-solid fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Meo;
