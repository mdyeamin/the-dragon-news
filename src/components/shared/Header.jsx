import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col items-center my-10 space-y-2'>
            <Image src={logo} width={300} height={200} alt='the dragon news'/>
            <p>Journalism Without Fear or Favour</p>
            <p className='font-semibold'>{format(new Date()," EEEE  MMMM,yyyy-MM-dd")}</p>
        </div>
    );
};

export default Header;