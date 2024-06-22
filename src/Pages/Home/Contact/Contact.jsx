import Aos from "aos";
import { useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";


const Contact = () => {
    const [donors, setDonors] = useState([]) 
    
    useEffect(() => {
        fetch('https://my-assignment12-server-seven.vercel.app/contact')
            .then(res => res.json())
            .then(data => {
                setDonors(data)
            })

    }, [])

    useEffect(()=>{
        Aos.init()
    })
    return (
        <div >
            <div className="text-center mx-auto mb-20 border-spacing-6 border-y-4 border-gray-300 p-4 w-72">
                <h1  data-aos="fade-left"  data-aos-duration="1000" className="text-red-300">-------Contact Us-------</h1>
                <p data-aos="fade-right"  data-aos-duration="1000"  className="uppercase text-red-600">We Are Active</p>
            </div>
           <div className="grid lg:grid-cols-3 grid-cols-1 gap-6  ">
           {
                donors.map(donor => <div className="mx-auto text-center" key={donor.phone}>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src={donor.img} />
                        </div>
                    </div>
                    <div className="  ">
                        <h1 data-aos="fade-right"  data-aos-duration="1500"  className="text-xl text-gray-400  font-semibold">{donor.name}</h1>
                        <h1  data-aos="fade-left"  data-aos-duration="1500"  className="text-red-200 flex ml-8 "> <IoCall className="mt-1 mr-2"/>{donor.phone} </h1>
                        <a  data-aos="fade-up"  data-aos-duration="2000"  className="underline hover:cursor-pointer flex text-gray-400"><TfiEmail className="mt-1.5 mr-2 text-white"/>{donor.email}</a>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default Contact;