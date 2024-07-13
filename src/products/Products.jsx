import React from "react";
import NavBar from "../NavBar";
import ProductCard from "../componenets/ProductCard";
import { productsAPI } from "../API";
import { useEffect } from "react";
import { useState } from "react";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  async function getData(myPage) {
    const data = await productsAPI(myPage);
    setTotalPage(Number(data.data.data.total_pages));

    if (productData.length > 0) {
      setProductData((prev) => [...prev, ...data.data.data.data]);
    } else {
      setProductData(data.data.data.data);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prev) => {
      return prev + 1;
    });
  };

  const productDetails = (id) => {};

  return (
    <div className="w-full">
      <h1>Product List</h1>
      <div className="grid grid-cols-5 w-full gap-12 ">
        {productData?.length > 0 &&
          productData.map((product) => {
            return (
              <ProductCard
                name={product?.name}
                description={product?.description}
                price={product?.price}
                image={product?.image}
                category={product?.category?.name}
              />
            );
          })}
      </div>
      <div className="w-full py-4 text-center mt-16">
        {page < totalPage && (
          <button
            className="bg-blue-600 px-10 py-4 rounded-full text-white text-xl"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
