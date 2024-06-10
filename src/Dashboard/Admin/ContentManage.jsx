import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const ContentManage = () => {
    return (
        <div>
            <div className='lg:flex rounded-lg mb-4 p-4 bg-slate-500 justify-between'>
                <div>
                    <h1 className='text-stone-900 font-bold'>Dashboard</h1>
                    <p className='flex gap-2 text-stone-800 font-semibold'>Content-Management <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-stone-800 uppercase p-4 text-center'> Content-Management</h1>
                </div>
            </div>
        </div>
    );
};

export default ContentManage;