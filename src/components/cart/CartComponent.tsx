'use client'

import {FaWeight, FaPlus} from 'react-icons/fa';
import MethodHeader from '../component/Header/MethodHeader';
import OrderSummary from './orderSummary/OrderSummary';
import GrandTotal from './GrandTotal/GrandTotal';

import {useState, useEffect} from 'react'
import Link from 'next/link';

interface MethodHeaderProps{
    // title: string,
    // weight: string,
    // price: string,
}

const CartComponent: React.FC<MethodHeaderProps> = (props) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const updateTotalPrice = (price: number) => {
        setTotalPrice(price);
    };

    return (
        <div className='min-h-[100vh] bg-primaryColor flex flex-col justify-between'>
            {/* Header */}
            <div ><MethodHeader/></div>
            <div className='my-10'></div>

            {/* Order Summary */}
            <div> <OrderSummary updateTotalPrice={updateTotalPrice} /> </div>

            <div className='my-5'></div>

            {/* Total Price component */}
            <div> <GrandTotal totalPrice={totalPrice}/> </div>

            {/* Order now button */}
            <div className='py-5 bg-secondaryColor mt-8 flex justify-center items-center  md:mx-60 md:rounded-3xl md:mb-10'> 
                <Link href="/payment"><button className='transition-all text-white  bg-gray-700 py-3 px-16 rounded-2xl hover:shadow-2xl hover:scale-105'>
                    ORDER NOW
                </button>  </Link>  
            </div>
        </div>
    )
}

export default CartComponent
