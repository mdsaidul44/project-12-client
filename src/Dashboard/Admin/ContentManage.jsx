import React, { useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useBlog from '../../Hooks/useBlog';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'; 


const ContentManage = () => {
    const [blogs, , refetch] = useBlog() 
    const axiosSecure = useAxiosSecure()

    useEffect(()=>{
        document.title  = "Dashboard | Manage"
    })

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
        <div className=''>
            <div className='lg:flex rounded-lg mb-4 p-4 bg-slate-500 justify-between'>
                <div className='shadow-lg shadow-black p-2 bg-slate-400'>
                    <h1 className='text-stone-900 font-bold'>Dashboard</h1>
                    <p className='flex gap-2 text-stone-800 font-semibold'>Content-Management <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <Link to='/addblog'><button className="btn-outline p-2  bg-gray-900 rounded-lg font-bold shadow-lg mt-2 shadow-black border-b-2">Add New Blog</button> </Link>
                </div>
            </div>
            <div className='space-y-8 '>
                {
                    blogs.map(item => <div key={item._id} className="card card-side bg-base-300 shadow-xl">
                        <figure><img className='w-96 h-full' src={item.img} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-semibold text-3xl text-red-200">{item.title}</h2>
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
                                        <Link to={`/dashboard/updateBlog/${item._id}`}><button className="btn font-bold btn-sm btn-outline border-0 border-b-2"><li><a>Edit</a></li></button>
                                        </Link>
                                        <button className='btn font-bold btn-sm btn-outline border-0 border-b-2'><li onClick={() => handleDelete(item)}><a>Delete</a></li></button>
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