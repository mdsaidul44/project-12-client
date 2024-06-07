import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const DonorHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className='text-3xl bg-slate-300 text-red-500 p-4 rounded-lg font-semibold'>
                Welcome To The Donor Dashboard
            </div>
            <div className='bg-gray-800 '>
                <div className='flex justify-between px-8'>
                    <h1 className='text-2xl text-red-400'>Your Total Request:</h1>
                    <Link to='/dashboard/sentrequest'><button className='btn btn-outline border-b-2 btn-sm text-red-500'>Sent Request</button></Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-white'>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr> 
                        </tbody> 
                    </table>
                </div> 
            </div>
        </div>
    );
};

export default DonorHome;