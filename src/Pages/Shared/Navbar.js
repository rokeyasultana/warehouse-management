import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout =()=>{
        signOut(auth);
    }
  const menuItems = <>
      <li><Link to="/">Home</Link></li>
    
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/about">About</Link></li>
      { 
    user && <>
   <li><Link to="/manageItems"> Manage-Items </Link></li>
   <li><Link to="/addItems"> Add-Items </Link></li>
   <li> <Link to="/myItems"> My-Items </Link></li>
                                    
 </>
   }


      <li>{user ?  <button onClick={logout} class="btn btn-ghost">Sign out</button> :<Link to="/login">Login</Link>}</li>
      
  

  </>
  return (
      <div className="navbar bg-primary text-white">
          <div className="navbar-start">
              <div className="dropdown">
                  <label tabIndex="0" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                      {menuItems}
                  </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl font-sans hover:font-serif italic">Essences For Life</a>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal p-0">
                  {menuItems}
              </ul>
          </div>
      </div>
  );
};


export default Navbar;