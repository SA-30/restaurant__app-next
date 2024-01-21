'use client'

import React, { useContext, useEffect } from 'react'
import CreditCard from './components/CreditCard'
import MethodHeader from '../component/Header/MethodHeader'
import GrandTotal from '../cart/GrandTotal/GrandTotal'
import Upi from './components/Upi'
import MorePayment from './components/MorePayment'
import { CartContext } from '../appContext'

const PaymentComponent = () => {
    const {clearCart} =  useContext(CartContext);

    useEffect(() => {
        if(typeof window.console !== "undefined"){
            if(window.location.href.includes('clear-cart=1')){
                clearCart()
            }
        }
    }, [])

    return (
        <div className='min-h-[100vh] bg-primaryColor flex flex-col '>
            {/* Header */}
            <div ><MethodHeader/></div>
            <div className='my-10'></div>
            <h1 className='text-red-600 text-center font-bold text-5xl my-5'>Your Order</h1>
            
            <div className='flex md:flex-row flex-col m-2 md:m-0 sm:gap-0 gap-10 font-semibold justify-around'>
                Thanks for your order
            </div>
            <div className='flex md:flex-row flex-col m-2 md:m-0 sm:gap-0 gap-10 justify-around'>
                We will call you when your order gets ready
            </div>
        </div>
    )
}

export default PaymentComponent
