import React from 'react';
import './Fragrances.css';

const Fragrances = () => {
    return (
        <div  >
        <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center justify-items-center mt-28 '>
  <div>
    <img className='mx-auto' src="https://cdn.pixabay.com/photo/2017/03/14/11/39/perfume-2142817__340.jpg" alt="" />
  </div>
  <div>
    <h2 className='text-gray-500 text-5xl mt-20 '>PERFECT PERFUME</h2>
    <p className='text-white  mt-5'>Popularized through customer relationships with some of the <br></br> world’s most recognizable faces.</p>
    <p className='text-white mt-5 text-xl text-left'>Merluccid hake redlip blenny discus snake mudhead large-eye bream scissor-tail <br></br> rasbora opaleye char dogfish beachsalmon, sand tilefish. Spiny eel skipping goby fierasfer tarwhine Blind goby tidewater goby rocket danio armorhead catfish streamer.</p>
  </div>
  </div>

</div>
        
    );
};

export default Fragrances;