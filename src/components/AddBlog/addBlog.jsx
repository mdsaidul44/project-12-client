import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useEffect } from "react";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddBlog = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{
        document.title  = "Dashboard | AddBlog" 
    })
    const onSubmit = async (data) => {
        // console.log('this is data', data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const blogInfo = {
                title: data.title,
                image: res.data.data.display_url,
                content: data.content,
                status: "Dreft"
            }

            const blogItem = await axiosPublic.post('/blog', blogInfo)
            if (blogItem.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Add blog successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }


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