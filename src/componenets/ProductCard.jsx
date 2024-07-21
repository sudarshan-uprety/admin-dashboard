import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  productData,
  id,
  name,
  category,
  image,
  price,
  type,
}) {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/products/${id}`);
  };
  return (
    <tr
      onClick={handleRowClick}
      className="h-10 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
    >
      {" "}
      <td className="text-center">
        {productData.findIndex((p) => p.id === id) + 1}
      </td>
      <td className="text-center">{name}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{category}</td>
      <td className="text-center">{type}</td>
      <td className="grid h-full place-items-center ">
        <img
          className="w-[30px] h-[30px] object-cover"
          src={image}
          width={50}
          height={50}
          alt={name}
        />
      </td>
    </tr>
  );
}
