import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import ProductCard from "../componenets/ProductCard";
import { myProductsAPI } from "../API";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  async function getData(myPage) {
    const data = await myProductsAPI(myPage);
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
    setPage((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full h-screen text-lg text-left text-gray-500">
          <thead className=" text-gray-700 uppercase bg-gray-50 ">
            <tr className="bg-slate-400 py-4">
              <th scope="col" className="text-center ">
                S.N
              </th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col" className="text-center">
                Price
              </th>
              <th scope="col" className="text-center">
                Category
              </th>
              <th scope="col" className="text-center">
                Type
              </th>
              <th scope="col" className="text-center">
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            {productData?.length > 0 &&
              productData.map((product) => (
                <ProductCard
                  key={product.id}
                  productData={productData}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  category={product.category?.name}
                  type={product.type?.name}
                  size={product.size?.name || "N/A"}
                  color={product.color?.hex || "N/A"}
                />
              ))}
          </tbody>
        </table>
      </div>
      <div className="w-full py-4 text-center mt-8">
        {page < totalPage && (
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
