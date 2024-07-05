import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

function Places() {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div>
      <div id="contact">
        <div className="flex h-full border-t border-b py-20 items-center justify-start bg-white">
          <div className="mx-auto w-full max-w-lg">
            <div className="text-center">
              <h1 className="text-4xl font-medium">Contact us</h1>
              <p className="mt-3">
                Email us at rudrolipi@gamil.com or message us here:
              </p>
            </div>

            <form
              name="contact-form"
              className="mt-10 px-8"
            >
              {/* This is a working contact form. 
   Get your free access key from: https://web3forms.com/  */}
              <input type="hidden" name="access_key" />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative z-0">
                  <input
                    type="text"
                    name="from_name"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    first name
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="text"
                    name="last_name"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    last name
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <input
                    type="email"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    Email address
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="message"
                    rows={1}
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                   street
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="text"
                    name="from_name"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    city
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="text"
                    name="from_email"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    state
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="number"
                    name="from_name"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                   zip code
                  </label>
                </div>
                <div className="relative z-0">
                  <input
                    type="text"
                    name="from_email"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                   contry
                  </label>
                </div>
                <div className="relative z-0 col-span-2">
                  <input
                    
                    type="number"
                    name="from_email"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                    phone
                  </label>
                </div>
              </div>
              
            </form>
          </div>
        </div>       
      </div>
      <div>
        <div className="flex flex-col  sm:flex-row justify-center sm:justify-around items-center my-12 border-t-2 pt-20 w-full">
          <div className="w-1/2 ">
            <h1 className="text-4xl my-2">Cart Total</h1>
            <div className="text-2xl font-serif flex flex-col gap-1 pt-2 ">
              <p className="border-t">Subtotal : ${getTotalCartAmount()===0?0:2}</p>
              <p className="border-t">Delevary Fee : $2</p>
              <p className="border-t">Total : ${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
            </div>
            <Link to="/plaseorder">
              <button
                className={`${
                  getTotalCartAmount() === 0 ? "hidden" : ""
                } btn bg-orange-500 border-t-orange-500 text-white my-6`}
              >
                Proceed To Checkout
              </button>
            </Link>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Places;
