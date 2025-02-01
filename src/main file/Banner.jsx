import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="md:flex items-center gap-16 bg-[#1313130D] p-12 mt-16">
            <div>
                <h1 className="text-5xl font-bold ">Books to freshen up your bookshelf</h1>
               <Link to={'/listbooks'}><button className="btn bg-[#23BE0A] text-white mt-16 mb-3">View The List</button></Link> 
            </div>
            <div>
                <img src="https://i.ibb.co.com/PvZcgNQQ/banner.webp" alt="" />
            </div>
        </div>
    );
};

export default Banner;