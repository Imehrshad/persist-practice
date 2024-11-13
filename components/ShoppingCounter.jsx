import { decreaseCount, increaseCount, removeItem } from '@/redux/features/shoppingCard/shoppingCardReducer'
import React from 'react'
import { FaMinus, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingCounter = ({products}) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.shoppingCardSlice)
    const itemDetails = state.items.find(item => item.id === products.id)
    
  return (
    <div className=' border-2 shadow flex justify-between gap-4 items-center px-2 py-3 rounded-md'>
    {itemDetails.count > 1 ? <FaMinus className="cursor-pointer text-sm" color="red" onClick={() => dispatch(decreaseCount(itemDetails.id))} /> : <FaRegTrashAlt className="cursor-pointer text-sm" color='red' onClick={() => dispatch(removeItem(products.id))} />}
    <p className='text-sm'>{itemDetails.count}</p>
    <FaPlus className="cursor-pointer text-sm" color="red" onClick={() => dispatch(increaseCount(itemDetails.id))} />
</div>
  )
}

export default ShoppingCounter