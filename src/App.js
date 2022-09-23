import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import ManageItems from './Pages/ManageItems';
import AddItems from './Pages/AddItems';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from './Pages/ProductDetails';
import Review from './Pages/Reviews/Review';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import MyItems from './Pages/MyItems';
import 'aos/dist/aos.css';
function App() {
  return (
    <div className='App'   data-aos-mirror='true'> 
      <Navbar></Navbar>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
  
   
   <Route path='/blogs' element={<Blogs/>}>Blogs</Route>
   <Route path='/about' element={<About/>}>About</Route>
   
   <Route path='/product/:productId' element={<RequireAuth>
    <ProductDetails/>
   </RequireAuth>}></Route>
   <Route path='/login' element={<Login/>}>Login</Route>
   <Route path='/manageItems' element={<RequireAuth>
  <ManageItems></ManageItems>
   </RequireAuth>}></Route>
   <Route path='/addItems' element={<RequireAuth>
    <AddItems></AddItems>
   </RequireAuth>}></Route>
   <Route path='/myitems' element={<RequireAuth>
    <MyItems></MyItems>
   </RequireAuth>}>Login</Route>

   <Route path='/signup' element={<SignUp></SignUp>}></Route>
   <Route path='*' element={<NotFound/>}></Route>
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
