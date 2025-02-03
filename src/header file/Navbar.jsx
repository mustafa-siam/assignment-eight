import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links=<>
       <li><NavLink to={'/'}  className={({ isActive }) => (isActive ? "text-[#23BE0A] border-[1px] border-[#23BE0A]" : "")}>Home</NavLink></li>
       <li><NavLink to={'/listbooks'} className={({isActive})=>isActive && "text-[#23BE0A] border-[1px] border-[#23BE0A]"}>Listed Books</NavLink></li>
       <li><NavLink to={'/readpages'} className={({isActive})=>isActive && " text-[#23BE0A] border-[1px] border-[#23BE0A]"}>Pages to Read</NavLink></li>
       <li><NavLink to={'/blog'} className={({isActive})=>isActive && " text-[#23BE0A] border-[1px] border-[#23BE0A]"}>Blog</NavLink></li>
       <li><NavLink to={'/about'} className={({isActive})=>isActive && " text-[#23BE0A] border-[1px] border-[#23BE0A]"}>About</NavLink></li>
  </>
     return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Store</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
         {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn bg-[#23BE0A]">Sign In</a>
    <a className="btn bg-[#59C6D2]">Sign Up</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;