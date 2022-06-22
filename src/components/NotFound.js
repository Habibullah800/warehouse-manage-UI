import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div class="card card-compact mx-auto w-96 bg-base-100 shadow-xl mt-10">
                <figure><img className='h-[80%]' src="https://i.ibb.co/Qn9xpRB/flat-construction-with-people-web-site-design-minimal-design-technology-concept-flat-194782-1240.webp" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="font-semibold text-base text-red-500 text-center">Error!</h2>
                    <p className='text-lg'>Page not found. Please select a valid path!</p>
                    <div class="card-actions ">
                        <Link class="hover:bg-[#EDF9EF] bg-lime-200 flex items-center justify-center rounded-xl mb-2 mt-2 h-10 w-full font-semibold hover:text-black text-[#4cd137]" to="/">Go Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;