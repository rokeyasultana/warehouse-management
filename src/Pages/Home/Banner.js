import React from 'react';
import bg1 from '../../Assests/images/bg1.png'

const Banner = () => {
    return (
        <section 
        style={{
            background:`url(https://images.unsplash.com/photo-1470690096659-6f59b9b39fd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80)`
        }}
        className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mb-5  justify-center items-center bg-primary'>
            <div >

<img className=''  src={bg1} alt="" />
            </div>
             <div >
                <h1 className='text-5xl text-secondary font-sans hover:font-serif italic'>Essences<br></br> of Life</h1>
                <p className='text-secondary text-xl mt-2 '>One of the most obvious benefits of wearing perfume is that it neutralizes body odors and keeps us smelling fresh all day. It also helps to boost our confidence. Knowing that we smell good can be incredibly reassuring.</p>
            </div>
            
           
        </section>
    );
};

export default Banner;