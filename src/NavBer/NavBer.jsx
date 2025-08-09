import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
    const content = <>
    <li className='gap-10 hover:font-bold hover:text-[#23BE0A]'>  <NavLink to= '/'> Home</NavLink></li>
    <li className='gap-10 hover:font-bold hover:text-[#23BE0A]'> <NavLink to ='/library'>Listed Books</NavLink></li>
    <li className='gap-10 hover:font-bold hover:text-[#23BE0A]'><NavLink>Pages to Read</NavLink></li>
    
    </>
    return (
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {content}
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl font-bold ">Book Vibe</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {content}
    </ul>
  </div>
 <div className='navbar-end space-x-3'>
   <Link className='bg-[#59C6D2] hover:bg-[#23BE0A] text-white font-semibold px-6 py-2 rounded-8 shadow-md transition duration-300 ease-in-out'>Sign In</Link>
   <Link className='bg-[#59C6D2] hover:bg-[#23BE0A] text-white font-semibold px-6 py-2 rounded-8 shadow-md transition duration-300 ease-in-out'>Sign Up</Link>
  </div>
</div>
    );
};

export default Navber;