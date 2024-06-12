import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic';



const UpdateBlog = () => {
    const blogs = useLoaderData()
    console.log(blogs)
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        document.title = "Dashboard | Update"

    })
    // Edit toggle
    const onSubmit = async (data) => {
        console.log("this is data field", data)


        const blogUpdate = {
            title: data.title,
            img: data.image,
            description: data.content,
            publishDate: data.date,
            status: "Dreft"
        }

        const res = await axiosPublic.patch(`/blogs/${blogs._id}`, blogUpdate)
        console.log(res)
        if (res.data.modifiedCount > 0) {

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Updated successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }


    }

    return (
        <div>
            <div className='lg:flex justify-between bg-slate-800 p-4 rounded mb-10 '>
                <div className='shadow-lg shadow-teal-800 p-2'>
                    <h1 className='text-stone-400 font-bold'>Dashboard</h1>
                    <p className='flex gap-2 font-semibold'>Update Blog <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='text-2xl shadow-lg shadow-teal-800 font-bold text-stone-400 uppercase p-4 text-center'>  Update Now</h1>
                </div>
            </div>
            <div className='lg:flex rounded-lg'>
                <div className='lg:w-1/2 '>
                    <img className='rounded-lg' src="https://i.ibb.co/Fwnt5Wk/1794459-250130-P48-MNV-852.jpg" alt="" />
                </div>
                <div className='lg:w-1/2 bg-teal-100 p-4 rounded-lg'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div >
                            <label className="form-control   mt-6">
                                <div className="label">
                                    <span className="label-text  text-black">Title</span>
                                </div>
                                <input {...register("title", { required: true })} type="text" defaultValue={blogs.title} placeholder="Title" className="input input-bordered w-full text-black placeholder:text-black bg-gray-400" required />
                            </label>
                        </div>
                        <div >
                            <label className="form-control   mt-6">
                                <div className="label">
                                    <span className="label-text  text-black">Date</span>
                                </div>
                                <input {...register("date", { required: true })} defaultValue={blogs.publishDate} type="date" className="input input-bordered w-full text-black placeholder:text-black bg-gray-400" required />
                            </label>
                        </div>
                        <div >
                            {/* Recipient name field */}
                            <label className="form-control ">
                                <div className="label">
                                    <span className="label-text text-black">Image File</span>
                                </div>
                                <input type="text" {...register("image", { required: true })} defaultValue={blogs.img} className="input w-full text-black  bg-gray-400" />
                            </label>
                        </div>
                        {/* description box */}
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-black">Content Text</span>
                            </div>
                            <textarea  {...register('content')} defaultValue={blogs.description} className="textarea textarea-bordered h-24  text-black placeholder:text-black bg-gray-400" placeholder="Writing Of Text Field"></textarea>
                        </label>
                        <input type="submit" className="w-full border-0   btn-primary   border-b-4 btn mt-4 font-bold uppercase " value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;