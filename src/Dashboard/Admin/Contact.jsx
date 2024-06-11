import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div className='flex justify-between bg-slate-800 p-4 mb-4 rounded-lg'>
                <div>
                    <h1 className='text-stone-400 font-bold'>Dashboard</h1>
                    <p className='flex gap-2 font-semibold'>Contact <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold  uppercase p-4 text-center'>  Our Information</h1>
                </div>
            </div>
            <div className='flex rounded-lg bg-slate-600'>
                <div className='w-1/2 mt-10 gap-4 p-10 flex '>
                    <div>
                        <img className='rounded-full w-40' src="https://i.ibb.co/72r555M/39.jpg" alt="" />
                    </div>
                    <div  className='mt-8'>
                        <h1 className='text-2xl font-semibold'>BLOOD WAVE CONTACT</h1>
                        <h1>bloodWave2546@gmail.com</h1>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img className='rounded-lg' src="https://i.ibb.co/fD284Mc/295.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;