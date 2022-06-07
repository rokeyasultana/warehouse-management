import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from './Pages/ProductDetails';
import Review from './Pages/Reviews/Review';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='App'> 
      <Navbar></Navbar>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/review' element={<Review/>}>Reviews</Route>
   
   <Route path='/blogs' element={<Blogs/>}>Blogs</Route>
   <Route path='/about' element={<About/>}>About</Route>
   
   


   <Route path='*' element={<NotFound/>}></Route>
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
