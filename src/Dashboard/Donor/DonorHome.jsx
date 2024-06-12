import { Link } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { FaDeleteLeft } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import useRequest from '../../Hooks/useRequest';
import useAuth from '../../Hooks/useAuth';
import { FaAngleRight } from 'react-icons/fa';
import { useEffect } from 'react';

const DonorHome = () => {
    const {user} =useAuth()
    const [requests, , refetch] = useRequest()
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{
        document.title  = "Dashboard | Home"

    })

    const handleDeleteRequest = (id) => {
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
                axiosPublic.delete(`/requests/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className='lg:flex bg-slate-600 p-4 rounded-lg justify-between'>
                <div className='p-2 shadow-lg shadow-slate-800'>
                    <h1 className='text-stone-800 font-bold mb-1'>Donor Dashboard</h1>
                    <p className='flex gap-2 font-semibold'>Home <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='shadow-lg shadow-slate-800 text-2xl font-bold text-stone-800 uppercase p-4 text-center'>Welcome {user?.displayName ? user?.displayName : 'Back'}</h1>
                </div>
            </div> 
            <div className='bg-slate-700 p-4 flex justify-between'>
                <h1 className='text-2xl font-bold'>Donation Fun</h1>
                <Link to='/dashboard/payment'><button className='btn btn-outline border-0 border-b-4 btn-pr'>Pay</button></Link>
            </div>
            <div className='bg-gray-800 rounded-lg my-10'>
                <div className='flex justify-between my-10 pt-4 px-8'>
                    <h1 className='text-2xl text-red-400 underline'>Your Total Request: {requests.slice(0, 3).length}</h1>
                    <Link to='/dashboard/sentrequest'><button className='btn btn-outline border-b-2 btn-sm text-red-500'>Sent Request</button></Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-white'>
                                <th>#</th>
                                <th>Recipient Name</th>
                                <th>Recipient Location</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Details</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='text-red-300'>
                            {/* row 1 */}
                            {
                                requests.slice(0, 3).map((request, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold">{request.recipientName}</div>
                                                <div className="text-sm opacity-50"> </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{request.recipientAddress}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className='font-semibold'>Date:{request.donationDate}</div>
                                                <div className="text-sm ">Time:{request.donationTime}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost font-bold btn-xs">{request.status}</button>
                                    </th>
                                    <th>
                                        <Link to={`/dashboard/details/${request._id}`}><button className="btn btn-ghost font-bold btn-xs">Details</button></Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDeleteRequest(request._id)} className="btn btn-ghost font-bold btn-xs"><FaDeleteLeft className='text-2xl' /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DonorHome;