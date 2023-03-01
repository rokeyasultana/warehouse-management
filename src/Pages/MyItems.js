
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import auth from '../firebase.init';
import useProduct from '../hooks/useProduct';
import './MyItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'

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
            const url =`https://warehouse-management-server-side-gmaw.onrender.com/product/${id}`;
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
        <div className='text-secondary'>


        <div class=" mt-5 mb-96 ">
        <div class="justify-center justify-items-center text-secondary bg-primary shadow-xl mb-64 ">
          <div class=" overflow-x-auto 
          ">
          
        
            <Table>
              <Thead>
              <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Update products</th>
        
                    </tr>
              </Thead>
              <Tbody>
              {items.map(item => {
                        return (
                            <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.email}</td>
                                <td>{<button onClick={() => handleDelete(item._id)}> <FontAwesomeIcon icon={faTrashCan} /> </button>}</td>
                                <td >{<button  onClick={() => navigateToProductDetails(item._id)} className="btn btn-outline btn-secondary mt-1 mb-1" >Update</button>}</td>
        
                            </tr>
                        )
                    })}
              </Tbody>
            </Table>
        
          
          </div>
        </div>
         
         
        </div>
        
                    
                </div>

    );
};

export default MyItems;