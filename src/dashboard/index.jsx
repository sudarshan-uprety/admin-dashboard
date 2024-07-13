import React from "react";
import NavBar from "../NavBar";
import Products from "../products/Products";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex">
      <NavBar />
      <Outlet />
    </div>
  );
}
