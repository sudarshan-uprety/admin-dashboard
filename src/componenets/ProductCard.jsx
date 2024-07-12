import React from "react";

export default function ProductCard({
  name,
  description,
  category,
  image,
  price,
}) {
  return (
    <div className="flex-col border-solid rounded-lg shadow-xl">
      <img src={image} width={200} height={200} alt="Logo" />
      <h2 className="text-center text-gray-400 mt-5">{category}</h2>
      <h1 className="font-bold text-center">{name}</h1>
      <p className="text-[12px] text-center">{description}</p>
      <p className="text-[15px] text-center font-bold text-blue-500">
        {price} NRP
      </p>
    </div>
  );
}
