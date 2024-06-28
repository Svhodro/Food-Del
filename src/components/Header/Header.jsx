import React from "react";
import { assets } from "../../assets/assets";
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div className="rounded-xl overflow-hidden">
      <div
        className="hero h-[350px] md:h-[450px] "
        style={{
          backgroundImage: `url(${assets.header_img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content  text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl sm:text-5xl font-bold">
              <Typewriter
                options={{
                  strings: ["Order your", " Favourite food here"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="sm:mb-5 mb-2">
              Choose from a diverse manu featuring a delectable array of dishes
              crafled with the finest in gredients and cutinary expertise Our
              mission is to satisfy your craviungs and elevate your dining
              experierince one delicious meal at a time
            </p>
            <button className="btn bg-white border-white rounded-2xl">
              View Manu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
