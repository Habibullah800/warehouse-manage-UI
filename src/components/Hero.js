import React from 'react';

const Hero = () => {
    return (
        <div className='my-12'>
            <div class="hero max-h-screen bg-[#EAF9EB]">
                <div class="hero-content flex-col lg:flex-row">
                    <div className='p-0 py-0 lg:py-6 lg:px-24'>
                        <h1 class="text-5xl text-[#4cd137] font-bold mb-6">Improve performance
                            & process time!</h1>
                        <h2 className='text-xl font-semibold'>Better organize your warehouse with the smart double entry inventory system.</h2>
                        <p class="py-6">Get the most efficient stocking method and improve all your internal operations. Odoo's double-entry inventory has no stock input, output or transformation. Instead, all operations are stock moves between locations.</p>
                    </div>
                    <img src="https://i.ibb.co/Gx43S4H/portrait-warehouse-manager-workers-warehouse-107420-13576.webp" alt='hero-section' class="max-w-sm rounded-lg shadow-2xl mr-0 lg:mr-12" />
                </div>
            </div>
        </div>
    );
};

export default Hero;