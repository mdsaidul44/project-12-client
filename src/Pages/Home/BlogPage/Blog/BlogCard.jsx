import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";


const BlogCard = ({blog}) => {
    const {_id,img,title,description,publishdate} = blog;
    // console.log(title)
    return (
        <div>
            <div className="hero  bg-base-300 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm w-full lg:h-[250px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <p className="py-6">{description.slice(0,150)}</p>
                        <Link to={`/blogdetails/${_id}`}><button className="flex hover:btn-outline p-2 rounded border-b-2">More Details <GoArrowRight className="mt-1 text-xl"/></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;