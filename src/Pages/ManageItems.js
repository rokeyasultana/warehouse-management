import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../hooks/useProduct';

const ManageItems = () => {

    const [products,setProducts] = useProduct();

    const navigate =useNavigate();
    const navigateToProductDetails = id => {

        navigate(`/product/${id}`);
        
            }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://calm-plains-85467.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(products => products._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className=' w-50 mx-auto  text-black'>


<div class="justify-center justify-items-center overflow-x-auto mt-5 mb-8">
  <table class="justify-center justify-items-center table table-zebra ">

    <thead>
    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                    <th>Update products</th>

                </tr>
    </thead>
    <tbody>
 
    {products.map(product => {
                    return (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{<button onClick={() => handleDelete(product._id)}>  <FontAwesomeIcon icon={faTrashCan} /></button>}</td>
                            <td>{<button onClick={() => navigateToProductDetails(product._id)} className="btn btn-outline-dark ">Update</button>}</td>

                        </tr>
                    )
                })}
    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default ManageItems;