import React from "react";
import { useParams } from "react-router-dom";
import {
  productDetailAPI,
  categoryAPI,
  sizeAPI,
  typeAPI,
  colorAPI,
} from "../API";
import { useState, useEffect } from "react";

export default function productDetails() {
  const { id } = useParams();

  const [productData, setProductData] = useState({});

  const [formDetails, setFormDetails] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
    size: "",
    type: "",
    color: "",
    status: "",
    category: "",
  });

  const [subData, setSubData] = useState({
    category: [],
    size: [],
    type: [],
    color: [],
  });

  const handleFormFieldChange = (event) => {
    setFormDetails({
        event.target.name: event.target.value,
    })
  }

  const getData = async () => {
    const productData = await productDetailAPI(id);
    setProductData(productData);
    const categoryData = await categoryAPI();
    const colorData = await colorAPI();
    const sizeData = await sizeAPI();
    const typeData = await typeAPI();

    setSubData({
      category: categoryData.data.data.data,
      size: sizeData.data.data.data,
      color: colorData.data.data.data,
      type: typeData.data.data.data,
    });

    setFormDetails({
      category: productData.category,
      color: colorData.data.data.data,
      name: productData.data.data.name,
      price: productData.data.data.price,
      quantity: productData.data.data.quantity,
      size: sizeData.data.data.data,
      status: true,
      type: typeData.data.data.data,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target.values);
  };

  return (
    <div className="w-screen h-screen grid place-items-center ">
      <div className="px-8 py-8 border-solid rounded-lg shadow-2xl h-full w-full">
        <form
          className="flex flex-col gap-4 w-full h-full mt-10 px-16 pb-6"
          // onSubmit={handleSubmit}
        >
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="name">
                Product Name
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="text"
                required
                id="name"
                name="name"
                placeholder="Product Name"
                onChange={handleFormFieldChange}
                value={formDetails.name || ""}
              />
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="price">
                Price
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="text"
                required
                id="price"
                name="price"
                placeholder="Price"
                // onChange={handlePriceChange}
                value={formDetails.price || ""}
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="name">
                Category
              </label>
              <select
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                name="category"
                id="category"
                value={formDetails?.category}
                // onChange={handleCategoryChange}
              >
                <option>Select category</option>
                {subData?.category?.length > 0 &&
                  subData?.category?.map((cat) => {
                    return (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="price">
                Size
              </label>
              <select
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                name="size"
                id="size"
                value={productData?.size?.id}
                // onChange={handleSizeChange}
              >
                <option>Select size</option>
                {subData?.size.length > 0 &&
                  subData?.size.map((s) => {
                    return (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="name">
                Type
              </label>
              <select
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                name="type"
                id="type"
                value={productData?.type?.id}
                // onChange={handleTypeChange}
              >
                <option>Select type</option>
                {subData?.type.length > 0 &&
                  subData?.type.map((t) => {
                    return (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="price">
                Color
              </label>
              <select
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                name="color"
                id="color"
                value={productData?.color?.id}
                // onChange={handleColorChange}
              >
                <option>Select color</option>
                {subData?.color.length > 0 &&
                  subData?.color.map((c) => {
                    return (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="stock">
                Quantity
              </label>
              <input
                className="px-2 py-1 h-10 w-60 rounded-lg bg-gray-100 mt-3"
                type="number"
                required
                id="stock"
                name="stock"
                placeholder="Quantity"
                // onChange={handleQuantityChange}
                value={formDetails.quantity}
              />
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-5">
              <label className="text-sm" htmlFor="stock">
                Status
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="status"
                  id="status"
                  // checked={
                  //   selectedStatus !== undefined
                  //     ? selectedStatus
                  //     : !!productData?.status
                  // }
                  value={productData?.status}
                  // onChange={handleStatusChange}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
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
