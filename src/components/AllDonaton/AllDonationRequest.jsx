import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Aos from "aos";



const AllDonationRequest = () => {
    const axiosPublic = useAxiosPublic()
    const [requests, setRequests] = useState([])

    useEffect(() => {
        axiosPublic.get('/request')
            .then(res => {
                // console.log(res.data)
                setRequests(res.data)
            })
     document.title  = "Home | All Request"
    }, []) 
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div className=""> 
            <div className='lg:flex rounded-lg lg:h-96 mb-10 bg-slate-600'>
                <div className='lg:w-1/2 mt-10 gap-4 p-10 lg:flex '>
                    <div>
                        <img className='rounded-full shadow-lg shadow-black w-40' src="https://i.ibb.co/72r555M/39.jpg" alt="" />
                    </div>
                    <div  className='mt-8 '>
                        <h1  data-aos="fade-left"  data-aos-duration="1500"  className='text-2xl font-bold text-teal-500 mb-2 shadow-md shadow-teal-400'>All Blood Request</h1>
                        <h1  data-aos="fade-right"  data-aos-duration="1500"  className='text-blue-300 underline'>A blood donation occurs when a person voluntarily has blood drawn and used for transfusions and/or made into</h1> 
                    </div>
                </div>
                <div className='lg:w-1/2 '>
                    <img className='rounded-lg h-96' src="https://i.ibb.co/4frsfVH/2148504543.jpg" alt="" />
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
                            <th  data-aos="fade-down"  data-aos-duration="1500" >Requester Name</th>
                            <th data-aos="fade-down"  data-aos-duration="1500" >Requester Email</th>
                            <th data-aos="fade-down"  data-aos-duration="1500" >Recipient Name</th>
                            <th data-aos="fade-down"  data-aos-duration="1500" >Recipient Location</th>
                            <th data-aos="fade-down"  data-aos-duration="1500" >Date</th>
                            <th data-aos="fade-down"  data-aos-duration="1500" >Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-slate-300'>
                        {/* row 1 */}
                        {
                            requests.map(request => <tr key={request._id} data-aos="fade-left"  data-aos-duration="1000" >
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