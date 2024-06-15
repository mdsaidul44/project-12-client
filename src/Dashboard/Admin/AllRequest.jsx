import useAllRequest from "../../Hooks/useAllRequest";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaAngleRight } from "react-icons/fa";
import { useEffect } from "react";
import Aos from "aos";


const AllRequest = () => {
    const axiosSecure = useAxiosSecure()
    const [requests, , refetch] = useAllRequest()
    useEffect(() => {
        document.title = "Dashboard | All request"

    })

    // Request Pending Toggle
    const handlePendingRequest = async (data) => {
        console.log('data paici', data)

        const request = {
            status: 'pending'
        }
        console.log(request)
        await axiosSecure.patch(`/request/${data._id}`, request)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    // show success popup 
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Request Pending ',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // Request Inprogress Toggle
    const handleInprogressRequest = async (data) => {
        console.log('data paici', data)

        const request = {
            status: 'Inprogress'
        }
        console.log(request)
        await axiosSecure.patch(`/request/${data._id}`, request)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    // show success popup 
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Request Inprogress',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // Request Done Toggle
    const handleDoneRequest = async (data) => {
        console.log('data paici', data)

        const request = {
            status: 'Done'
        }
        console.log(request)
        await axiosSecure.patch(`/request/${data._id}`, request)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    // show success popup 
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Request Done',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleCancelRequest = (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/requests/${data._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Request has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    useEffect(() => {
        Aos.init()
    })

    return (
        <div className="bg-gray-900 p-4 rounded-lg">
            <div className='lg:flex justify-between mb-10 bg-slate-800 p-4 rounded-lg'>
                <div className="shadow-lg shadow-black p-2">
                    <h1 className='text-stone-400 font-bold'>Dashboard</h1>
                    <p className='flex gap-2 font-semibold'>All Requests <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold shadow-lg shadow-black text-stone-400 uppercase p-4 text-center'> All Donor Requests</h1>
                </div>
            </div> 
            <div className="overflow-x-auto bg-slate-800 p-2">
                <table className="table text-xl">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th>Requester Name</th>
                            <th>Requester Email</th>
                            <th>Recipient Name</th>
                            <th>Recipient Location</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-300'>
                        {/* row 1 */}
                        {
                            requests.map(request => <tr key={request._id}>
                                <td className="font-semibold">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-semibold">{request?.requesterName}</div>
                                            <div className="text-sm  ">Hospital: {request.hospital} </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm underline">{request?.requesterEmail}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-semibold">{request?.recipientName}</div>
                                            <div className="text-sm  ">Blood Group: {request.bloodGroup} </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
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
                                            <div className='font-semibold'>Date:{request?.donationDate}</div>
                                            <div className="text-sm ">Time:{request?.donationTime}</div>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <button className="btn btn-ghost font-bold">{request.status}</button>
                                </th>
                                <th>
                                    <div className="dropdown dropdown-bottom">
                                        <div tabIndex={0} role="button" className="btn btn-sm btn-outline border-0 border-b-2 m-1">Manage</div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu  gap-2 shadow bg-base-100 rounded-box w-32">
                                            {
                                                request.status === 'pending' ? "" : <button onClick={() => handlePendingRequest(request)} className="btn btn-sm btn-outline border-0 border-b-2"><li><a>Pending</a></li></button>
                                            }
                                            {
                                                request.status === 'Inprogress' ? "" : <button onClick={() => handleInprogressRequest(request)} className="btn btn-sm btn-outline border-0 border-b-2"><li><a>Inprogress</a></li></button>
                                            }
                                            {
                                                request.status === 'Done' ? "" : <button onClick={() => handleDoneRequest(request)} className="btn btn-sm btn-outline border-0 border-b-2"><li><a>Done</a></li></button>
                                            }
                                            <button onClick={() => handleCancelRequest(request)} className="btn btn-sm btn-outline border-0 border-b-2"><li><a>Cancel</a></li></button>
                                        </ul>
                                    </div>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllRequest;