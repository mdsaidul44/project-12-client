import { FaLocationDot } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useEffect } from "react";

const AllDonatinRequestDetails = () => {
    const {user}= useAuth()
    const details = useLoaderData()
    const axiosPublic = useAxiosPublic()
    // console.log(details)
    useEffect(()=>{ 
        document.title  = "Dashboard | AddBlog"

    })

    const handleDonateRequest = async (data) => {
        console.log('data paici', data)
 
        const request = {
            status: 'Inprogress'
        }
        console.log(request)
        await axiosPublic.patch(`/request/${data._id}`, request)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    // show success popup 
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Donate Done.. Inprogress',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/dWpyV8N/2148483283.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-red-400">Blood Donor</h1>
                        <p className="mb-5">Blood donations are divided into groups based on who will receive the collected blood. 'homologous' donation is when a donor gives blood for storage at a blood bank for transfusion to an unknown recipient.</p>
                        <Link to='/dashboard/sentrequest'><button className="btn btn-primary">Sent Request</button></Link>
                    </div>
                </div>
            </div>
            <div className="text-3xl font-bold text-center mt-10 text-teal-400">
                <h1>Blood Request Details</h1>
            </div>
            <div className="lg:flex  justify-around p-8 mt-10 bg-slate-900 rounded-lg">
                <div>
                    <div className="text-2xl font-bold text-teal-400  mb-14">
                        Requester Information
                    </div>
                    <h1 className="text-xl font-semibold text-teal-500" >Name: {details.requesterName}</h1>
                    <h1 className="underline text-teal-500">Email: {details.requesterEmail}</h1>
                </div>
                <div>
                    <div className="text-2xl text-teal-400 font-bold mb-4">
                        Recipient Information
                    </div>
                    <h1 className="text-xl font-semibold text-teal-500">Name: {details.recipientName}</h1>
                    <h1 className="text-teal-500"><span className="text-xl">Note: </span>{details.requestMessage}</h1>
                    <h1 className="text-red-500">Blood Group : {details.bloodGroup}</h1>
                    <h1 className=" text-teal-500 ">Date: {details.donationDate}</h1>
                </div>
                <div>
                    <div className="text-2xl text-teal-400  font-bold flex mb-4">
                        <FaLocationDot className="mt-2 mr-2" /> Location
                    </div>
                    <h1 className="text-xl font-semibold text-teal-500">Hospital: {details.hospital}</h1>
                    <h1 className="text-teal-500"><span className="text-xl">District: </span>{details.district}</h1>
                    <h1 className="text-teal-500">Upazila: {details.upazila}</h1>
                    <h1 className=" text-teal-500 ">Time: {details.donationTime}</h1>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-outline border-0 border-b-2 font-bold text-teal-400 hover:bg-teal-400" onClick={() => document.getElementById('my_modal_2').showModal()}>Donate</button>
                    <dialog id="my_modal_2" className="modal">
                        <div  className="modal-box">
                            <p className="text-sm mb-2">Name </p>
                            <input placeholder="Name.." name="name" defaultValue={user.displayName} className="p-2 w-full rounded-lg" type="text" />
                            <br />
                            <p className="text-sm mt-4 mb-2">Email</p>
                            <input placeholder="Your Email.." name="email" defaultValue={user.email} className="p-2 w-full rounded-lg " type="email" />
                            <button onClick={()=>handleDonateRequest(details)} className="btn  mt-4 ">Donate</button> 
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default AllDonatinRequestDetails;