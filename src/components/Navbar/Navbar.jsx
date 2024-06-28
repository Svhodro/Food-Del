import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
function Navbar() {
  const [manu, setmanu] = useState("home");
  return (
    <div className="navbar bg-base-100 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-bold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li
              onClick={() => {
                setmanu("home");
              }}
              className={`${manu == "home" ? "border-b" : "border-none"}`}
            >
              home
            </li>
            <li
              onClick={() => {
                setmanu("menu");
              }}
              className={`${manu == "menu" ? "border-b" : "border-none"}`}
            >
              menu
            </li>
            <li
              onClick={() => {
                setmanu("mobile");
              }}
              className={`${manu == "mobile" ? "border-b" : "border-none"}`}
            >
              mobile App
            </li>
            <li
              onClick={() => {
                setmanu("contact");
              }}
              className={`${manu == "contact" ? "border-b" : "border-none"}`}
            >
              contact us
            </li>
          </ul>
        </div>
        <img src={assets.logo} alt="img" className="w-20 sm:w-28" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-base text-lg cursor-pointer">
          <li
            onClick={() => {
              setmanu("home");
            }}
            className={`${
              manu == "home" ? "border-b-2 border-black" : "border-none"
            }`}
          >
            home
          </li>
          <li
            onClick={() => {
              setmanu("menu");
            }}
            className={`${
              manu == "menu" ? "border-b-2 border-black" : "border-none"
            }`}
          >
            menu
          </li>
          <li
            onClick={() => {
              setmanu("mobile");
            }}
            className={`${
              manu == "mobile" ? "border-b-2 border-black" : "border-none"
            }`}
          >
            mobile App
          </li>
          <li
            onClick={() => {
              setmanu("contact");
            }}
            className={`${
              manu == "contact" ? " border-b-2 border-black" : "border-none "
            }`}
          >
            contact us
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary bg-slate-800 border-slate-800 text-white ">0</span>
          <div className=" grid h-10 w-10 place-items-center">
          <TiShoppingCart className="size-8"/>
          </div>
        </div>
        <a className="btn">signin</a>
      </div>
    </div>
  );
}

export default Navbar;
