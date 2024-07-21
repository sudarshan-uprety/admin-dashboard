import React, { useEffect, useState } from "react";
import ProductCard from "../componenets/ProductCard";
import { myProductsAPI } from "../API";
import ReactPaginate from "react-paginate";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  async function getData(myPage) {
    const data = await myProductsAPI(myPage);
    setTotalPage(Number(data.data.data.total_pages));
    setProductData(data.data.data.data);
    // if (productData.length > 0) {
    //   setProductData((prev) => [...prev, ...data.data.data.data]);
    // } else {
    //   setProductData(data.data.data.data);
    // }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData(page);
  }, [page]);

  const handlePageClick = (event) => {
    setPage(event.selected + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div>
        <h1>My Products</h1>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg h-full">
        <table className="w-full h-full text-lg text-left text-gray-500 border-spacing-4">
          <thead className="uppercase bg-gray-200">
            <tr className=" py-4">
              <th scope="col" className="text-center py-4">
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
      <div className="flex justify-center mt-8">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={totalPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination flex gap-2"}
          pageClassName={"px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"}
          pageLinkClassName={"text-gray-700"}
          previousClassName={
            "px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          }
          previousLinkClassName={"text-gray-700"}
          nextClassName={"px-3 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"}
          nextLinkClassName={"text-gray-700"}
          breakClassName={"px-3 py-2"}
          breakLinkClassName={"text-gray-700"}
          activeClassName={"bg-blue-500"}
          activeLinkClassName={"text-white"}
        />
      </div>
    </div>
  );
}
