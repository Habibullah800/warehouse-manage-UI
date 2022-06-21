import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer';
import { toast } from 'react-toastify';
import userEvent from '@testing-library/user-event';
import useFirebase from '../../authentication/useFirebase';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useFirebase()


    const onSubmit = (data, e) => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success("Successfully Added Item!");
                e.target.reset();
            })

    };




    // const onSubmit = (data, e) => {
    //     const productName = data.name;
    //     const ProductQuantity = data.quantity;
    //     const ProductPrice = data.Price;
    //     const supplierName = data.supplier;
    //     const description = data.description;
    //     const image = data.img;
    //     console.log(data);
    //     e.target.reset()


    // };
    return (
        <div>
            <div class=" bg-base my-2 lg:my-12">
                <div class="hero-content">
                    <div class="card flex-shrink-0 w-full max-w-[700px] shadow-2xl bg-[#EDF9EF]">
                        <div class="card-body">

                            <h1 className='text-lg font-bold text-[#32ff7e]'>You can Add item here</h1>


                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className='flex items-center '>
                                    <div className='mr-4 w-[165px] lg:w-[300px]'>
                                        <div class="form-control">
                                            <label class="label mx-auto">
                                                <span class="label-text">Product name</span>
                                            </label>
                                            <input type="text" required {...register("name")} placeholder="Product Name" class="input input-bordered " />
                                        </div>

                                        <div class="form-control">
                                            <label class="label mx-auto">
                                                <span class="label-text">Quantity</span>
                                            </label>
                                            <input type="number" {...register("quantity")} placeholder="Product Quantity" class="input input-bordered" />
                                        </div>
                                        <div class="form-control">
                                            <label class="label mx-auto">
                                                <span class="label-text">Price</span>
                                            </label>
                                            <input type="number" {...register("price")} placeholder="Product Price" class="input input-bordered" />
                                        </div>

                                    </div>

                                    <div className='w-[300px]'>

                                        <div class="form-control">
                                            <label class="label mx-auto">
                                                <span class="label-text">Supplier</span>
                                            </label>
                                            <input type="text" {...register("supplier")} placeholder="Supplier Name" class="input input-bordered" />
                                        </div>
                                        <div class="form-control">
                                            <label class="label mx-auto">
                                                <span class="label-text">Description</span>
                                            </label>
                                            <input type="text" {...register("description")} placeholder="Short Description" class="input input-bordered" />
                                        </div>

                                        <div class="form-control">
                                            <label class="label mx-auto">
                                                <span class="label-text">Image</span>
                                            </label>
                                            <input type="text" {...register("img")} placeholder="Product Image link" class="input input-bordered" />
                                        </div>
                                    </div>

                                </div>


                                <div class="form-control">
                                    <label class="label mx-auto">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} placeholder={user.email} required class="input input-bordered w-[50%] mx-auto text-center" />
                                </div>






                                <div class="form-control mt-6">
                                    <input class="btn bg-lime-200 shadow-lg shadow-cyan-300/50" type="submit" value='Add Item' />
                                </div>






                            </form>
                        </div>
                    </div>
                </div>
            </div>














            <Footer></Footer>
        </div>
    );
};

export default AddItem;