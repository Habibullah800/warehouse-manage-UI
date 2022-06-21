import React, { useEffect, useState } from 'react';
import ManageInventory from './ManageInventory';
import Product from './Product';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])


    return (
        <div>
            <h2 className='font-semibold text-4xl text-[#4cd137] mt-12 '>Inventory Items</h2>


            <div className='grid grid-cols-1 mt-16 lg:grid-cols-3 gap-4 w-100'>
                {
                    items.slice(0, 6).map(item => <Product
                        key={item.id}
                        item={item}
                    ></Product>)
                }


            </div>




        </div>
    );
};

export default Products;

