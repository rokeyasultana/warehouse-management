import React from 'react';

const NotFound = () => {
    return (
        <div>
           <div><h2 className='text-5xl text-center text-secondary mt-5'>Page Not Found</h2>
           <h3 className='text-5xl text-center text-secondary mt-5'>404</h3></div> 

<div  className='mt-7 mb-7'>
    <img style={{width:"500px"}} className='mx-auto rounded ' src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" />
</div>

        </div>
    );
};

export default NotFound;