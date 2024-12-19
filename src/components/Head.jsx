import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=> {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-cols-12 p-4 border-b-2">
      <div className="flex col-span-1 ">
        <img
        onClick={()=>toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://w7.pngwing.com/pngs/451/380/png-transparent-hamburger-button-computer-icons-menu-menu-rectangle-desktop-wallpaper-button.png"
          alt=""
        />

        <img
        className="h-8 mx-2 "
          src="https://cdn.pixabay.com/photo/2015/04/13/17/45/icon-720950_640.png"
          alt=""
        />
      </div>

      <div className="col-span-10 text-center">
        <input className="2px solid border border-gray-400 rounded-l-full p-1 w-1/2 " placeholder="Search..." type="text" />
        <button className="border border-gray-400 rounded-r-full p-1 bg-gray-100">🔍</button>
      </div>

      <div className="col-span-1">
        <img
        className="h-8"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
