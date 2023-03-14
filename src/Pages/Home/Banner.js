import React from 'react';
import bg1 from '../../Assests/images/bg1.png'
import './Banner.css'

const Banner = () => {
    return (
        <section id='background'
        
        className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-5  justify-center items-center bg-primary'>
            <div >

<img  src={bg1} alt="" />
            </div>
             <div >
                <h1 className='text-5xl text-white font-sans '>Essences<br></br> of Life</h1>
                <p id='banner' className='text-white text-xl mt-2 '>One of the most obvious benefits of wearing perfume is that <br></br> it neutralizes body odors and keeps us smelling fresh all day.<br></br> It also helps to boost our confidence. Knowing that we smell<br></br> good can be incredibly reassuring.</p>
            </div>
            
           
        </section>
    );
};

export default Banner;