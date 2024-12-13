import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user,SignOut}= useContext(AuthContext);
  const handleSignOut = ()=>{
    SignOut()
    .then(()=>{
      console.log("sign out");
    })
    .catch(err=>{
  console.log(err.code,err.message);
    })
  }
    const links = <>
    <NavLink to='/'>Home</NavLink>
    </>
    return (
        <div className='sticky top-0 z-10 border-2 bg-white'>
            <div className="navbar bg-base-100 p-4 font-semibold max-w-7xl mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className='w-12' src="https://img.icons8.com/?size=48&id=FOG37TbrcTui&format=png" alt="" />Job Box</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-6">
  {
  user? <button onClick={handleSignOut} className='btn'>SignOut</button>:<>
    <Link to="/register" className='underline hover:text-blue-700'>Register</Link>
    <Link to="/signin" className='btn bg-blue-700 text-white'>Sign In</Link>
  </>
  }
  </div>
</div>
        </div>
    );
};

export default Navbar;