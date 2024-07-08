import React from 'react'

export default function ProductCard() {
  return (
    <div className="flex-col border-solid rounded-lg shadow-xl">
        <div className=''>
          <img src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={200} height={200} alt="Logo" />
        </div>
        <div className='h-full p-4'>
          <h2 className="text-center text-gray-400 mt-5">Category</h2>
          <h1 className="font-bold text-center">Amazon Store</h1>
          <p className="text-[12px] text-center">This is description</p>
          <p className="text-[15px] text-center font-bold text-blue-500">12,00 NRP</p>
        </div>
    </div>
  )
}
