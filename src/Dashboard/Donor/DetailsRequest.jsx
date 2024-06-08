import { Link, useLoaderData } from "react-router-dom";



const DetailsRequest = () => {
    const request = useLoaderData()
    console.log(request)
    return (
        <div>
            <div>
                <div className="hero rounded-lg " style={{ backgroundImage: 'url(https://i.ibb.co/zRVcyW9/10336137-4434008.jpg)' }}>
                    <div className="hero-overlay bg-opacity-85"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md text-white">
                            <h1 className="mb-5 text-3xl font-bold text-red-400">  Request Details</h1>
                            <p className="mb-5">A "View Blood Donation Request" page is designed to display details about blood donation appeals made by individuals or organizations.</p>
                            <Link to={`/dashboard/editrequests/${request._id}`}><button className="btn btn-ghost font-bold btn-outline border-b-4">Edit</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="overflow-x-auto ">
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
                            </tr>
                        </thead>
                        <tbody className='text-slate-300'>
                            {/* row 1 */}
                            <tr>
                                <td className="font-semibold">
                                <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-semibold">{request.requesterName}</div>
                                            <div className="text-sm  ">Hospital: {request.hospital} </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold underline">{request.requesterEmail}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-semibold">{request.recipientName}</div>
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
                                            <div className='font-semibold'>Date:{request.donationDate}</div>
                                            <div className="text-sm ">Time:{request.donationTime}</div>
                                        </div>
                                    </div>
                                </td>
                                <th>
                                    <button className="btn btn-ghost font-bold  ">{request.status}</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DetailsRequest;