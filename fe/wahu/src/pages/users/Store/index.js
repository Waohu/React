import React from 'react';
import { Link } from "react-router-dom";
import "./fontawesome-free-6.1.2-web/css/all.min.css"
import "./grid.css";
import "./p.css";
import "./base.css";
import ProductItem from './ProductItem';
const products = [
  { name: 'Đường Đen Sữa Đá', price: '45.000 đ', src: "aa1" },
  { name: 'The Coffee House Sữa Đá', price: '39.000 đ', src: "aa2" },
  { name: 'Cà Phê Sữa Đá', price: '29.000 đ', src: "aa3" },
  { name: 'Bánh Mì', price: '39.000 đ', src: "aa4" },
  { name: 'Bạc Sỉu', price: '29.000 đ', src: "aa5" },
  { name: 'Bạc Sỉu Nóng', price: '39.000 đ', src: "aa6" },
  { name: 'Cà Phê Đen Đá', price: '29.000 đ', src: "aa7" },
  { name: 'Cà Phê Đen Đá', price: '29.000 đ', src: "aa8" },
  { name: 'Cà Phê Đen Đá', price: '29.000 đ', src: "aa9" },
  { name: 'Cà Phê Đen Đá', price: '29.000 đ', src: "aa10" },
  { name: 'Cà Phê Đen Nóng', price: '39.000 đ', src: "aa11" },
  { name: 'Cà Phê Đen Nóng', price: '39.000 đ', src: "aa12" }
];
const StorePage = () => {
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
              
              <li className="category-item category-item--active">
                <a href="#" className="category-item__link">ĐỒ PHA SẴN</a>
              </li>
              <li className="category-item">
                <Link to="/cua-hang/meo" className="category-item__link">MỒN LÈO</Link>
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

export default StorePage;
