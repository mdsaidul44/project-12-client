import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useBlog from "../../Hooks/useBlog"; 
import { useEffect } from "react";



const VolunteerContentManag = () => {
    const [blogs, , refetch] = useBlog()  

    useEffect(()=>{
        document.title  = "Dashboard | Management"
    })
  
 
    return (
        <div>
            <div className='lg:flex rounded-lg mb-4 p-4 bg-slate-600 justify-between'>
                <div className="shadow-lg p-4 rounded-lg shadow-slate-400">
                    <h1 className='text-stone-900 font-bold'>Volunteer / Dashboard</h1>
                    <p className='flex gap-2 text-stone-800 font-semibold'>Content-Management <FaAngleRight className='mt-1.5' /> Dashboard</p>
                </div>
                <div>
                    <Link to='/addblog'><button className="btn-outline p-2  bg-gray-900 rounded-lg font-bold shadow-lg shadow-slate-400 mt-4 border-b-2">Add New Blog</button> </Link>
                </div>
            </div>
            <div>
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
                                <Link to={`/dashboard/updateBlog/${item._id}`}><button className="btn font-bold btn-sm btn-outline border-0 border-b-2"><li><a>Edit</a></li></button>
                                </Link> 
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default VolunteerContentManag;