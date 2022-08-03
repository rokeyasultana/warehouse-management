import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState (auth);


    const onSubmit = data => {
        // console.log(data);
        const url = `https://calm-plains-85467.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Perfume Added');
                reset()
            })
    };
    return (
        <div className=' ml-10 w-50  mt-5 mb-5 '>
        
        <div class="flex mx-auto  card w-96 bg-base-100 shadow-xl ">
  <div class="card-body">
  <h2 className='text-center text-secondary text-3xl mb-5'>Please add a Items</h2>

    <form className='flex-auto' onSubmit={handleSubmit(onSubmit)}>
           
           <input type="text" placeholder="Description"  value={user?.email} {...register("email")}  class="input input-bordered input-secondary w-full max-w-xs mb-2" />
           
           <input type="text" placeholder="Name" {...register("name", { required: true, maxLength: 50 })} class="input input-bordered input-secondary w-full max-w-xs mb-2" />
           <textarea type="text" class="textarea textarea-secondary  w-full max-w-xs mb-2" placeholder="Description" {...register("description")}/>
         
           <input type="number" placeholder="Price" class="input input-bordered input-secondary w-full max-w-xs mb-2"{...register("price")} />

           <input type="quantity" placeholder="Quantity" class="input input-bordered input-secondary w-full max-w-xs mb-2" {...register("quantity")}  />

           
           <input type="text" placeholder="Supplier" class="input input-bordered input-secondary w-full max-w-xs mb-2"{...register("price")} {...register("supplier")}  />

           <input type="text" placeholder="Photo url" class="input input-bordered input-secondary w-full max-w-xs mb-2" {...register("img")}  />

           
          
       </form>
    <div class="card-actions justify-end">
      <button type="submit" class="btn btn-secondary">Add Items</button>
    </div>
  </div>
</div>
        <ToastContainer />
    </div>
    );
};

export default AddItems;
