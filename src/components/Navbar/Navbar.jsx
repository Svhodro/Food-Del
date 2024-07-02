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
              <Link to="/"></Link>
              home
            </li>
            <li
              onClick={() => {
                setmanu("menu");
              }}
              className={`${manu == "menu" ? "border-b" : "border-none"}`}
            >
              <a href="#explore">menu</a>
            </li>
            <li
              onClick={() => {
                setmanu("mobile");
              }}
              className={`${manu == "mobile" ? "border-b" : "border-none"}`}
            >
              <a href="#app-download">mobile App</a>
            </li>
            <li
              onClick={() => {
                setmanu("contact");
              }}
              className={`${manu == "contact" ? "border-b" : "border-none"}`}
            >
              <a href="#contact">contact us</a>
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
            <Link to="/"> home</Link>
          </li>
          <li
            onClick={() => {
              setmanu("menu");
            }}
            className={`${
              manu == "menu" ? "border-b-2 border-black" : "border-none"
            }`}
          >
            <a href="#explore">menu</a>
          </li>
          <li
            onClick={() => {
              setmanu("mobile");
            }}
            className={`${
              manu == "mobile" ? "border-b-2 border-black" : "border-none"
            }`}
          >
            <a href="#app">mobile App</a>
          </li>
          <li
            onClick={() => {
              setmanu("contact");
            }}
            className={`${
              manu == "contact" ? "border-b-2 border-black" : "border-none"
            }`}
          >
            <a href="#contact">contact us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="indicator">
          <span className="indicator-item badge badge-secondary bg-slate-800 border-slate-800 text-white ">
            0
          </span>
          <div className=" grid h-10 w-10 place-items-center">
            <TiShoppingCart className="size-8" />
          </div>
        </div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          signin
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box flex justify-center items-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Navbar;
