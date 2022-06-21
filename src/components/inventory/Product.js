import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../authentication/useFirebase';

const Product = ({ item }) => {
    const { name, price, description, img, quantity, supplier } = item;
    const { user, } = useFirebase()

    return (
        <div>
            <div class="card w-[340px] bg-base-100 shadow-xl mt-4 mx-auto">
                <figure><img className='pt-2 rounded-lg h-[270px] w-[290px]' src={img} alt="Dress" /></figure>
                <div class="card-body">
                    <h2 class="card-title mx-auto">
                        {name}
                        <div class="badge hover:bg-lime-200 flex items-center justify-center bg-[#EDF9EF] mb-2 h-4 font-semibold hover:text-black text-[#4cd137]">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline h-7 hover:bg-lime-200 flex items-center justify-center bg-[#EDF9EF] font-semibold hover:text-black text-[#4cd137]">Price:- ${price}</div>
                        <div class="badge badge-outline h-7 hover:bg-lime-200 flex items-center justify-center bg-[#EDF9EF] font-semibold hover:text-black text-[#4cd137]">Available Quantity:- {quantity}</div>
                        <div class="badge badge-outline h-7 hover:bg-lime-200 flex items-center justify-center bg-[#EDF9EF] font-semibold hover:text-black text-[#4cd137] mx-auto">Supplier Name:- {supplier}</div>
                    </div>



                    <Link class="hover:bg-[#EDF9EF] flex items-center justify-center rounded-b-xl bg-lime-200 mt-2 h-9 font-bold hover:text-black text-[#4cd137]" to="/manageinventory" >Update</Link>


                </div>
            </div>
        </div>
    );
};

export default Product;