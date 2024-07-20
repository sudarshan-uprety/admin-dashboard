import React from "react";
import { useParams } from "react-router-dom";
import {
  productDetailAPI,
  categoryAPI,
  sizeAPI,
  typeAPI,
  colorAPI,
  updateProductAPI,
} from "../API";
import { useState, useEffect } from "react";

export default function productDetails() {
  const { id } = useParams();

  const [productId, setProductId] = useState();

  const [formDetails, setFormDetails] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
    category: "",
    size: "",
    type: "",
    color: "",
    status: "",
    category: "",
    description: "",
  });

  const [subData, setSubData] = useState({
    category: [],
    size: [],
    type: [],
    color: [],
  });

  const handleFormFieldChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormDetails((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getData = async () => {
    const productData = await productDetailAPI(id);
    setProductId(productData?.data?.data?.id);
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
      category: productData?.data?.data?.category?.id,
      color: productData?.data?.data?.color?.id,
      name: productData?.data?.data?.name,
      image: productData?.data?.data?.image,
      description: productData?.data?.data?.description,
      price: productData?.data?.data?.price,
      stock: productData?.data?.data?.stock,
      size: productData?.data?.data?.size?.id,
      status: productData?.data?.data?.status,
      type: productData?.data?.data?.type?.id,
    });
  };

  const handleImageChange = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setFormDetails((prevState) => ({
      ...prevState,
      image: url,
    }));
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = await updateProductAPI(productId, formData);
    if (data.status === 200) {
      console.log("submitted");
    }
  };

  return (
    <div className="w-screen h-screen grid place-items-center ">
      <div className="px-8 py-8 border-solid rounded-lg shadow-2xl h-full w-full">
        <form
          className="flex flex-col gap-4 w-full h-full mt-10 px-16 pb-6"
          onSubmit={handleSubmit}
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
                onChange={handleFormFieldChange}
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
                onChange={handleFormFieldChange}
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
                value={formDetails?.size}
                onChange={handleFormFieldChange}
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
                value={formDetails?.type}
                onChange={handleFormFieldChange}
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
                value={formDetails?.color}
                onChange={handleFormFieldChange}
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
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="number"
                required
                id="stock"
                name="stock"
                placeholder="Quantity"
                onChange={handleFormFieldChange}
                value={formDetails.stock || ""}
              />
            </div>
            <div className="grid w-full justify-center">
              <label className="text-sm" htmlFor="stock">
                Status
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="status"
                  id="status"
                  checked={formDetails.status}
                  value={formDetails.status}
                  onChange={handleFormFieldChange}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="grid w-full">
              <label className="text-sm" htmlFor="description">
                Description
              </label>
              <textarea
                className="px-2 py-1 h-[400px] w-full rounded-lg bg-gray-100 mt-3"
                name="description"
                id="description"
                placeholder="Description"
                onChange={handleFormFieldChange}
                value={formDetails.description || ""}
              />
            </div>
            <div className="grid w-full">
              <div className="grid place-items-center">
                <label className="text-sm" htmlFor="price">
                  image
                </label>
                <img
                  className="h-[400px] w-full"
                  src={formDetails.image}
                  alt=""
                />
                <input
                  onChange={handleImageChange}
                  className="mt-4"
                  type="file"
                />
              </div>
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
