import EmptyShoppingCard from '@/components/EmptyShoppingCard'
import ShoppingCardSingleItem from '@/components/ShoppingCardSingleItem'
import React from 'react'
import { useSelector } from 'react-redux'

const ShoppingCard = () => {
    const state = useSelector(state => state.shoppingCardSlice)
    return (
        <div className='w-full flex justify-start items-center flex-col bg-gray-200 text-black p-2'>
            <h2>سبد خرید</h2>
            {
                state.totalCount !== 0 ? (<div className='flex gap-2 shadow w-full'>
                    <div className='flex justify-start items-center flex-col p-5 rounded-md gap-2 shadow-xl w-1/3 h-full sticky'>
                        <h3>مجموع خرید شما</h3>
                        <p>{`تعداد اقلام ${state.totalCount}`}</p>
                        <p>{` مجموع مبلغ : ${state.totalPrice}`}</p>
                        <button className='mt-3 w-full px-4 py-1 bg-red-700 text-white rounded-md hover:scale-105 transition-transform duration-300'>پرداخت</button>
                    </div>
                    <div className='flex justify-start items-stretch flex-col w-2/3 gap-2'>
                        {
                            state.items.map((item, index) => (
                                <ShoppingCardSingleItem products={item} key={index} />
                            ))
                        }
                    </div>
                </div>) : <EmptyShoppingCard />
            }
        </div>
    )
}

export default ShoppingCard