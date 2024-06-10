import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
 
const AddBlog = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const onSubmit = async (data) => {
        
    }
    return (
        <div > 
            <div className="flex bg-slate-50 pt-20 rounded-lg">
                <div className="w-1/2">
                    <img className="rounded-lg" src="https://i.ibb.co/RBSCJjL/4262873-2262375.jpg" alt="" />
                </div>
                <div className="w-1/2 p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div >
                            <label className="form-control   my-6">
                                <div className="label">
                                    <span className="label-text  text-black">Title</span>
                                </div>
                                <input {...register("title", { required: true })} type="text" placeholder="Title" className="input input-bordered w-full text-black placeholder:text-black bg-gray-400" required />
                            </label>
                        </div>
                        <div >
                            {/* Recipient name field */}
                            <label className="form-control ">
                                <div className="label">
                                    <span className="label-text text-black">Image File</span>
                                </div>
                                <input type="file" {...register("image", { required: true })} className="file-input w-full   bg-gray-400" />
                            </label>
                        </div>
                        {/* description box */}
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text text-black">Content Text</span>
                            </div>
                            <textarea  {...register('content')} className="textarea textarea-bordered h-24  text-black placeholder:text-black bg-gray-400" placeholder="Content Text"></textarea>
                        </label>
                        <input type="submit" className="w-full border-0  btn-primary btn-outline border-b-4 btn mt-4 font-bold uppercase " value="Upload" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;