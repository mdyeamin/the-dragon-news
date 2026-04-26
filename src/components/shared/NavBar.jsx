import Link from 'next/link';
import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import NavLink from '../NavLink';

const NavBar = () => {
    return (
        <div className="flex items-center justify-between px-8 py-4 container mx-auto">
      
      <div className="flex-1"></div>

      
      <ul className='flex items-center gap-6 text-gray-600 font-medium'>
        <li className='hover:text-black transition-colors'>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li className='hover:text-black transition-colors'>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li className='hover:text-black transition-colors'>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      
      <div className="flex-1 flex items-center justify-end gap-3">
        
        <HiOutlineUserCircle className="text-4xl text-black" />
        
        
        <button className="bg-[#404040] text-white px-8 py-2 font-semibold rounded-sm hover:bg-black transition-all">
          Login
        </button>
      </div>
    </div>
    );
};

export default NavBar;