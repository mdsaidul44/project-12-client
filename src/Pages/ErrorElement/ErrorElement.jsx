import { useEffect } from "react";
import { Link } from "react-router-dom";


const ErrorElement = () => {
    useEffect(()=>{
        document.title  = "Error | ErrorPage"

    })
    return (
        <div className="text-center lg:mt-24  "> 
            <div className="lg:ml-[400px] mb-4">  
                <img className="lg:w-[600px] rounded-lg" src="https://i.ibb.co/vPqdc8r/10173948-8632.jpg" alt="" />
            </div>
            <Link><button className="btn btn-outline border-0 border-b-4 shadow-lg shadow-black uppercase">Go Back</button></Link>
        </div>
    );
};

export default ErrorElement;