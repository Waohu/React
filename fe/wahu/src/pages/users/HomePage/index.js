import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MasterLayout from '../theme/MasterLayout';
import Image1 from "./web/pic (1).png";
import Image2 from "./web/pic (2).png";
import Image3 from "./web/pic (3).png";
import Image4 from "./web/pic (4).png";
import Image5 from "./web/pic (5).png";
import Image6 from "./web/pic (6).png";
import Image7 from "./web/pic (7).png";
import Image8 from "./web/pic (8).png";
import ProductItem from './ProductItem';
import "./style.scss";
const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,     
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,       // Tự động chuyển ảnh
        autoplaySpeed: 2000   // Thời gian hiển thị mỗi ảnh (2 giây)
    };
    const products = [
        { name: 'Đường Đen Sữa Đá', price: '45.000 đ', src: "aaa1" },
        { name: 'The Coffee House Sữa Đá', price: '39.000 đ', src: "aaa2" },
        { name: 'Cà Phê Sữa Đá', price: '29.000 đ', src: "aaa3" },
        { name: 'Bánh Mì', price: '39.000 đ', src: "aaa4" },
        { name: 'Bạc Sỉu', price: '29.000 đ', src: "aaa5" },
        { name: 'Bạc Sỉu Nóng', price: '39.000 đ', src: "aaa6" },
        { name: 'Cà Phê Đen Đá', price: '29.000 đ', src: "aaa7" },
        { name: 'Cà Phê Đen Nóng', price: '39.000 đ', src: "aaa8" }
    ];
    
    return (
        <section className="blog_home">
            <div className="container">
                {/* Các phần trước slider  */}
                {/* ... */}
                <h2 className="blog_home_title">
                    {/* ... */}
                </h2>
                <h3 className="blog_home_blogtitle">
                    {/* ... */}
                </h3>
                <div className="blog_lists flex_wrap display_flex">
                    <Slider {...sliderSettings}>
                        <div className="blog_item flex_direction_column display_flex">
                            <img src={Image6} alt="pic (6)" />
                        </div>
                        <div className="blog_item flex_direction_column display_flex">
                            <img src={Image1} alt="pic (1)" />
                        </div>
                        <div className="blog_item flex_direction_column display_flex">
                            <img src={Image2} alt="pic (2)" />
                        </div>
                        <div className="blog_item flex_direction_column display_flex">
                            <img src={Image3} alt="pic (3)" />
                        </div>
                        <div className="blog_item flex_direction_column display_flex">
                            <img src={Image4} alt="pic (4)" />
                        </div>
                        <div className="blog_item flex_direction_column display_flex">
                            <img src={Image5} alt="pic (5)" />
                        </div>
                        <div className="blog_item flex_direction_column display_flex">
                            <img src={Image7} alt="pic (7)" />
                        </div>
                        <div className="blog_item flex_direction_column display_flex">
                            <img src={Image8} alt="pic (8)" />
                        </div>
                    </Slider>
                </div>
                {/* Các phần sau slider */}
                <div className="product-list">
                    {products.map((product, index) => (
                        <ProductItem key={index} name={product.name} price={product.price} src={product.src}/>
                    ))}
                </div>
                {/* ... */}
            </div>
        </section>
    );
};

export default memo(HomePage);
