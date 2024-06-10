import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const AllDonationRequest = () => {
    const axiosPublic = useAxiosPublic()
    const [requests, setRequests] = useState([])

    useEffect(() => {
        axiosPublic.get('/request')
            .then(res => {
                console.log(res.data)
                setRequests(res.data)
            })
    }, [])

    return (
        <div className="bg-gray-900 p-4 rounded-lg">
            <div>
                <h1 className='text-3xl text-center font-bold  pt-32 pb-10 text-sky-200 underline'>All Request Page</h1>
            </div>
            <div className="overflow-x-auto ">
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

export default AllDonationRequest;