import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";



const EditRequest = () => {
    const donorRequest = useLoaderData()
    console.log(donorRequest) 
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()


    const onSubmit = async (data) => {
        console.log(data)
        const updateReq = { 
              requesterName: data.requesterName,
              requesterEmail: data.requesterEmail,
              recipientName: data.recipientName,
              recipientAddress: data.recipientAddress, 
              donationDate: data.donationDate,
              donationTime: data.donationTime,
              bloodGroup: data.bloodGroup,
              requestMessage: data.requestMessage,  
          }
        const res = await axiosPublic.patch(`/requests/${donorRequest._id}`,updateReq)
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            // show success popup
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: ` is Updated to the menu `,
                showConfirmButton: false,
                timer: 1500
              });
        }

    }
    return ( 
        <div>
            <div>
                <h1 className="text-3xl text-center mx-auto rounded-lg font-semibold text-white p-4 w-96 bg-gray-800 underline">Request Update Now</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-6">
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Requester Name</span>
                        </div>
                        <input {...register("requesterName", { required: true })} defaultValue={donorRequest.requesterName} type="text" placeholder="Requester Name"  className="input input-bordered w-full " required />
                    </label>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Requester Email</span>
                        </div>
                        <input {...register("requesterEmail", { required: true })} defaultValue={donorRequest.requesterEmail} type="email" placeholder="Requester Email" className="input input-bordered w-full " required />
                    </label>
                </div>
                <div className="flex gap-6">
                    {/* Recipient name field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipient name</span>
                        </div>
                        <input   {...register("recipientName", { required: true })} defaultValue={donorRequest.recipientName} type="text" placeholder="Recipient Name" className="input input-bordered w-full " />
                    </label>
                    {/* Recipient address field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipient Address</span>
                        </div>
                        <input defaultValue={donorRequest.recipientAddress}  {...register("recipientAddress", { required: true })} type="text" placeholder="Recipient Address" className="input input-bordered w-full " />
                    </label>
                </div>  
                <div className="flex my-6 gap-6">
                    {/* donation date field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Donation Date</span>
                        </div>
                        <input defaultValue={donorRequest.donationDate}  {...register("donationDate", { required: true })} type="date" className="input input-bordered w-full " />
                    </label>
                    {/* donation time field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Donation Time</span>
                        </div>
                        <input  defaultValue={donorRequest.donationTime}  {...register("donationTime", { required: true })} type="time" placeholder="Recipient Address" className="input input-bordered w-full " />
                    </label>
                    {/* blood group field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Select a Blood Group</span>
                        </div>
                        <select  {...register("bloodGroup", { required: true })}
                            className="select select-bordered w-full">
                            <option> </option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>
                    </label>
                </div>
                {/* description box */}
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Request Message</span>
                    </div>
                    <textarea defaultValue={donorRequest.requestMessage} {...register('requestMessage')} className="textarea textarea-bordered h-24" placeholder="Food Description"></textarea>
                </label>
                <input type="submit" className="w-full border-0 btn-secondary btn-outline border-b-4 btn mt-4 font-bold uppercase" value="Update" />
            </form>
        </div>
    );
};

export default EditRequest;