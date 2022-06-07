import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const{productId}= useParams()
    const[product,setProduct] = useState({});
    
    const{_id,name,img,price,supplier,quantity,description,size} = product;

    useEffect(() => {
      const url = `http://localhost:5000/product/${productId}`;
        console.log(url);

        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));
    },[])

    return (
      <div  className='flex h-screen justify-center items-center'>
          <div class="mt-5 mb-8 card w-96 bg-secondary shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <p>Price: $${price}</p>
          <p>Size: {size}</p>
          <p>QUantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Delivered</button>
          </div>
        </div>
      </div>  
      </div>
    );
};

export default ProductDetails;