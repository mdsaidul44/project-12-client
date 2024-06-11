import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div> 
            <div>
                <div className="min-h-full  bg-base-100 shadow-xl">
                    <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to='/'><button className="btn"> back to home</button></Link></button>
                        </div>
                    </div>
                </div>
                <div>
                
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;