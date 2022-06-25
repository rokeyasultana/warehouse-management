import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  
    const{_id,name,img,price,supplier,quantity,description} = product;

    const navigate = useNavigate();

    const navigateToProductDetails = id => {

navigate(`/product/${id}`);

    }

    return (
        <div className= ' mt-5  mb-5'>
        <div class=" card w-96 bg-secondary hover:bg-white hover:text-black  shadow-xl items-center">
  <figure><img src={img}alt="perfume" /></figure>
  <div class="card-body ">
    <h2 class="text-center">{name}</h2>
    <p class="text-center">{description}</p>
    <p class="text-center">Price: $ {price}</p>
    <p class="text-center">Quantity:{quantity}</p>
    <p class="text-center">Supplier: {supplier}</p>
    <div class="card-actions justify-end">
      <button 
      onClick={()=>navigateToProductDetails(_id)}
      
      class="btn btn-primary">Update</button>
    </div>
  </div>
</div>
   </div>
    );
};

export default Product;