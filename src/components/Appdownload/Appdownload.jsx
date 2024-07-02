import React from "react";
import { assets } from "../../assets/assets";

function Appdownload() {
  return (
    <div id="app" className="h-[400px] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center my-6 gap-6">
        <div>
          <p className="text-2xl sm:text-4xl font-bold text-center mb-4">For The Better Experience Download <br />Tomato App</p>
        </div>
        <div className="flex gap-4 justify-center items-center flex-wrap">
          <img src={assets.play_store} alt="img" />
          <img src={assets.app_store} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Appdownload;
