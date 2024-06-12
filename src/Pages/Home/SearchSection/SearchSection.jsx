import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SearchSection = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="my-20 ">
            <div className="text-teal-200 text-3xl font-bold text-center w-60 mx-auto rounded-lg p-2 shadow-lg shadow-teal-600">Find Blood</div>
            <div className="lg:flex justify-around bg-teal-600 mt-10 p-6 rounded-lg text-black font-semibold">
                <h1 className="text-2xl lg:-ml-20 font-bold ">Search Hare</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("district", { required: true })} className="select  bg-teal-300 btn-sm select-bordered ">
                                    <option disabled selected>Select District</option>
                                    <option>Chattogram</option>
                                    <option>Feni</option>
                                    <option>Brahmanbaria</option>
                                    <option>Coxsbazar</option>
                                    <option>Chandpur</option>
                                    <option>Noakhali</option>
                                    <option>Rangamati</option>
                                    <option>Lakshmipur</option>
                                    <option>Khagrachhari</option>
                                    <option>Bandarban</option>
                                    <option>Sirajganj</option>
                                    <option>Pabna</option>
                                    <option>Bogura</option>
                                    <option>Natore</option>
                                    <option>Rajshahi</option>
                                    <option>Joypurhat</option>
                                    <option>Chapainawabganj</option>
                                    <option>Naogaon</option>
                                    <option>Jashore</option>
                                    <option>Satkhira</option>
                                    <option>Meherpur</option>
                                    <option>Chuadanga</option>
                                    <option>Narail</option>
                                    <option>Magura</option>
                                    <option>Khulna</option>
                                    <option>Bagerhat</option>
                                    <option>Jhenaidah</option>
                                    <option>Patuakhali</option>
                                    <option>Sylhet</option>
                                    <option>Narayanganj</option>
                                    <option>Munshiganj</option>
                                    <option>Dhaka</option>
                                </select>
                                <select {...register("upazila", { required: true })} className="select bg-teal-300  btn-sm mx-4 select-bordered  ">
                                    <option disabled selected>Select Upazila</option>
                                    <option>Mirsharai</option>
                                    <option>Sitakunda</option>
                                    <option>Patiya</option>
                                    <option>Sandwip</option>
                                    <option>Banshkhali</option>
                                    <option>Boalkhali</option>
                                    <option>Anwara</option>
                                    <option>Chandanaish</option>
                                    <option>Satkania</option>
                                    <option>Barura</option>
                                    <option>Brahmanpara</option>
                                    <option>Chandina</option>
                                    <option>Chauddagram</option>
                                    <option>Daudkandi</option>
                                    <option>Homna</option>
                                    <option>Comilla Sadar</option>
                                    <option>Meghna</option>
                                    <option>Feni Sadar</option>
                                    <option>Parshuram</option>
                                    <option>Kaptai</option>
                                    <option>Kawkhali</option>
                                    <option>Rajasthali</option>
                                    <option>Hatia</option>
                                    <option>Noakhali Sadar</option>
                                    <option>Subarnachar</option>
                                    <option>Ramganj</option>
                                    <option>Brahmanpara</option>
                                    <option>Lohagara</option>
                                    <option>Hathazari</option>
                                </select>
                    <select {...register("group", { required: true })} className="select select-bordered  btn-sm bg-teal-300">
                        <option disabled selected>Blood Group</option>
                        <option value="A+">A+</option>
                        <option>A-</option>
                        <option>B+</option>
                        <option>B-</option>
                        <option>AB+</option>
                        <option>AB-</option>
                        <option>O+</option>
                        <option>O-</option>
                    </select> 
                    <input type="submit" className="btn ml-4 btn-sm" value="Search" />
                </form>
                <div>
                <Link to='/Alldonation'> <button className='btn-sm btn btn-outline border-0 border-b-4 text-black lg:-mr-32 bg-slate-200'>All donation Requests</button></Link>
                </div>
            </div>

        </div>
    );
};

export default SearchSection;