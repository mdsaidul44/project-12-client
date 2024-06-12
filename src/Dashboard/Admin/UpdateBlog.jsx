import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateBlog = () => {
    const blogs = useLoaderData()
    console.log(blogs)
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure()


    // Edit toggle
    const onSubmit = async (data) => {
        console.log("this is data field", data)

        const imageFile = { image: data.image[0] } 
        const res = await axiosSecure.patch(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

 
            const blogUpdate = {
                title: data.title,
                img: res.data.data.display_url,
                content: data.content,
                publishDate: data.date,
                status: "Dreft"
            }

            const blogUpd = await axiosSecure.patch(`/blogs/${blogs._id}`, blogUpdate)
            console.log(blogUpd.data)
                .then(res => {
                    console.log(res.data)
                    if (blogUpd.data.modifiedCount) {
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Updated successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })

        }
 
    return (
        <div>
            <div className='flex justify-between bg-slate-800 p-4 rounded mb-10 '>
                <div className='shadow-lg shadow-teal-800 p-2'>
                    <h1 className='text-stone-400 font-bold'>Dashboard</h1>
                    <p className='flex gap-2 font-semibold'>Update Blog <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <h1 className='text-2xl shadow-lg shadow-teal-800 font-bold text-stone-400 uppercase p-4 text-center'>  Update Now</h1>
                </div>
            </div>
            <div className='flex rounded-lg'>
                <div className='w-1/2 '>
                    <img className='rounded-lg' src="https://i.ibb.co/Fwnt5Wk/1794459-250130-P48-MNV-852.jpg" alt="" />
                </div>
                <div className='w-1/2 bg-teal-100 p-4 rounded-lg'>
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
                                <input type="file" {...register("image", { required: true })} className="file-input w-full   bg-gray-400" />
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