import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useBlog from '../../Hooks/useBlog';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const ContentManage = () => {
    const { register, handleSubmit, reset } = useForm()
    const [blogs, , refetch] = useBlog()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    // Edit toggle
    const onSubmit = async (data) => {
        console.log("this is data field", data)

        // const imageFile = { image: data.image[0] }
        // const res = await axiosPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });

        // if (res.data.success) {
        //     const blogUpdate = {
        //         title: data.title,
        //         img: res.data.data.display_url,
        //         content: data.content,
        //         publishDate: data.date,
        //         status: "published"
        //     }

        //     const blogItem = await axiosSecure.patch(`/blogs/${data._id}`, blogUpdate)
        //     console.log(blogItem.data)
        //         .then(res => {
        //             console.log(res.data)
        //         })
        //     if (blogItem.data.modifiedCount) {
        //         refetch()
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Updated successfully",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //     }
        // }


    }

    // Publish toggle
    const handlePublish = async (data) => {
        console.log('data paici', data)

        const blogPub = {
            status: 'published'
        }
        console.log(blogPub)
        await axiosSecure.patch(`/blog/${data._id}`, blogPub)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    // show success popup 
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Blog is Published now',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    // Unpublished toggle
    const handleUnPublish = async (data) => {
        console.log('data paici', data)

        const blogPub = {
            status: 'Dreft'
        }
        console.log(blogPub)
        await axiosSecure.patch(`/blog/${data._id}`, blogPub)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    // show success popup 
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'Blog is Published now',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }


    // Delete toggle
    const handleDelete = (data) => {
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
                axiosSecure.delete(`/blog/${data._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Blog has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div>
            <div className='lg:flex rounded-lg mb-4 p-4 bg-slate-500 justify-between'>
                <div>
                    <h1 className='text-stone-900 font-bold'>Dashboard</h1>
                    <p className='flex gap-2 text-stone-800 font-semibold'>Content-Management <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <Link to='/addblog'><button className="btn-outline p-2  bg-gray-900 rounded-lg font-bold  border-b-2">Add New Blog</button> </Link>
                </div>
            </div>
            <div className='space-y-8 '>
                {
                    blogs.map(item => <div key={item._id} className="card card-side bg-base-300 shadow-xl">
                        <figure><img className='w-96 h-full' src={item.img} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl text-red-100">{item.title}</h2>
                            <p className='text-red-50'>{item.description?.slice(0, 150)}</p>
                            <h1 className='text-stone-400'><span className='font-bold'>Publish Date:</span> <span className='underline'>{item.publishDate}</span></h1>
                            <h1 className='sm-btn '><span>Status :- </span>{item.status}</h1>
                            <div className="card-actions justify-end">
                                <div className="dropdown dropdown-bottom">
                                    <div tabIndex={0} role="button" className="btn btn-outline border-0 border-b-4  m-1 font-bold">Manage</div>
                                    <ul tabIndex={0} className="dropdown-content gap-4 z-[1] menu  p-2 shadow bg-base-100 rounded-box ">
                                        {
                                            item?.status === 'published' ? <button className='btn  font-bold btn-sm btn-outline border-0 border-b-2'><li onClick={() => handleUnPublish(item)}><a>UnPublish</a></li></button> : <> <button className='btn  font-bold btn-sm btn-outline border-0 border-b-2'><li onClick={() => handlePublish(item)}><a>Published</a></li></button></>
                                        }
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="btn  font-bold btn-sm btn-outline border-0 border-b-2" onClick={() => document.getElementById('my_modal_5').showModal(item._id)}>Edit</button>
                                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box bg-gray-200">
                                                <h1 className='text-xl font-bold text-black'>Update Now</h1>
                                                <form onSubmit={() => handleSubmit(onSubmit)(item._id)}>
                                                    <div >
                                                        <label className="form-control   mt-6">
                                                            <div className="label">
                                                                <span className="label-text  text-black">Title</span>
                                                            </div>
                                                            <input {...register("title", { required: true })} type="text" placeholder="Title" className="input input-bordered w-full text-black placeholder:text-black bg-gray-400" required />
                                                        </label>
                                                    </div>
                                                    <div >
                                                        <label className="form-control   mt-6">
                                                            <div className="label">
                                                                <span className="label-text  text-black">Date</span>
                                                            </div>
                                                            <input {...register("date", { required: true })} type="date" className="input input-bordered w-full text-black placeholder:text-black bg-gray-400" required />
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
                                                        <textarea  {...register('content')} className="textarea textarea-bordered h-24  text-black placeholder:text-black bg-gray-400" placeholder="Writing Of Text Field"></textarea>
                                                    </label>
                                                    <input type="submit" className="w-full border-0 text-black hover:btn-primary btn-outline border-b-4 btn mt-4 font-bold uppercase " value="Update" />
                                                </form>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-outline text-black">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                        <button className='btn  font-bold btn-sm btn-outline border-0 border-b-2'><li onClick={() => handleDelete(item)}><a>Delete</a></li></button>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ContentManage;