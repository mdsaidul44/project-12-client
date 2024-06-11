import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth"; 


const SentRequest = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const {user}= useAuth()  
    

    const onSubmit = async (data) => {
        // console.log(data)
        const requestInfo = {
            requesterName: data.RequesterName,
            requesterEmail: data.RequesterEmail,
            recipientName: data.recipientName,
            recipientAddress: data.recipientAddress,
            hospital: data.hospital,
            district: data.district,
            upazila: data.upazila,
            donationDate: data.donationDate,
            donationTime: data.donationTime,
            bloodGroup: data.bloodGroup,
            requestMessage: data.requestMessage,
            status: "pending"
        }

        axiosPublic.post('/request',requestInfo)
        .then(res=> {
            if(res.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Request sent successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
    }
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center mx-auto rounded-lg font-semibold text-white p-4 w-96 bg-gray-800">Do Request This form</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-6">
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Requester Name</span>
                        </div>
                        <input {...register("RequesterName", { required: true })} type="text" placeholder="Requester Name" defaultValue={user?.displayName } className="input input-bordered w-full " required />
                    </label>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Requester Email</span>
                        </div>
                        <input {...register("RequesterEmail", { required: true })} type="email" placeholder="Requester Email" defaultValue={  user?.email}  className="input input-bordered w-full " required />
                    </label>
                </div>
                <div className="flex gap-6">
                    {/* Recipient name field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipient name</span>
                        </div>
                        <input   {...register("recipientName", { required: true })} type="text" placeholder="Recipient Name" className="input input-bordered w-full " />
                    </label>
                    {/* Recipient address field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipient Address</span>
                        </div>
                        <input   {...register("recipientAddress", { required: true })} type="text" placeholder="Recipient Address" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* hospital section */}
                <div className="my-6">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Select a Hospital</span>
                        </div>
                        <select {...register("hospital", { required: true })}
                            className="select select-bordered w-full">
                            <option defaultValue={"default"} disabled value={"default"}>Select a Category</option>
                            <option>Dhaka Medical College Hospital</option>
                            <option>Chattogram Medical College Hospital</option>
                            <option>Rongpur Medical College Hospital</option>
                            <option>Pabna Medical College Hospital</option>
                            <option>Rajshahi Medical College Hospital</option>
                            <option>Dinajpur Medical College Hospital</option>
                            <option>Sylhet Medical College Hospital</option>
                        </select>
                    </label>
                </div>
                <div className="flex gap-6">
                    {/* category field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Select a District</span>
                        </div>
                        <select {...register("district", { required: true })}
                            className="select select-bordered w-full">
                            <option disabled selected></option>
                            <option>Chattogram</option>
                            <option>Feni</option>
                            <option>Brahmanbaria</option>
                            <option>Coxsbazar</option>
                            <option>Chandpur</option>
                            <option>Noakhali</option>
                            <option>Rangamati</option>
                            <option>Lakshmipur</option>
                            <option>Khagrachhari</option>
                            <option>Bandarban</option>
                            <option>Sirajganj</option>
                            <option>Pabna</option>
                            <option>Bogura</option>
                            <option>Natore</option>
                            <option>Rajshahi</option>
                            <option>Joypurhat</option>
                            <option>Chapainawabganj</option>
                            <option>Naogaon</option>
                            <option>Jashore</option>
                            <option>Satkhira</option>
                            <option>Meherpur</option>
                            <option>Chuadanga</option>
                            <option>Narail</option>
                            <option>Magura</option>
                            <option>Khulna</option>
                            <option>Bagerhat</option>
                            <option>Jhenaidah</option>
                            <option>Patuakhali</option>
                            <option>Sylhet</option>
                            <option>Narayanganj</option>
                            <option>Munshiganj</option>
                            <option>Dhaka</option>
                        </select>
                    </label>
                    {/* category field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Select a Upazila</span>
                        </div>
                        <select {...register("upazila", { required: true })}
                            className="select select-bordered w-full">
                            <option disabled selected></option>
                            <option disabled selected></option>
                            <option>Mirsharai</option>
                            <option>Sitakunda</option>
                            <option>Patiya</option>
                            <option>Sandwip</option>
                            <option>Banshkhali</option>
                            <option>Boalkhali</option>
                            <option>Anwara</option>
                            <option>Chandanaish</option>
                            <option>Satkania</option>
                            <option>Barura</option>
                            <option>Brahmanpara</option>
                            <option>Chandina</option>
                            <option>Chauddagram</option>
                            <option>Daudkandi</option>
                            <option>Homna</option>
                            <option>Comilla Sadar</option>
                            <option>Meghna</option>
                            <option>Feni Sadar</option>
                            <option>Parshuram</option>
                            <option>Kaptai</option>
                            <option>Kawkhali</option>
                            <option>Rajasthali</option>
                            <option>Hatia</option>
                            <option>Noakhali Sadar</option>
                            <option>Subarnachar</option>
                            <option>Ramganj</option>
                            <option>Brahmanpara</option>
                            <option>Lohagara</option>
                            <option>Hathazari</option>
                        </select>
                    </label>
                </div>
                <div className="flex my-6 gap-6">
                    {/* donation date field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Donation Date</span>
                        </div>
                        <input   {...register("donationDate", { required: true })} type="date" className="input input-bordered w-full " />
                    </label>
                    {/* donation time field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Donation Time</span>
                        </div>
                        <input   {...register("donationTime", { required: true })} type="time" placeholder="Recipient Address" className="input input-bordered w-full " />
                    </label>
                    {/* blood group field */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Select a Blood Group</span>
                        </div>
                        <select {...register("bloodGroup", { required: true })}
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
                    <textarea {...register('requestMessage')} className="textarea textarea-bordered h-24" placeholder="Food Description"></textarea>
                </label>
                <input type="submit" className="w-full btn-primary btn mt-4 font-bold uppercase" value="Request" />
            </form>
        </div>
    );
};

export default SentRequest;