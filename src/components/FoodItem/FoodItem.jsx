import React from "react";
import { assets } from "../../assets/assets";

function FoodItem({ item }) {
  const { category, description, image, name, price, _id } = item;

  return (
    <div className="max-w-72  mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={image} alt="" />

        <div className="p-5">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
            {name}
          </h5>
          <img src={assets.rating_starts} alt="" />
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
