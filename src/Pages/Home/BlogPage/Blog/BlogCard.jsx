import Aos from "aos";
import { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";


const BlogCard = ({blog}) => {
    const {_id,img,title,description} = blog; 
    useEffect(()=>{
        Aos.init()
        document.title  = "Dashboard | AddBlog"

    })
    return (
        <div>
            <div data-aos="fade-left"  data-aos-duration="1500"  className="hero  bg-base-300 rounded-lg">
                <div className="lg:hero-content ">
                    <img data-aos="fade-left"  data-aos-duration="1000"  src={img} className="max-w-sm w-full lg:h-[250px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 data-aos="fade-left"  data-aos-duration="1000"  className="text-2xl font-bold">{title}</h1>
                        <p data-aos="fade-left"  data-aos-duration="1000"  className="py-6">{description?.slice(0,150)}</p>
                        <Link to={`/blogdetails/${_id}`}><button data-aos="fade-left"  data-aos-duration="1000"  className="flex hover:btn-outline p-2 rounded border-b-2">More Details <GoArrowRight className="mt-1 text-xl"/></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;