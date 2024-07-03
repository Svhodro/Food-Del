import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { RxCross2 } from "react-icons/rx";
function Cart() {
  const { food_list, cartItem, removecart ,getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="">
      <div className="overflow-x-auto min-h-[300px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Item</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantitu </th>
              <th>total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {food_list.map((item, index) => {
              if (cartItem[item._id] > 0) {
                return (
                  <tr>
                    <th>
                      <img src={item.image} alt="img" className="w-14" />
                    </th>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{cartItem[item._id]}</td>
                    <td>${item.price * cartItem[item._id]}</td>
                    <td
                      className="cursor-pointer"
                      onClick={() => removecart(item._id)}
                    >
                      <RxCross2 />
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col  sm:flex-row justify-center sm:justify-around items-center my-12 border-t-2 pt-20 w-full">
      
        <div className="w-1/2 ">
        <h1 className="text-4xl my-2">Cart Total</h1>
          <div className="text-2xl font-serif flex flex-col gap-1 pt-2 ">
            <p className="border-t">Subtotal : {getTotalCartAmount()}</p>
            <p className="border-t">Delevary Fee : 2</p>
            <p className="border-t">Total : {getTotalCartAmount()+2}</p>
           
          </div>
          <button className="btn bg-orange-500 border-t-orange-500 text-white my-6" >Proceed To Checkout</button>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-4">
          <p className="text-start text-xl " >if you have a promo code enter it here</p>
          <div className="flex justify-start items-center">
          <input type="text" placeholder="prom code" className="input input-bordered w-full max-w-xs rounded-none rounded-l-lg" />
          <button className="btn btn-active rounded-none rounded-r-lg">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
