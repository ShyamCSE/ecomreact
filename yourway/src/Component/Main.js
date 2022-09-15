import React from 'react'
import StoreCategory from './StoreCategory';
import Stores from './Stores';

const Main = () => {
    return (
        <>
            <div className='container my-2 py-2'>
                <div className='row'>
                    <div className='col-6'><StoreCategory /></div>
                    <div className='col-6'><Stores /></div>
                </div>
            </div>
        </>
    )
}

export default Main;