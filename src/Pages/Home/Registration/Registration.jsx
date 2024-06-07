import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";





const Registration = () => {
    const { createUser } = useAuth()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data)
        if (data.password !== data.confirmpassword) {
            message.error("The passwords doesn't match")
            return false;
        }
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)

                const userInfo = {
                    name: data.name,
                    email: data.email,
                    upazila: data.upazila,
                    district: data.district,
                    group: data.group,
                    file: data.file,
                } 

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            reset()
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "User create successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/')
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <div className="text-center my-10 text-gray-300">
                <h1 className="text-4xl font-semibold">Please Registration</h1>
            </div>
            <div className="lg:flex   bg-slate-400 rounded-lg gap-2 p-6 ">
                <div className="lg:w-1/2">
                    <img className="h-full rounded-lg" src="https://i.ibb.co/PYjnkyF/cute-cartoon-blood-drop-having-blood-transfusion-vector.jpg" alt="" />
                </div>
                <div className=" bg-slate-700 text-white rounded-lg lg:p-10 p-4 lg:w-1/2">
                    <div className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg '>
                        <div className='px-4 py-2'>
                            <svg className='w-6 h-6' viewBox='0 0 40 40'>
                                <path
                                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                    fill='#FFC107'
                                />
                                <path
                                    d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                    fill='#FF3D00'
                                />
                                <path
                                    d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                    fill='#4CAF50'
                                />
                                <path
                                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                    fill='#1976D2'
                                />
                            </svg>
                        </div>

                        <span className='lg:w-5/6 px-4 py-3 font-bold text-white text-center'>
                            Sign in with Google
                        </span>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='border-b w-1/4'></span>
                        <div className='text-xs text-center text-white uppercase  hover:underline'>
                            or login with email
                        </div>
                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="mb-2 font-semibold">Name</h1>
                        <input placeholder="Your Name" className="w-full p-2  bg-gray-600 rounded" type="text" {...register("name", { required: true })} /> <br />
                        {errors.name && <small className="text-red-500">Name field is required.</small>}
                        <p className="my-2 font-semibold">Your Email</p>
                        <input className="w-full p-2 bg-gray-600 rounded" placeholder="YourEmail" type="email" {...register("email", { required: true })} /> <br />
                        {errors.email && <small className="text-red-500">Email field is required.</small>}
                        <div className="lg:flex ">
                            <label className="form-control  my-2">
                                <h1 className="mb-2 font-semibold">Pick a file</h1>
                                <div>
                                    <div>
                                        <input type="file" {...register("file", { required: true })} className="file-input  bg-gray-600 w-full file-input-bordered w-3/3 " /> <br />
                                        {errors.file && <small className="text-red-500">Please Upload Image.</small>}
                                    </div>
                                </div>
                            </label>
                            <div className=" mt-10 lg:flex">
                                <h1 className="mt-2 font-semibold ml-6 mr-2" >Blood Group:</h1>
                                <div>
                                    <select {...register("group", { required: true })} className="select select-bordered lg:w-44 w-full  bg-gray-600 ">
                                        <option disabled selected></option>
                                        <option>A+</option>
                                        <option>A-</option>
                                        <option>B+</option>
                                        <option>B-</option>
                                        <option>AB+</option>
                                        <option>AB-</option>
                                        <option>O+</option>
                                        <option>O-</option>
                                    </select> <br />
                                    {errors.group && <small className="text-red-500">Select One.</small>}
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex lg:gap-10">
                            <div className=" ">
                                <h1 className="  font-semibold my-2" >Select District</h1>
                                <select {...register("district", { required: true })} className="select  bg-gray-600  lg:w-72 w-full select-bordered ">
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
                                </select> <br />
                                {errors.upazila && <small className="text-red-500">Select Your District.</small>}
                            </div>
                            <div >
                                <h1 className=" font-semibold my-2 " >Select Upazila</h1>
                                <select {...register("upazila", { required: true })} className="select lg:w-72 w-full bg-gray-600 select-bordered  ">
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
                                </select> <br />
                                {errors.upazila && <small className="text-red-500">Select Your Upazila.</small>}
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold my-2">Password</p>
                            <input type="password" className="w-full p-2  bg-gray-600 rounded" placeholder="Password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} id="" /> <br />
                            {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password Must be 6 Character</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password Must have one uppercase one lowercase ,one number and one special character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password Must be less then 20 Character</p>
                                )}
                            <p className="font-semibold my-2">Confirm Password</p>
                            <input type="password" className="w-full p-2  bg-gray-600 rounded" placeholder="Confirm Password" {...register("confirmpassword", { required: true })} id="" /> <br />
                            {errors.confirmpassword && <small className="text-red-500">Confirm Password is required.</small>}
                        </div>
                        <input className="btn w-full text-white btn-outline border-b-4 font-bold uppercase mt-6" type="submit" value='REGISTRATION' />
                    </form>
                    <p className="mt-8">You have an Account Please <Link className="underline " to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Registration