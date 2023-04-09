import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
           Quiz Crakers
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex gap-5">
            <NavLink to={"/"} className={({isActive}) => isActive ? 'active' : undefined}>Quizes</NavLink>
            <NavLink to={"/statistics"} className={({isActive}) => isActive ? 'active' : undefined}>Statistics</NavLink>
            <NavLink to={"/blog"} className={({isActive}) => isActive ? 'active' : undefined}>Blog</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;