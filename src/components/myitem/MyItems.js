import React, { useState, useEffect } from 'react';
import useFirebase from '../../authentication/useFirebase';
import { toast } from 'react-toastify';
import Footer from '../Footer';
import MyItem from './MyItem';


const MyItems = () => {
    const { user } = useFirebase()
    const email = user?.email;

    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/item/${email}`)
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, [email, myItems])


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
                    const remaining = myItems.filter(product => product._id !== id)
                    setMyItems(remaining);
                    toast.error("Successfully Deleted Item!");
                })
        }
    }



    return (
        <div>
            <h2> This is my item area</h2>
            <h2> This is my item area</h2>
            {myItems.length}



            <div className='grid grid-cols-1 mt-8 lg:grid-cols-3 gap-4 w-100 mx-auto'>
                {
                    myItems.map(item => <MyItem
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                    ></MyItem>)
                }
            </div>

            <Footer></Footer>


        </div>
    );
};

export default MyItems;