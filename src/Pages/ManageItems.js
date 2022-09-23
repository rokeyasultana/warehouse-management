import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import { Table, Thead, Tbody } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const ManageItems = () => {

    const [products,setProducts] = useProduct();

    const navigate = useNavigate();
    const navigateToProductDetails = id => {

        navigate(`/product/${id}`);
        
            }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://warehouse-management-server-side-gmaw.onrender.com/product/${id}`;
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
        <div className='   text-black'>


<div class=" mt-5 mb-8">
<div class="justify-center justify-items-center text-secondary bg-primary shadow-xl">
  <div class=" overflow-x-auto 
  ">
  

    <Table>
      <Thead>
      <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
                <th>Update products</th>

            </tr>
      </Thead>
      <Tbody>
      {products.map(product => {
                return (
                    <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>{<button onClick={() => handleDelete(product._id)}>  <FontAwesomeIcon icon={faTrashCan} /></button>}</td>
                        <td >{<button  onClick={() => navigateToProductDetails(product._id)} className="btn btn-outline btn-secondary mt-1 mb-1" >Update</button>}</td>

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

export default ManageItems;