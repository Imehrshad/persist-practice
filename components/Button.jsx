import { addNewProduct } from '@/redux/features/shoppingCard/shoppingCardReducer'
import React from 'react'
import { useDispatch } from 'react-redux'

const Button = ({products}) => {

    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(addNewProduct(products))

    }
    return (
        <button className='w-full px-4 py-2 bg-red-700 text-white rounded-md hover:scale-105 transition-transform duration-300'onClick={clickHandler}>خرید</button>
    )
}

export default Button