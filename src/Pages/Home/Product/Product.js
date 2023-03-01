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
        <div  class="  card w-96 h-full text-white hover:bg-white hover:text-black  shadow-xl items-center border-2 border-secondary">
  <figure><img style={{width:'500px',height:'250px'}}  src={img}alt="perfume" /></figure>
  <div class="card-body ">
    <h2 class="text-center font-semibold">{name}</h2>
    {/* <p class="text-center">{description}</p> */}
  <div className='flex gap-5 '>
  <div>
    <p class="text-center">Price: ${price}</p>
    </div>
   <div>
   <p class="text-center">Quantity: {quantity}</p>
   </div>
  </div>
    <p class="text-center ">Supplier: {supplier}</p>
    <div class="w-full mx-auto">
      <button 
      onClick={()=>navigateToProductDetails(_id)}
      class="btn btn-outline btn-secondary normal-case">Update</button>
    </div>
  </div>
</div>
   </div>
    );
};

export default Product;