import { createContext, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
export const shortcontext=createContext();
const Listbooks = () => {
    const [sortby,setsortby]=useState(null);
    const handlesort=(type)=>{
     setsortby(type);
    }
    return (
        <shortcontext.Provider value={{sortby,handlesort}}>
            <div className="py-16">
            <div className="bg-[#1313130D] text-3xl font-bold text-center py-8"><h1>Books</h1></div>
            <div className="py-16 text-end">
                    <div className="dropdown dropdown-bottom">
                        <button className="btn bg-[#23BE0A]">Sort By <RiArrowDropDownLine className="text-3xl"></RiArrowDropDownLine></button>
                        <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><button onClick={()=>handlesort('rating')}>Rating</button></li>
                            <li><button onClick={()=>handlesort('pages')}>Number of pages</button></li>
                            <li><button onClick={()=>handlesort('year')}>Published Year</button></li>
                        </ul>
                    </div>
                </div>
            <div className="flex gap-11  ">
                <Link to={'readbooks'}><h2>Read Books</h2></Link>
                <Link to={'whislist'}><h2>Wishlist Books</h2></Link>            
            </div>
            <div className="py-16">
                <Outlet></Outlet>
            </div>
        </div>
        </shortcontext.Provider>
    );
};

export default Listbooks;