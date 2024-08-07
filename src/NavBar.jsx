import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { TbView360 } from "react-icons/tb";

export default function NavBar() {
  return (
    <div className="h-screen shadow-lg w-2/12 text-sm pt-6 bg-gray-100 ">
      <img src="../logo.png" alt="Logo" />
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
  );
}
