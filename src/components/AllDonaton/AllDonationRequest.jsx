import { useEffect } from "react";
import Aos from "aos";
import useAllRequest from "../../Hooks/useAllRequest";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";



const AllDonationRequest = () => { 
    const [requests] = useAllRequest()
    const requestPending = requests.filter(request=> request.status === 'pending')
    // console.log(requestPending)
    useEffect(() => { 
     document.title  = "Home | All Request"
     Aos.init()
    })  

    return (
        <div className=""> 
            <div className='lg:flex rounded-lg lg:h-96 mb-10 bg-slate-600'>
                <div className='lg:w-1/2 mt-20 gap-4 p-10 lg:flex '>
                    <div>
                        <img className='rounded-full shadow-lg shadow-black w-40' src="https://i.ibb.co/72r555M/39.jpg" alt="" />
                    </div>
                    <div  className='mt-8 '>
                        <h1  data-aos="fade-left"  data-aos-duration="1500"  className='text-2xl font-bold text-teal-500 mb-2 shadow-md shadow-teal-400'>All Blood Request</h1>
                        <h1  data-aos="fade-right"  data-aos-duration="1500"  className='text-blue-300 underline'>A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into</h1> 
                    </div>
                </div>
                <div className='lg:w-1/2 '>
                    <img className='rounded-lg lg:ml-52   h-96' src="https://i.ibb.co/4frsfVH/2148504543.jpg" alt="" />
                </div>
            </div> 
            <div>
            <h1  data-aos="fade-up"  data-aos-duration="1500"  className='text-2xl font-bold text-center  text-teal-500 mb-8 shadow-md shadow-teal-400'>All Donation Request</h1>
            </div>
            <div className="overflow-x-auto bg-gray-900 p-4 rounded-lg">
                <table className=" table text-xl">
                    {/* head */}
                    <thead>
                        <tr className='text-white'> 
                            {/* <th data-aos="fade-down"  data-aos-duration="1500" >Requester Email</th> */}
                            <th data-aos="fade-down"  data-aos-duration="1500" >Recipient Name</th>
                            <th data-aos="fade-down"  data-aos-duration="1500" >Recipient Location</th>
                            <th data-aos="fade-down"  data-aos-duration="1500" >Date & time</th>
                            <th data-aos="fade-down"  data-aos-duration="1500" >Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-300'>
                        {/* row 1 */}
                        {
                            requestPending.map(request => <tr key={request._id} data-aos="fade-left"  data-aos-duration="1000" >
                                {/* <td className="font-semibold">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div className="font-semibold">{request.requesterName}</div>
                                            <div className="text-sm  ">Hospital: {request.hospital} </div>
                                        </div>
                                    </div>
                                </td> */}
                                {/* <td className="text-sm underline">{request.requesterEmail}</td> */}
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
                                            <div className="underline flex"><FaLocationDot className="mt-1.5 mr-2"/>{request.recipientAddress}</div>
                                            {/* <div className="text-sm my-1">District: {request.district} </div>
                                            <div className="text-sm  ">Upazila: {request.upazila} </div> */}
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
                                    <Link to={`/donationDetails/${request._id}`}><button className="btn btn-ghost font-bold  ">Details</button></Link>
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