import React from 'react';
import Banner from './Banner';
import Brand from './Brand';
import Carousel from './Carousel';

import Products from './Product/Products';

const Home = () => {
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