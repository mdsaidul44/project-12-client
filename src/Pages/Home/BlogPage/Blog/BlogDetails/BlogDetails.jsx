import { useLoaderData, useParams } from "react-router-dom";
import { FcReading } from "react-icons/fc";


const BlogDetails = () => {
    const blogDetails = useLoaderData()
    console.log(blogDetails)
    const { img, title, description } = blogDetails
    return (
        <div>
            <div className="hero h-[450px]" style={{ backgroundImage: 'url(https://i.ibb.co/DzXSF13/28463049-xco2-8jtl-220606.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-red-200 font-bold">Read Blog</h1>
                        <p className="mb-5 text-red-200">Explore how reading boosts your brain, reduces stress, and enriches your life in our latest blog post. Discover the benefits of making reading a daily habit.</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="bg-slate-200 flex p-2 pt-4 mt-8 text-3xl font-semibold text-red-500"><FcReading className="text-5xl mr-4" />{title}</h1>
            </div>
            <div className="bg-slate-50 mt-6 rounded-lg p-6"> 
                    <img className="h-60 w-72 rounded-lg" src={img} alt="" />
                    <button className="btn-outline p-2 mt-4 btn-primary rounded-lg font-bold  border-b-2">Add New Blog</button> 
                <p className="text-black text-xl mt-6">{description}</p>
            </div>
        </div>
    );
};

export default BlogDetails;