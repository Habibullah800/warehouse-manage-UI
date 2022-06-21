import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../authentication/useFirebase';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase.init';


const Login = () => {

    const { register, handleSubmit } = useForm();
    const [email, setEmail] = useState()
    const [error, setError] = useState([]);
    const [varification, setVerification] = useState('')

    const auth = getAuth(app);
    const { user } = useFirebase()
    const { signInWithGoogle } = useFirebase();

    const navigate = useNavigate();
    const navigateRegister = event => {
        navigate('/register')
    }

    const onSubmit = data => {
        const email = data.email;
        setEmail(email);
        const password = data.password;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setVerification("Cheak your email !");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return (
        <>
            <div class=" bg-base my-2 lg:my-12">
                <div class="hero-content">
                    <div class="card flex-shrink-0 w-[330px] lg:w-full  max-w-sm shadow-2xl bg-[#EDF9EF]">
                        <div class="card-body">
                            <h1 className='text-lg font-bold text-[#32ff7e]'>Login here</h1>

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

                                {/*--------------------
                                 Password reset Area
                                 ------------------- */}
                                <div class="form-control">
                                    <label class="label">
                                        <h1 class="text-[#32ff7e] hover:text-black text-sm font-semibold mx-auto label-text-alt link link-hover my-2"> <h2 onClick={handlePasswordReset} variant="link">Forget Password ? click Here</h2></h1>
                                    </label>
                                </div>
                                {/* -------------------------------- */}
                                <div class="form-control mt-1">
                                    <input class="btn bg-lime-200 shadow-lg shadow-cyan-300/50" type="submit" value='Login' />
                                </div>
                            </form>
                            {/*--------------------
                                 Error Message Area
                                 ------------------- */}
                            <p className='font-normal text-lg text-[#ff3838]'><small> {error}</small>
                            </p>

                            <p>{varification}</p>

                            <p className='mt-2 text-sm font-semibold text-[#32ff7e]'> New to This warehouse manage Website ?
                            </p>
                            <Link to='/register' className='text-danger font-semibold pe-auto text-decoration-none hover:text-[#32ff7e] link link-hover' onClick={navigateRegister}>Click here to Register</Link>

                            <div class="divider">OR</div>

                            {
                                user?.uid
                                    ?
                                    <div>
                                        <Link className='btn bg-lime-200 shadow-lg shadow-cyan-300/50 font-semibold' to='/placeOrder'> Service</Link>
                                    </div>
                                    :
                                    <div>
                                        <button className='btn bg-lime-200 shadow-lg shadow-cyan-300/50 font-semibold' onClick={signInWithGoogle}> Log-in with Google</button>
                                        <br></br>
                                        <br></br>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;