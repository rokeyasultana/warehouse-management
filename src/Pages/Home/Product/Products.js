import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => { 
    
const[products,setProducts] = useState([]);

useEffect(()=>{
    fetch('https://warehouse-management-server-side-gmaw.onrender.com/product')
    .then(res=>res.json())
    .then(data => setProducts(data));
},[]);

    return (
        <div >
          <h2 className='justify-center justify-items-center text-6xl bg-primary text-secondary text-center  font-sans hover:font-serif italic mt-7'>Products</h2>
            <div  data-aos="zoom-in-up" data-aos-duration="1500" className='justify-center justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-primary mt-5  gap-4 '>
                {
                   products.map(product =><Product
                   key={product._id}
                   product={product}

                   ></Product>).slice(0,6)
                }
            </div>
            <div className='mx-auto d-block w-50 mt-5'>
                <Link to="/manageItems"><button className='btn btn-outline btn-secondary '>Manage products</button> </Link>
            </div>
        </div>
    );
};

export default Products;