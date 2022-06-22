import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../authentication/useFirebase';



const Navbar = () => {
    const { user, handleSignOut } = useFirebase()
    const photo = user?.photoURL

    return (
        <div className='relative'>
            <div className=''>
                <div class="navbar  bg-[#EDF9EF] ">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-400 rounded-box w-52">

                                {/* Mobile Version */}



                                <Link class="hover:bg-lime-200 bg-[#EDF9EF] flex items-center justify-center rounded-t-xl mb-2 mt-2 h-10 font-semibold hover:text-black text-[#4cd137]" to="/">Home</Link>

                                <Link class="hover:bg-lime-200 flex items-center justify-center bg-[#EDF9EF] mb-2 h-10 font-semibold hover:text-black text-[#4cd137]" to="/blog">Blog</Link>



                                {
                                    user?.uid
                                        ?
                                        <div>


                                            <Link class="hover:bg-lime-200 flex items-center justify-center bg-[#EDF9EF] mb-2 h-10 font-semibold hover:text-black text-[#4cd137] " to="/additem">Add item</Link>

                                            <Link class="hover:bg-lime-200 flex items-center justify-center bg-[#EDF9EF] mb-2 h-10 font-semibold hover:text-black text-[#4cd137]" to="/manageinventory">Manage Inventory</Link>


                                            <Link class="hover:bg-lime-200 flex items-center justify-center bg-[#EDF9EF] mb-2 h-10 font-semibold hover:text-black text-[#4cd137]" to="/myitem">My item</Link>

                                            <Link className='hover:bg-lime-200 flex items-center justify-center bg-[#EDF9EF] mb-2 h-10 font-semibold hover:text-black text-[#4cd137]' to="/" onClick={handleSignOut} >Sign Out
                                            </Link>

                                        </div>
                                        :
                                        <Link class="hover:bg-lime-200 flex items-center justify-center rounded-b-xl bg-[#EDF9EF] mb-2 h-10 font-semibold hover:text-black text-[#4cd137]" to="/login" >Login</Link>
                                }

                                <label tabindex="0" class="btn btn-ghost btn-circle avatar mx-auto">
                                    <div class="w-10 rounded-full">
                                        <img src={photo} alt='profile' />
                                    </div>
                                </label>

                            </ul>
                        </div>
                        <h1 class="font-semibold pl-4 normal-case text-xl text-[#4cd137]">Kent Inventory</h1>
                    </div>
                    <div class="navbar-center hidden lg:flex ">
                        <ul class="menu menu-horizontal p-0 ">

                            {/* Large device Version */}

                            <Link class="hover:bg-lime-300 flex items-center justify-center hover:text-black text-[#4cd137] font-semibold rounded-b-xl bg-lime-200 shadow-lg shadow-cyan-300/50 ml-2 px-4 w-20 h-12 " to="/">Home</Link>





                            {
                                user?.uid
                                    ?
                                    <div className='flex'>
                                        <Link class="hover:bg-lime-300 flex items-center justify-center hover:text-black text-[#4cd137] font-semibold rounded-b-xl bg-lime-200 shadow-lg shadow-cyan-300/50 ml-2 px-4 w-[99px] h-12 " to="/additem">Add item</Link>

                                        <Link class="hover:bg-lime-300 flex items-center justify-center hover:text-black text-[#4cd137] font-semibold rounded-b-xl bg-lime-200 shadow-lg shadow-cyan-300/50 ml-2 px-4 w-[168px] h-12 " to="/manageinventory">Manage Inventory</Link>


                                        <Link class="hover:bg-lime-300 flex items-center justify-center hover:text-black text-[#4cd137] font-semibold rounded-b-xl bg-lime-200 shadow-lg shadow-cyan-300/50 ml-2 px-4 w-[93px] h-12 " to="/myitem">My item</Link>
                                    </div>

                                    :
                                    <div>

                                    </div>

                            }









                            <Link class="hover:bg-lime-300 flex items-center justify-center hover:text-black text-[#4cd137] font-semibold rounded-b-xl bg-lime-200 shadow-lg shadow-cyan-300/50 ml-2 px-4 w-20 h-12 " to="/blog">Blog</Link>


                        </ul>
                    </div>
                    <div class="navbar-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src={photo} alt='profile' />
                            </div>
                        </label>

                        {
                            user?.uid
                                ?
                                <div>
                                    <button className='hover:bg-lime-300 flex items-center justify-center hover:text-black text-[#4cd137] font-semibold rounded-b-xl bg-lime-200 shadow-lg shadow-cyan-300/50 ml-2 px-4 w-[88px] h-12 text-sm' onClick={handleSignOut}>Sign Out
                                    </button>
                                </div>
                                :
                                <Link class="hover:bg-lime-300 flex items-center justify-center hover:text-black text-[#4cd137] font-semibold rounded-b-xl bg-lime-200 shadow-lg shadow-cyan-300/50 ml-2 px-4 w-20 h-12 text-sm" to="/login">Login</Link>
                        }




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;