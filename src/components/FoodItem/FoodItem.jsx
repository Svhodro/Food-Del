import React, { useContext} from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ item }) {
  const { category, description, image, name, price, _id } = item;
  const { cartItem, adtocart, removecart } = useContext(StoreContext);

  return (
    <div className="max-w-64  mx-auto">
      <div className="bg-white  shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="relative ">
          <img className="rounded-t-lg w-full" src={image} alt="" />
          <div className="absolute bottom-6 left-3">
            {!cartItem[_id] ? (
              <img
                src={assets.add_icon_white}
                className="cursor-pointer"
                onClick={() => adtocart(_id)}
              />
            ) : (
              <div className="rounded-2xl bg-white cursor-pointer flex gap-2">
                {" "}
                <img
                  src={assets.remove_icon_red}
                  alt=""
                  onClick={() => removecart(_id)}
                />
                <p className="text-xl text-slate-950 font-bold text-center">
                  {cartItem[_id]}
                </p>
                <img
                  src={assets.add_icon_green}
                  alt=""
                  onClick={() =>adtocart(_id) }
                />
              </div>
            )}
          </div>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-center">
            <h5 className="text-gray-900 font-bold text-base tracking-tight mb-2 dark:text-white">
              {name}
            </h5>
            <img src={assets.rating_starts} alt="" />
          </div>

          <p className="font-bold">{category}</p>

          <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
            {description}
          </p>
          <p className="font-bold text-orange-500 text-2xl">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
