import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllDonorReq = () => {
    const axiosPublic = useAxiosPublic()
    const [requests, setRequests] = useState([])

    useEffect(() => {
        axiosPublic.get('/request')
            .then(res => {
                // console.log(res.data)
                setRequests(res.data)
            })
    }, [])

    return (
        <div className="bg-slate-800 p-4 rounded-lg">
            <div className='lg:flex bg-slate-600 p-4 mb-10 rounded-lg justify-between'>
                <div className='shadow-white shadow-lg p-4'>
                    <h1 className='text-stone-900 font-bold'>Volunteer / Dashboard</h1>
                    <p className='flex gap-2 font-semibold'>My Request <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='text-2xl shadow-white shadow-lg font-bold text-stone-800 uppercase p-4 text-center'>All Donor Request</h1>
                </div> 
            </div>
            <div className="overflow-x-auto bg-gray-900 p-2">
                <table className=" table text-xl">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th>Requester Name</th>
                            <th>Requester Email</th>
                            <th>Recipient Name</th>
                            <th>Recipient Location</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-300'>
                        {/* row 1 */}
                        {
                            requests.map(request => <tr>
                                <td className="font-semibold">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-semibold">{request.requesterName}</div>
                                            <div className="text-sm  ">Hospital: {request.hospital} </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm underline">{request.requesterEmail}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-semibold">{request.recipientName}</div>
                                            <div className="text-sm  ">Blood Group: {request.bloodGroup} </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="lg:flex items-center gap-3">
                                        <div>
                                            <div className="font-semibold">{request.recipientAddress}</div>
                                            <div className="text-sm my-1">District: {request.district} </div>
                                            <div className="text-sm  ">Upazila: {request.upazila} </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className='font-semibold'>Date:{request.donationDate}</div>
                                            <div className="text-sm ">Time:{request.donationTime}</div>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <button className="btn btn-ghost font-bold  ">{request.status}</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDonorReq;