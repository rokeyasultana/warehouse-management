import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const [userQuantity, setUserQuantity] = useState(null);

    const{productId} = useParams();
    
    const[product,setProduct] = useState({});
    
    

    useEffect(() => {
      const url = `https://calm-plains-85467.herokuapp.com/product/${productId}`;
        console.log(url);

        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));
    }, [product]);

    const quantity = parseInt(product.quantity);

    const handleDelivered = () => {

      console.log(quantity);

      if (quantity > 0) {

          const newQuantity = quantity - 1;
          const deliveredQuantity = {  newQuantity}

          const url =  `https://calm-plains-85467.herokuapp.com/product/${productId}`;

          fetch(url, {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(deliveredQuantity)
          })
              .then(res => res.json())
              .then(data => console.log(data))

      }
      else {
          alert('Out of Stock')
      }
  }

  const getInputValue = (event) => {
    const userValue = event.target.value;
    setUserQuantity(userValue)
    
}

const handleQuantity = (event) => {
  if (userQuantity && userQuantity > 0) {
      const newQuantity = parseInt(quantity) + parseInt(userQuantity);
      const setQuantity = { newQuantity }
      const url = `https://calm-plains-85467.herokuapp.com/product/${productId}`;

      fetch(url, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(setQuantity)
      })
          .then(res => res.json())
          .then(data => console.log(data))


  }
  else {
      alert('Please given a valid input')
  }
  event.target.reset();
}



   

    return (
      <div  className='flex  justify-center items-center mt-5 mb-9'>
          <div class="mt-5 mb-8 card w-96 bg-secondary shadow-xl">
        <figure class="px-10 pt-10">
          <img src={product.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: $ {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Supplier: {product.supplier}</p>
          <button id='item-btn' className="btn btn-outline-dark text-center " onClick={handleDelivered}>Delivered</button>

          <div className='mt-5'>
<form>

 <input type="text" className='mb-2' onChange = {getInputValue} placeholder='Restock Quantity' />
                            <br />
                            <button  type="button" value="Restock" />
                            <button className='btn btn-outline btn-primary '  onClick={handleQuantity} >Restock</button>
    

</form>
</div>
        </div>
      </div>  
      </div>
    );
};

export default ProductDetails;