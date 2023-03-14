import React from 'react';

const Policy = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-center justify-items-center text-white gap-5 mt-28 '>
           <div className='flex gap-3  '>
           <div>
            <img style={{height: '90px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000521_authentic_70.png" alt="" />
            </div> 
            <div className='mt-2 text-2xl'>
                <p>100% <br></br>AUTHENTIC</p>
            </div>
           </div>
           {/* 2 */}
           <div className='flex gap-3 '>
           <div>
            <img style={{height: '90px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000522_official-distributor_70.png" alt="" />
            </div> 
            <div className='mt-2 text-2xl'>
                <p >OFFICIAL <br></br> DISTRIBUTOR</p>
            </div>
           </div>
           {/* 3 */}
           {/* <div className='flex gap-3 '>
           <div>
            <img style={{height: '90px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000523_return-policy_70.png" alt="" />
            </div> 
            <div>
                <p className='mt-2 text-2xl'>RETURN <br></br> POLICY</p>
            </div>
           </div> */}
           {/* 4 */}
           <div className='flex gap-3 '>
           <div>
            <img style={{height: '90px'}} src="https://du0l56ab6b371.cloudfront.net/images/thumbs/0000524_on-time-delivery_70.png" alt="" />
            </div> 
            <div>
                <p className='mt-2 text-2xl'>SUPER FAST<br></br> DELIVERY</p>
            </div>
           </div>


        </div>
    );
};

export default Policy;