import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { TbView360 } from "react-icons/tb";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
    <div className="flex h-screen w-screen">
      <div className="h-screen shadow-lg w-2/12 text-sm pt-6 bg-orange-100 ">
        <img src="../public/logo.png" alt="Logo" />
        <ul className="grid gap-12 p-4">
          <p className="flex items-center gap-2">
            <TbView360 />
            Overview
          </p>
          <p className="flex items-center gap-2">
            <AiFillProduct />
            Products
          </p>
          <p className="flex items-center gap-2">
            <IoBagHandleSharp />
            Orders
          </p>
          <p className="flex items-center gap-2">
            <MdOutlineAccountCircle />
            Account Settings
          </p>
          <p className="flex items-center gap-2">
            <MdLogout />
            Logout
          </p>
        </ul>
      </div>
      <div className=" h-screen w-screen bg-red-300">
        <Outlet />
      </div>
    </div>
    <div className="w-screen bottom-0 fixed shadow-lg text-sm py-6 bg-blue-100 flex">
      <div className="text-base text-left grid w-full h-full">
        &copy; Quick Cart
      </div>
      <div className="text-base text-right grid w-full h-full">
        Design and developed by Sudarshan.
      </div>
    </div>
    </div>
  );
}

export default NavBar;
