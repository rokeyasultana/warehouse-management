import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] =useState('')
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect( () =>{
      if (user || gUser) {
          navigate(from, { replace: true });
      }
  }, [user, gUser, from, navigate])

  if (loading || gLoading || sending) {
      return <Loading></Loading>
  }

  if(error || gError){
      signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
  }

  const onSubmit = data => {
      signInWithEmailAndPassword(data.email, data.password);
  }

  const resetPassword = async () => {

    if (email) {
        await sendPasswordResetEmail(email);
        toast('Sent email');
    }
    else{
        toast('please enter your email address');
    }
}

  return (
      <div data-aos="fade-up" data-aos-duration="1500" className='flex h-screen justify-center items-center'>
          <div className="card w-96 border-2 border-secondary text-white shadow-xl">
              <div className="card-body">
                  <h2 className="text-center text-2xl font-bold">Login</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>

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
                      <div className="form-control w-full max-w-xs">
                          <label className="label">
                              <span className="label-text ">Password</span>
                          </label>
                          <input
                              type="password"
                              placeholder="Password"
                              className="input input-bordered w-full max-w-xs"
                              {...register("password", {
                                  required: {
                                      value: true,
                                      message: 'Password is Required'
                                  },
                                  minLength: {
                                      value: 6,
                                      message: 'Must be 6 characters or longer'
                                  }
                              })}
                          />
                          <label className="label">
                              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                          </label>
                      </div>

                      {signInError}
                      <input class="btn btn-outline btn-secondary w-full max-w-xs normal-case"type="submit" value="Sign in" />
                  </form>
                  <p>New to here?<span> <Link className='text-white' to="/signup">Create New Account</Link></span></p>

                  <p>Forget Password?<span><button className='btn btn-link text-secondary pe-auto text-decoration-none normal-case'onClick={resetPassword}>Reset Password</button></span> </p>
                  <div className="divider">OR</div>
                  <button
                      onClick={() => signInWithGoogle()}
                      class="btn btn-outline btn-secondary w-full max-w-xs normal-case"
                  >Continue with Google</button>
              </div>
          </div>
          <ToastContainer />
      </div >
  );
};

export default Login;
