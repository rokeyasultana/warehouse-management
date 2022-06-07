import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Brand = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      }
      return(
        <div className='bg-primary  px-12 '>
          <h2 className='text-7xl text-secondary mb-5 mt-5 font-serif font-light'>Brands</h2>
          <Slider {...settings}>
            <div>
              <img style={{width:'300px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000291_diesel.webp" alt="" />
            </div>
            <div>
             <img style={{width:'300px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000295_gucci.webp" alt="" />
            </div>
            <div>
              <img style={{width:'300px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000372_montblanc.webp" alt="" />
            </div>
            <div>
          <img style={{width:'300px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000298_jimmy-choo.webp" alt="" />
            </div>
            <div>
             <img style={{width:'300px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000280_azzaro.webp" alt="" />
            </div>
            <div>
            <img style={{width:'300px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000302_versace.webp" alt="" />
            </div>
            <div>
            <img style={{width:'300px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000286_calvin-klein.webp" alt="" />
            </div>
            <div>
            <img style={{width:'300px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0001199_burberry.webp" alt="" />
            </div>
          </Slider>
        </div>
      );
    }
 

export default Brand;

