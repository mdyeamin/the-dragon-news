import React from 'react';
import { PacmanLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <PacmanLoader />

        </div>
    );
};

export default loading;