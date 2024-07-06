import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

export default function App() {
  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  );
}
