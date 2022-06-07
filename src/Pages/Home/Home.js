import React from 'react';
import Banner from './Banner';
import Brand from './Brand';


import Products from './Product/Products';

const Home = () => {
    return (
        <div >
          <Banner></Banner>
         <Products></Products>
         <Brand></Brand>
       
        </div>
    );
};

export default Home;