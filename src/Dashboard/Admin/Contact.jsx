import React from 'react';
import { FaAngleRight, FaPhoenixFramework } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

const Contact = () => {
    return (
        <div>
            <div className='flex justify-between bg-slate-800 p-4 mb-4 rounded-lg'>
                <div className='shadow-lg shadow-black p-4'>
                    <h1 className='text-stone-400 font-bold'>Dashboard</h1>
                    <p className='flex gap-2 font-semibold'>Contact <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold shadow-lg shadow-black mt-2 uppercase p-4 text-center'>  Our Information</h1>
                </div>
            </div>
            <div className='flex rounded-lg bg-slate-600'>
                <div className='w-1/2 mt-10 gap-4 p-10 flex '>
                    <div>
                        <img className='rounded-full shadow-lg shadow-black w-40' src="https://i.ibb.co/72r555M/39.jpg" alt="" />
                    </div>
                    <div  className='mt-8 '>
                        <h1 className='text-2xl font-bold text-teal-500 mb-2 shadow-md shadow-teal-400'>BLOOD WAVE CONTACT</h1>
                        <h1 className='text-blue-300 underline'>bloodWave2546@gmail.com</h1>
                        <h1 className='flex mt-2 text-teal-200'><IoCall className='mt-1'/> +0125265224</h1>
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