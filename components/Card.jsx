import React from 'react'
import Button from './Button';
import { useSelector } from 'react-redux';
import ShoppingBox from './ShoppingBox';

const Card = (props) => {
    const state = useSelector(state => state.shoppingCardSlice)

    const { products, index, ...otherProps } = props;
    return (
        <div className='w-full bg-white text-black flex justify-evenly items-center flex-col rounded-lg gap-2 px-2 py-4 '{...otherProps} >
            <img src={products.image} alt={products.title} className='aspect-square w-2/3 rounded' />
            <p className='w-full overflow-hidden text-center whitespace-nowrap text-ellipsis px-2'>{products.title}</p>
            <p>{`${products.price} $`}</p>
            {state.items.find(item => item.id === products.id) ? (< ShoppingBox products={products} />) : (< Button products={products} />)
            }

        </div>
    )
}

export default Card