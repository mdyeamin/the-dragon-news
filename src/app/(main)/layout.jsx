import BrakingNews from '@/components/shared/BrakingNews';
import Header from '@/components/shared/Header';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Header/>
            <BrakingNews/>
            <NavBar/>
            {children}
        </div>
    );
};

export default layout;