import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                class="hero drop-shadow-xl min-h-screen border-8 border-[#EDF9EF] rounded-b-xl style="
                style={{
                    backgroundImage: `url("")`
                }}
            >
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/xFsDXN7/Long-Dress-PNG-Clipart-Background.png" class="max-w-[100%] rounded-md  mr-0 lg:mr-16" alt='banner  h-12' />
                    <div className='p-12'>
                        <h1 class="text-2xl lg:text-5xl font-bold text-[#66D481]">Warehouse manage with Kent Inventory.</h1>
                        <p class="py-6 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn bg-lime-200 shadow-lg shadow-cyan-300/50">Get Started</button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Banner;