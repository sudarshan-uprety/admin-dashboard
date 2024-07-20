import React from "react";

export default function ProductCard({
  productData,
  id,
  name,
  category,
  image,
  price,
  type,
}) {
  return (
    <tr className="product-list p-24 m-24">
      <td className="text-center">
        {productData.findIndex((p) => p.id === id) + 1}
      </td>
      <td className="text-center">{name}</td>
      <td className="text-center">{price}</td>
      <td className="text-center">{category}</td>
      <td className="text-center">{type}</td>
      <td className="grid place-items-center">
        <img src={image} width={20} height={20} alt={name} />
      </td>
    </tr>
  );
}
