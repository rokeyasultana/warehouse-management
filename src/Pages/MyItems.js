
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../firebase.init';
import useProduct from '../hooks/useProduct';
import './MyItems.css'


const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [products, setProducts] = useProduct();

    const navigate = useNavigate();

    const navigateToProductDetails = id => {
        navigate(`/product/${id}`);
    }

    useEffect(() => {

    const getMyAllItems = async () => {

        const email = user.email;
        const url = `https://calm-plains-85467.herokuapp.com/myItems?email=${email}`;
        const { data } = await axios.get(url);
        setItems(data);

    }

    getMyAllItems();


}, [products])
    
    const handleDelete =id =>{
        const proceed =window.confirm('Are you sure?')

        if(proceed){
            const url =`https://calm-plains-85467.herokuapp.com/product/${id}`;
            fetch(url,{
                method:'DELETE'

            })

            .then(res => res.json())
            .then(data=>{
                console.log(data);
                const remaining =items.filter(item => item._id !== id)
                setProducts(remaining)
            })
        }
    }
   
    
    return (
        <div className=' text-black'>
<div className='justify-center justify-items-center '>
<div class="mt-8 mb-8">
  <table id='table' class="table table-zebra">

    <thead>
    <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Email</th>
                <th>Action</th>
                <th>Update</th>


            </tr>
    </thead>
    <tbody>

     

    {items.map(item => {
                return (
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.email}</td>
                        <td>{<button onClick={() => handleDelete(item._id)}></button>}</td>
                        <td>{<button onClick={() => navigateToProductDetails(item._id)} className="btn btn-secondary text-white ">Update</button>}</td>

                    </tr>
                )
            })}
    </tbody>
  </table>
</div>
</div>

    </div>

    );
};

export default MyItems;