import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div class="navbar  bg-[#EDF9EF]">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>

                            <li><a>Item 2</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a class="font-semibold pl-4 normal-case text-xl text-[#4cd137]">Kent Inventory</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li className='rounded-b-xl bg-lime-200 shadow-lg shadow-cyan-300/50 ml-2 px-4'><a>Item 1</a></li>

                        <li className='rounded-b-xl bg-lime-200 shadow-lg shadow-cyan-300/50 ml-2 px-4'><a>Item 2</a></li>
                        <li className='rounded-b-xl bg-lime-200 shadow-lg shadow-cyan-300/50 ml-2 px-4'><a>Item 3</a></li>
                    </ul>
                </div>


                <div class="navbar-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt='profile' />
                        </div>
                    </label>
                    <a class="btn bg-lime-200 shadow-lg shadow-cyan-300/50">Log in</a>

                </div>




            </div>
        </div>
    );
};

export default Navbar;