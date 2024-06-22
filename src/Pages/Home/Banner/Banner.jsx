import Aos from "aos";
import { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Banner = () => {

    useEffect(()=>{
        document.title  = "Home | Home"
    },[])

    useEffect(()=>{
        Aos.init()
    })
    return (
        <div>
            <div className="hero rounded-lg "  style={{ backgroundImage: 'url(https://i.ibb.co/dkvVmKw/2148483283-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="mt-16 h-[300px] max-w-md">
                        <h1 data-aos="fade-left"  data-aos-duration="1500"  className="mb-5 text-5xl font-bold text-slate-950 ">This is blood wave</h1>
                        <p data-aos="fade-right"  data-aos-duration="1500"   className="mb-5">Blood Wave is a platform that connects blood donors with recipients, ensuring a reliable blood supply for emergencies and medical needs. organizes drives, and educates the public on the importance of blood donation.</p>
                        <div className="flex justify-evenly">
                        <Link to='/registration'><button data-aos="fade-up"  data-aos-duration="1000"  className="btn  text-black font-bold btn-outline border-0 border-b-4 ">Join as a Donor<GoArrowRight className="text-xl"/></button></Link>
                       <Link to='/search'> <button  data-aos="fade-up"  data-aos-duration="1000" className="btn text-black font-bold btn-outline border-0 border-b-4">Search Donors<GoArrowRight className="text-xl"/></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;