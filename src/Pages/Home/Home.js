import React, { useEffect } from 'react';
import Banner from './Banner';
import Brand from './Brand';
import Carousel from './Carousel';
import Products from './Product/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Policy from './Policy/Policy';
import Fragrances from './Fragrances/Fragrances';


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
       <Fragrances></Fragrances>
        <Policy></Policy>
    
        </div>
    );
};

export default Home;