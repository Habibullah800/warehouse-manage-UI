import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import useFirebase from '../../authentication/useFirebase';
import Footer from '../Footer';
import Inventory from './Inventory';

const ManageInventory = () => {
    const [inventories, setInventory] = useState([]);

    // const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'Delete'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remaining = inventories.filter(product => product._id !== id)
                    setInventory(remaining);
                    toast.error("Successfully Deleted Item!");
                })
        }
    }


    useEffect(() => {
        fetch('http://localhost:5000/product')
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
                        handleDelete={handleDelete}
                    ></Inventory>)
                }


            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageInventory;