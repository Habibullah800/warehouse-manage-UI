import React from 'react';
import { useForm } from "react-hook-form";
import Footer from './Footer';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div class=" bg-base my-2 lg:my-12">
                <div class="hero-content">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#EDF9EF]">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} placeholder="email" class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} placeholder="Your Password" class="input input-bordered" />
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>



                                <div class="form-control mt-6">
                                    <input class="btn bg-lime-200 shadow-lg shadow-cyan-300/50" type="submit" value='Login' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </>
    );
};

export default Login;