import React, { memo } from "react";
import "./grid.css"; // Liên kết tệp CSS/SCSS
import "./base.css";
import "./t.css";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid wide">
        <div className="row footer-mobile">
          <div className="col l-3 m-4 c-3">
            <h3 className="footer__heading">Chăm Sóc Khách Hàng</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item__link">Trung tâm trợ giúp</a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">Wahu Shop </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">Hướng dẫn mua hàng</a>
              </li>
            </ul>
          </div>
          <div className="col l-3 m-4 c-3">
            <h3 className="footer__heading">Giới Thiệu</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item__link">Giới thiệu</a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">Tuyển dụng</a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">Điều khoản</a>
              </li>
            </ul>
          </div>
          <div className="col l-3 m-4 c-3">
            <h3 className="footer__heading">Danh Mục</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="" className="footer-item__link">Thức uống </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">Gia dụng </a>
              </li>
              <li className="footer-item">
                <a href="" className="footer-item__link">Mèo ngu</a>
              </li>
            </ul>
          </div>
          <div className="col l-3 m-4 c-3">
          <h3 className="footer__heading">Theo Giõi</h3>
<ul className="footer-list">
  <li className="footer-item">
    <a href="https://www.facebook.com/PhanTheAnh.19/" target="_blank" rel="noopener noreferrer" className="footer-item__link">
      <FaFacebookSquare className="footer-icon" />
      Facebook
    </a>
  </li>
  <li className="footer-item">
    <a href="https://www.instagram.com/your_instagram_link" target="_blank" rel="noopener noreferrer" className="footer-item__link">
      <FaInstagram className="footer-icon" />
      Instagram
    </a>
  </li>
  <li className="footer-item">
    <a href="https://www.linkedin.com/your_linkedin_link" target="_blank" rel="noopener noreferrer" className="footer-item__link">
      <FaLinkedin className="footer-icon" />
      LinkedIn
    </a>
  </li>
</ul>


          </div>
        </div>
      </div>
    </footer>

  );
};

export default memo(Footer);