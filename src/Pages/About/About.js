import React from 'react';
import bg2 from '../../Assests/images/bg2.jpg'

const About = () => {
    return (
        <div class="mt-7 mb-7 hero min-h-screen"
        style={{background: `url(${bg2})`}} 
        >
        <div class="hero-overlay bg-opacity-60" >
        </div>
        <div class="hero-content text-center ">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold text-secondary">A GUIDE TO FRAGRANCE STRENGTHS & TYPES</h1>
            <p class="mb-5 text-white">There are different categories in perfumery for different perfume types. When shopping for perfume you have probably come across terms like Parfum, Eau de Parfum, Eau de Toilette, and Eau de Cologne. These terms actually refer to concentration which describes the amount of pure perfume oil within a fragrance. Generally, the higher the perfume concentration, the higher the longevity on the skin and also the higher the price point.</p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;

