import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { StoreContext } from "../../context/StoreContext";
function Navbar() {
  const [manu, setmanu] = useState("home");
  const [curentstate, setCurentstate] = useState("signup");
  const {getTotalCartAmount}=useContext(StoreContext)
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
        <Link to="/"><img src={assets.logo} alt="img" className="w-20 sm:w-28" /></Link>
        
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
          {getTotalCartAmount()===0?<h1></h1>:    <span className="indicator-item size-3 rounded-full badge badge-secondary bg-orange-500 border-orange-500 text-white ">
           
           </span>}
      
          <div className=" grid h-10 w-10 place-items-center">
            <Link to="/cart">          
              <TiShoppingCart className="size-8" />
            </Link>
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
          <div className="modal-box flex justify-center items-center bg-transparent">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle text-white btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            {curentstate == "signup" ? (
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body ">
                  <div>
                    <p className="text-center font-bold text-3xl my-4">
                      Signup
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
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
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn border-t-orange-500 bg-orange-500">
                      Create account
                    </button>
                  </div>
                  <div>
                    <p>
                      Already have an account ?
                      <span
                        className="font-semibold cursor-pointer"
                        onClick={() => setCurentstate("login")}
                      >
                        Login here
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body ">
                  <div>
                    <p className="text-center font-bold text-3xl my-4">
                      Signin
                    </p>
                  </div>
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
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn border-t-orange-500 bg-orange-500">
                      Login
                    </button>
                  </div>
                  <div>
                    <div className="flex justify-center items-start gap-3  mt-1 ">
                      <input type="checkbox" required />
                      <p className="text-base">
                        By continuing,i agree to the terms of ase & privacy
                        policy
                      </p>
                    </div>
                    <p className="text-start my-2">
                      Create a new account ?
                      <span
                        className="font-semibold cursor-pointer"
                        onClick={() => setCurentstate("signup")}
                      >
                        Click here
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Navbar;
