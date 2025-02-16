import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import useBlog from "../../../../Hooks/useBlog";
import { useEffect } from "react";
import Aos from "aos";


const Blog = () => { 
    const [blogs] = useBlog()  
    const published = blogs.filter(item=> item.status === 'published')
    useEffect(()=>{
        Aos.init()
        document.title  = "Home | Blog"

    })
    return (
        <div className="">
            <div className="text-center">
                <h1 data-aos="fade-down"  data-aos-duration="1500"  className="text-5xl text-red-400 mb-8 font-semibold pt-20">Blog</h1>
                <p  data-aos="fade-up"  data-aos-duration="1500" className="text-xl text-red-100">A blog is an online platform for sharing articles on various topics, featuring multimedia and reader comments. <br /> It can be personal, professional, or niche-focused, fostering community interaction.</p>
            </div>
            <div className="lg:flex lg:h-[420px]  rounded-xl p-4 mt-10 bg-gray-400">
                <div className="relative lg:w-1/2">
                    <div className="">
                        <img data-aos="fade-up"  data-aos-duration="2000"  className="w-[400px] rounded-xl" src="https://i.ibb.co/gmjbqzC/images-2.jpg" alt="" />
                    </div>
                    <div className="lg:absolute lg:top-44 lg:left-48">
                        <img data-aos="fade-down"  data-aos-duration="2000"  className="w-[320px] h-52  rounded-xl" src="https://i.ibb.co/bWBQtBp/images-1.jpg" alt="" />
                    </div>
                </div>
                <div className="lg:w-1/2 p-10  text-black" >
                    <h1  data-aos="fade-left"  data-aos-duration="1500" className="font-bold text-2xl mb-10">Unraveling the Mysteries and Marvels of Blood in Health and Science</h1>
                    <p data-aos="fade-right"  data-aos-duration="1500" >"Hematology Horizon: Illuminating the Depths of Blood's Domain" - Venture into the vast expanse of blood's realm, where every beat holds the key to understanding life's most profound mysteries. Join us as we traverse the hemispheres of health, science, and the human condition, uncovering the boundless wonders that flow within us.</p>
                </div>
            </div>
            <div className="lg:flex justify-evenly bg-slate-300 text-black gap-60 rounded-lg mt-20 p-4 ">
                <h1 data-aos="fade-down"  data-aos-duration="2000"  className="text-3xl lg:-ml-28 font-semibold">Category:</h1>
                <h1 data-aos="fade-up"  data-aos-duration="1500"  className="text-3xl font-semibold">Total Blog : {published.length}</h1>  
                   <Link to='/addblog'><button data-aos="fade-down"  data-aos-duration="2000"  className="btn-outline p-2  lg:-mr-20 btn-primary rounded-lg font-bold  border-b-2">Add New Blog</button> </Link>  
            </div>
            <div className="lg:flex">
                <div className="w-1/4 p-8 space-y-4">
                    <p data-aos="fade-left"  data-aos-duration="1000"  className="font-semibold text-xl">Categories</p>
                    <div data-aos="fade-left"  data-aos-duration="1000"  className="flex gap-4 ">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                    <div  data-aos="fade-left"  data-aos-duration="1000" className="flex gap-4">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                    <div  data-aos="fade-left"  data-aos-duration="1000" className="flex gap-4">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                    <div data-aos="fade-left"  data-aos-duration="1000"  className="flex gap-4">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                    <div  data-aos="fade-left"  data-aos-duration="1000" className="flex gap-4">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                    <div  data-aos="fade-left"  data-aos-duration="1000" className="flex gap-4">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                </div>
                <div className="lg:w-3/4 space-y-8 rounded-lg p-8">
                    {
                        published.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;