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

  const [productData, setProductData] = useState();
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  const getData = async () => {
    const productData = await productDetailAPI(id);
    setProductData(productData.data.data);

    const categoryData = await categoryAPI();
    setCategory(categoryData.data.data.data);

    const colorData = await colorAPI();
    setColor(colorData.data.data.data);

    const sizeData = await sizeAPI();
    setSize(sizeData.data.data.data);

    const typeData = await typeAPI();
    setType(typeData.data.data.data);
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
                Product Name
              </label>
              <input
                className="px-2 py-1 h-10 w-full rounded-lg bg-gray-100 mt-3"
                type="text"
                required
                id="name"
                name="name"
                placeholder="Product Name"
                value={productData && productData.name}
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
                value={productData && productData.price}
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
                name="cars"
                id="cars"
              >
                <option>Select category</option>
                {category.length > 0 &&
                  category.map((cat) => {
                    return (
                      <option
                        value={cat.id}
                        selected={
                          productData?.category?.id &&
                          productData.category.id === cat.id
                        }
                      >
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
              >
                <option>Select size</option>
                {size.length > 0 &&
                  size.map((s) => {
                    return (
                      <option
                        value={s.id}
                        selected={
                          productData?.size?.id && productData.size.id === s.id
                        }
                      >
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
              >
                <option>Select type</option>
                {type.length > 0 &&
                  type.map((t) => {
                    return (
                      <option
                        value={t.id}
                        selected={
                          productData?.type?.id && productData.type.id === t.id
                        }
                      >
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
                name="cars"
                id="cars"
              >
                <option>Select color</option>
                {color.length > 0 &&
                  color.map((c) => {
                    return (
                      <option
                        value={c.id}
                        selected={
                          productData?.color?.id &&
                          productData.color.id === c.id
                        }
                      >
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
                value={productData && productData.stock}
              />
            </div>
            <div className="grid w-full">
              <label className="text-sm" htmlFor="stock">
                Status
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
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
