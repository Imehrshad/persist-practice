import Link from 'next/link';
import React from 'react'
import ShoppingCounter from './ShoppingCounter';
const ShoppingBox = ({ products }) => {

    return (
        <div className='w-full bg-gray-50  flex justify-between items-center p-2 gap-2 rounded-md '>
            <Link href="/ShoppingCard" className='text-blue-500 cursor-pointer hover:text-blue-800 text-center '>
                مشاهد سبد خرید
            </Link>
            <ShoppingCounter products={products} />
        </div>
    )
}

export default ShoppingBox