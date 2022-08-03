import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

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

      product.quantity = parseInt(product.quantity) - 1;
      if (product.quantity < 0) {
          toast('Out of Stock !')
          return;
      }

 
else{
  fetch(`https://calm-plains-85467.herokuapp.com/product/${productId}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(product)
})
    .then(res => res.json())
    .then(result => {
        fetch(`https://calm-plains-85467.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    })

}
}
     
const handleQuantity=(event  =>{
  event.preventDefault();
        const productQuantity = event.target.quantity.value;

        product.quantity = parseInt(product.quantity) + parseInt(productQuantity);

        fetch(`https://calm-plains-85467.herokuapp.com/product/${productId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                fetch(`https://calm-plains-85467.herokuapp.com/product/${productId}`)
                    .then(res => res.json())
                    .then(data => setProduct(data))
            })
        event.target.reset();
})


   

    return (
      <div  className='flex mx-auto  justify-center items-center mt-5 mb-9'>
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


<form onSubmit={handleQuantity}>

 <input type="text" className='mb-2'  placeholder='Restock Quantity' />
                            <br />
                            <button  type="submit" value="Restock" />
                            <button className='btn btn-outline btn-primary '   >Restock</button>
    

</form>
</div>
        </div>
      </div> 
      <ToastContainer /> 
      </div>
    );
};

export default ProductDetails;