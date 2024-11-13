import React from 'react'
import ShoppingCounter from './ShoppingCounter'
import Image from 'next/image'

const ShoppingCardSingleItem = ({products}) => {
    return (
        <div className='flex flex-row-reverse w-full justify-start items-stretch p-2 gap-5 rounded'>
            <Image src={products.image} width={60} height={60} className='aspect-square w-1/6 rounded-lg' />
            <div className='flex flex-col justify-center items-end gap-1 flex-grow 2'>
                <h4 className='text-end w-full'>{products.title}</h4>
                <p>{products.price}</p>
                <ShoppingCounter products={products} />
            </div>
        </div>
    )
}

export default ShoppingCardSingleItem