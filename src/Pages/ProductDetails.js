import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {

  const valueRef = useRef(0);
   const{productId} = useParams();

    const[product,setProduct] = useState({});

    const { _id, catagory, name, supplier, price, quantity, img } = product;
 
    const updatedQuantity = parseInt(quantity) || 0;

    useEffect(() => {
      const url = `https://warehouse-management-server-side-gmaw.onrender.com/product/${productId}`;
        // console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));
    }, [productId,product]);

    

    const handleDelivered = () => {
const data = updatedQuantity - 1 ;
const url = `https://warehouse-management-server-side-gmaw.onrender.com/product/${productId}`;
fetch(url,{
  method: "PUT",
  headers:{
    "COntent-type": "application/json",
  },
  body: JSON.stringify({
    quantity:data,
  })
})
.then((response) => response.json())
      .then((data) => {
        setProduct(data);
        toast.success("Delivery Successfully!");
      });
  };
     
  const handleReStock = () => {
    const value = parseInt(valueRef.current.value) + updatedQuantity;
    const url = `https://warehouse-management-server-side-gmaw.onrender.com/product/${productId}`;
    if (value) {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          quantity: value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);

          toast.success("Restock Successfully!");
        });
    }
  };
     

   

    return (
      <div  className='flex mx-auto  justify-center items-center mt-5 mb-9 text-white'>

<div data-aos="fade-up" data-aos-duration="1500"  class="hero min-h-screen bg-primary ">
  <div class="hero-content flex-col lg:flex-row">
    <img src={product.img} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='text-white'>  
      <p>{product.description}</p>
          <p>Price: $ {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Supplier: {product.supplier}</p>
      <button  
      disabled={updatedQuantity <= 0 && true}
      onClick={handleDelivered} class="btn btn-secondary mt-3">Delivered</button>
      <div data-aos="zoom-in-up" data-aos-duration="1500">
<input
            required
            type="number"
            ref={valueRef}
            name="number"
            id=""
            className="w-25 mx-auto me-2 rounded-3 border-0 p-1 text-black mt-3"
          />
<br></br>
          <button
            onClick={handleReStock}
            className="btn btn-secondary my-2 me-2 "
          >
            Restock
          </button>
</div>
    </div>
  </div>
 
</div>


      <ToastContainer /> 
      </div>
    );
};

export default ProductDetails;