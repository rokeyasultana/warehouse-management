import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const navigate =useNavigate();

  let errorMessage;

  if(user || gUser){
    console.log(gUser);
  };

  if(loading||gLoading||updating){
return <Loading></Loading>
  };

  if(error||gError||updateError){
 errorMessage =<p>{error?.message || gError?.message || updateError?.message}</p>
  };
  
  const onSubmit = async data => {
    console.log(data);
  await  createUserWithEmailAndPassword(data.email, data.password);
await updateProfile({displayName:data.name});
console.log('update user');
navigate('/')


  };
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className='flex h-screen justify-center items-center'>
        <div class="card w-96 border-2 border-secondary text-white shadow-xl">
<div class="card-body text-white">

<h2 class="text-center font-bold text-3xl">Sign up</h2>

<form onSubmit={handleSubmit(onSubmit)}>

<div class="form-control w-full max-w-xs">
<label class="label">
<span class="label-text ">Name</span>

</label>

<input
type="text" 
placeholder="Your name"
class="input input-bordered w-full max-w-xs"
{...register("name",  {
  required:{
value:true,
message:'Name is required'
  } 
  })
  }
/>

<label class="label">
{errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}



</label>
</div>
<div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
<div class="form-control w-full max-w-xs">
<label class="label">
<span class="label-text ">Password</span>

</label>

<input
type="password" 
placeholder="Your password"
class="input input-bordered w-full max-w-xs"
{...register("password",  {
  required:{
value:true,
message:'password is required'
  },
  minLength: {
    value: 6,
    message: 'Must be 6 character longer' // JS only: <p>error message</p> TS only support string
  } })}
/>

<label class="label">
{errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
{errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.pattern.message}</span>}


</label>
</div>

{errorMessage}
<button  type='submit' class="btn btn-outline btn-secondary w-full max-w-xs normal-case">Sign up</button>
</form>
<p>Already have an account ? <br></br>
  <Link className='text-secondary' to="/login">Please sign in</Link></p>


<div class="divider">OR</div>
<button onClick={() => signInWithGoogle()} class="btn btn-outline btn-secondary normal-case">Sign in with Google</button>
</div>
</div>
    </div>
    );
};

export default SignUp;