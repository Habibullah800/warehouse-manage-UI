import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../authentication/useFirebase';
import Footer from '../Footer';
import Inventory from './Inventory';

const ManageInventory = () => {
    const [inventories, setInventory] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])


    return (
        <div>


            <Link class="hover:bg-[#EDF9EF] flex items-center justify-center rounded-b-xl bg-lime-200 mt-2 h-12 w-96 mx-auto mt-8 font-bold hover:text-black text-[#4cd137]" to="/additem" >Add New Item</Link>

            <div className='grid grid-cols-1 mt-8 lg:grid-cols-3 gap-4 w-100'>
                {
                    inventories.map(inventor => <Inventory
                        key={inventor.id}
                        inventor={inventor}
                    ></Inventory>)
                }


            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageInventory;