import Link from 'next/link';
import React from 'react'
import { FaBasketShopping } from "react-icons/fa6";

const EmptyShoppingCard = () => {
    return (
        <div className='w-full flex justify-center items-center flex-col p-2'>
            <FaBasketShopping size={300}/>
            <h1 className='font-bold text-[1.3rem]'>سبد خرید شما خالی می باشد</h1>
            <Link href="/" className='text-blue-600 hover:text-blue-900 font-bold'>بازگشت به صفحه اصلی</Link>
        </div>
    )
}

export default EmptyShoppingCard