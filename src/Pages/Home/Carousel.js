import React from 'react';
import './Carousel.css'

const Carousel = () => {
    return (
        <div class="justify-center justify-items-center   " >
 <h2 id='title'  className='text-5xl text-secondary'> For Man & Women.....</h2>
  <div className='justify-center justify-items-center carousel rounded-box'>
  <div class="card w-96 shadow-xl mb-5">
  <div class="card-body">
   
  </div>
<img 
   src="https://us.123rf.com/450wm/belchonock/belchonock1804/belchonock180435342/99215081-handsome-man-with-bottle-of-perfume-on-dark-background-closeup.jpg?ver=6" alt="Shoes" />
</div>
        
    <div class="card w-96 shadow-xl  mt-8 mb-8">
  <div class="card-body">
   
  </div>
<img src="https://t3.ftcdn.net/jpg/04/17/62/34/360_F_417623472_n6ZpDDeXszgr1H3VzsuT5PtAzyXRUSY8.jpg" alt="Shoes" />
</div>
  </div>
        
  <div className='typed-out'> 
    <h1 className='text-xl text-secondary'>Discovering a perfume is an always surprising adventure. <br></br>But choosing one is a strong commitment as a fragrance says a lot about your personality,<br></br> your mood and your current desires.<br></br> Intrigued, you frequently ask us if our perfumes are for man or woman. <br></br>But why should a fragrance have a gender?<br></br> What leads your nose and your brain to make a difference between a perfume for men and women?<br></br> Discover that this distinction is actually a very recent trend…</h1>
    </div>
        
        
        
      </div>
    );
};

export default Carousel;