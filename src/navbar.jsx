import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { TbView360 } from "react-icons/tb";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
      <div className="flex h-screen w-screen">
        <div className="h-screen shadow-lg w-2/12 text-sm pt-6 bg-orange-100 ">
          <img src="../public/logo.png" alt="Logo" />
          <ul className="grid gap-12 p-4">
            <p className="flex items-center gap-2">
              <TbView360 />
              Overviews
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
        <div className=" h-screen w-screen">
          <Outlet />
        </div>
      </div>
  );
}

export default NavBar;
