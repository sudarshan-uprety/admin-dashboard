import React from "react";
import { useParams } from "react-router-dom";
import { productDetailAPI } from "../API";

export default function productDetails() {
  const { id } = useParams();

  const getData = async () => {
    const data = await productDetailAPI(id);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-screen h-screen grid place-items-center ">
      <div className="px-8 py-8 border-solid rounded-lg shadow-2xl h-full w-full">
        <form className="flex flex-col gap-4 w-full h-full mt-10 px-16 pb-6">
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="name">
                Store Name
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="text"
                required
                id="name"
                name="name"
                placeholder="Store Name"
              />
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="username">
                Username
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="text"
                required
                id="username"
                name="username"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="phone">
                Phone
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="text"
                required
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg  bg-gray-100 mt-3"
                type="email"
                required
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="password"
                required
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="confirm_password">
                Confirm Password
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="password"
                required
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="address">
                Address
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="text"
                required
                id="address"
                name="address"
                placeholder="Address"
              />
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="state">
                State
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="text"
                required
                id="state"
                name="state"
                placeholder="State"
              />
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="city">
                City
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="text"
                required
                id="city"
                name="city"
                placeholder="City"
              />
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center mt-6">
            <button
              className="px-6 py-2 text-lg rounded-lg bg-gray-600 text-white hover:bg-gray-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
