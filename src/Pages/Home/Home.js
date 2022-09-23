import React, { useEffect } from 'react';
import Banner from './Banner';
import Brand from './Brand';
import Carousel from './Carousel';
import Products from './Product/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init();
      }, [])




    return (
        <div >
          <Banner></Banner>
         <Carousel></Carousel>
         <Products></Products>
         <Brand></Brand>
       
        </div>
    );
};

export default Home;