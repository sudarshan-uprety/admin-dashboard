import React from "react";
import NavBar from "../NavBar";
import ProductCard from "../componenets/ProductCard";
import { productsAPI } from "../API";
import { useEffect } from "react";
import { useState } from "react";

export default function Products() {
  const [productData, setProductData] = useState();
  async function getData() {
    const data = await productsAPI();
    setProductData(data.data.data.data);
  }
  useEffect(() => {
    getData();
  }, []);

  console.log(productData);

  return (
    <div>
      <h1>Product List</h1>
      {productData?.length > 0 &&
        productData.map((product) => {
          return (
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category.name}
            />
          );
        })}
    </div>
  );
}
