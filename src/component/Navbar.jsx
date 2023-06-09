import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto navbar  opacity-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => isActive && "text-purple-500"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/statistics"}
                className={({ isActive }) => isActive && "text-purple-500"}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/jobapplied"}
                className={({ isActive }) => isActive && "text-purple-500"}
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className={({ isActive }) => isActive && "text-purple-500"}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost normal-case text-2xl md:text-4xl font-bold text-purple-700"
        >
          <span className="text-black">pro</span> Hire
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => isActive && "text-purple-500"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/statistics"}
              className={({ isActive }) => isActive && "text-purple-500"}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/jobapplied"}
              className={({ isActive }) => isActive && "text-purple-500"}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/blog"}
              className={({ isActive }) => isActive && "text-purple-500"}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end hover:cursor-pointer">
        <p className="btn btn-color">Start Applying</p>
      </div>
    </div>
  );
};

export default Navbar;