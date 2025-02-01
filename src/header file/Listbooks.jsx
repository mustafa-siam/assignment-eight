import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
const Listbooks = () => {
    return (
        <div className="py-16">
            <div className="bg-[#1313130D] text-3xl font-bold text-center py-8"><h1>Books</h1></div>
            <div className="py-16 text-end">
            <div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">Sort By <RiArrowDropDownLine className="text-3xl"></RiArrowDropDownLine></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><Link>Rating</Link></li>
    <li><Link>Number of pages</Link></li>
    <li><Link>published year</Link></li>
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
    );
};

export default Listbooks;