import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import "./coban.css";


const Header = () => {
    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 cc header__top_left">
                            <div className="contact-text">
                            
                                <p>Các sản phẩm chỉ mang tính chất tham khảo không có thật </p>
                            </div>
                        </div>
                        <div className="col-6 cc header__top_right">
                            <div className="contact-text">
                                <p>  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-4 cc">
                            <Link to="/" className="header__bottom_logo">
                                <span className="highlighted-text logo-text"> CAT CAFE </span>
                            </Link>
                        </div>
                        <div className="col-2 cc">
                            <Link to="/cua-hang/do-pha-san" className="header__bottom_store">
                                <span className="highlighted-text">Cửa hàng</span>
                            </Link>
                        </div>
                        <div className="col-2 cc header__bottom_menu-hover cc1">
                            <div className="header__bottom_menu">
                                    <span className="highlighted-text">Menu</span>
                                <div className="header__bottom_dropdown">
                                    <ul className="dropdown-list">
                                        <li className="dropdown_item">
                                            Trà
                                            <div className="submenu">
                                                <ul className="submenu-list">
                                                    <li className="submenu-item">Trà sữa truyền thống</li>
                                                    <li className="submenu-item">Trà sữa hương trái cây</li>
                                                    <li className="submenu-item">Trà sữa trân châu</li>
                                                    <li className="submenu-item">Trà sữa macchiato</li>
                                                    <li className="submenu-item">Trà sữa Matcha</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown_item">
                                            Coffee
                                            <div className="submenu">
                                                <ul className="submenu-list">
                                                    <li className="submenu-item">Cà phê espresso</li>
                                                    <li className="submenu-item">Cà phê americano</li>
                                                    <li className="submenu-item">Cappuccino</li>
                                                    <li className="submenu-item">Latte</li>
                                                    <li className="submenu-item">Mocha</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown_item">
                                            Đá Xay
                                            <div className="submenu">
                                                <ul className="submenu-list">
                                                    <li className="submenu-item">Đá xay sữa chua</li>
                                                    <li className="submenu-item">Đá xay cà phê</li>
                                                    <li className="submenu-item">Smoothie đá xay</li>
                                                    <li className="submenu-item">Đá xay hạt ngũ cốc</li>
                                                    <li className="submenu-item">Đá xay trái cây</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="dropdown_item">
                                            Mèo
                                            <div className="submenu">
                                                <ul className="submenu-list">
                                                    <li className="submenu-item">Mèo mướp</li>
                                                    <li className="submenu-item">Mèo Ba Tư</li>
                                                    <li className="submenu-item">Mèo Munchkin</li>
                                                    <li className="submenu-item">Mèo Siamese</li>
                                                    <li className="submenu-item">Mèo Bengal</li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header__search-wrap hide-on-mobile col-4 cc" id="header-mobile-search">
                            <div className="header__search">
                                <div className="header__search-input-wrap">
                                    <input type="text" className="header__search-input" placeholder="Tìm kiếm sản phẩm" />
                                    <div className="header__search-history">
                                        <div className="header__search-history-title">Lịch sử tìm kiếm</div>
                                        <ul className="header__search-history-list">
                                            <li className="header__search-history-item">
                                                <a href="" className="header__search-history-link">
                                                    Mèo Ngu
                                                </a>
                                            </li>
                                            <li className="header__search-history-item">
                                                <a href="" className="header__search-history-link">
                                                    Cà phê
                                                </a>
                                            </li>
                                            <li className="header__search-history-item">
                                                <a href="" className="header__search-history-link">
                                                    Mèo Mướp
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button className="header__search-btn">
                                    <i className="header__search-btn-icon fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);