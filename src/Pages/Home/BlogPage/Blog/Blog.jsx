

const Blog = () => {
    return (
        <div className="">
            <div className="text-center">
                <h1 className="text-5xl text-red-400 mb-8 font-semibold pt-20">Blog</h1>
                <p className="text-xl text-red-100">A blog is an online platform for sharing articles on various topics, featuring multimedia and reader comments. <br /> It can be personal, professional, or niche-focused, fostering community interaction.</p>
            </div>
            <div className="lg:flex lg:h-[420px]  rounded-xl p-4 mt-10 bg-gray-400">
                <div className="relative lg:w-1/2">
                    <div className="">
                        <img className="w-[400px] rounded-xl" src="https://i.ibb.co/jJWqBbm/images-29.jpg" alt="" />
                    </div>
                    <div className="lg:absolute lg:top-44 lg:left-48">
                        <img className="w-[320px] h-52  rounded-xl" src="https://i.ibb.co/9mX8xy8/images-30.jpg" alt="" />
                    </div>
                </div>
                <div className="lg:w-1/2 p-10  text-black" >
                    <h1 className="font-bold text-2xl mb-10">Unraveling the Mysteries and Marvels of Blood in Health and Science</h1>
                    <p>"Hematology Horizon: Illuminating the Depths of Blood's Domain" - Venture into the vast expanse of blood's realm, where every beat holds the key to understanding life's most profound mysteries. Join us as we traverse the hemispheres of health, science, and the human condition, uncovering the boundless wonders that flow within us.</p>
                </div>
            </div>
            <div className="flex bg-slate-300 text-black gap-60 rounded-lg mt-20 p-4 ">
                <h1 className="text-3xl font-semibold">Category:</h1>
                <h1 className="text-3xl font-semibold">Total Blog</h1>
            </div>
            <div className="flex">
                <div className="w-1/4 p-8 space-y-4">
                    <p className="font-semibold text-xl">Categories</p>
                    <div className="flex gap-4 ">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                    <div className="flex gap-4">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                    <div className="flex gap-4">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                    <div className="flex gap-4">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                    <div className="flex gap-4">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                    <div className="flex gap-4">
                        <input type="checkbox" defaultChecked className="checkbox" />
                        <p>Donor</p>
                    </div>
                </div>
                <div className="w-3/4 p-8">
                    <div className="hero  bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-5xl font-bold">Box Office News!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;