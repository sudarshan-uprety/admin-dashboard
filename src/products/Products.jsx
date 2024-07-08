import React from "react";
import NavBar from "../NavBar";
import ProductCard from "../componenets/ProductCard";

export default function Products() {
  return (
    <ProductCard
      name="Sudarshan"
      description="This is description"
      price="120"
      image="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      category="Cloths"
    />
  );
}
