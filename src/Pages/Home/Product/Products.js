import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
const[products,setProducts]=useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/product')
    .then(res=>res.json())
    .then(data => setProducts(data));
},[]);

    return (
        <div >
          <h2 className='justify-center justify-items-center text-6xl bg-primary text-secondary text-center  font-sans hover:font-serif italic mt-7'>Products</h2>
            <div className='justify-center justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-primary mt-5  gap-4 '>
                {
                   products.map(product =><Product
                   key={product._id}
                   product={product}

                   ></Product>).slice(0,6)
                }
            </div>
        </div>
    );
};

export default Products;