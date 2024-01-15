import React from 'react'
import CreditCard from './components/CreditCard'
import MethodHeader from '../component/Header/MethodHeader'
import GrandTotal from '../cart/GrandTotal/GrandTotal'
import Upi from './components/Upi'
import MorePayment from './components/MorePayment'


const PaymentComponent = () => {

    return (
        <div className='min-h-[100vh] bg-primaryColor flex flex-col justify-between'>
            {/* Header */}
            <div ><MethodHeader/></div>
            <div className='my-10'></div>
            
            {/* Grand Total - use redux for state managemnt*/}
            {/* <GrandTotal /> */}


            {/* Credit & Debit Cards */}
            <h1 className='text-white mx-5 md:mx-60 text-xl my-5'>Credit & Debit Cards</h1>
            <CreditCard />

            <div className='my-2'></div>

            {/* UPI like Phone Pay */}
            <h1 className='text-white mx-5 md:mx-60 text-xl my-5'>UPI</h1>
            <Upi />

            <div className='my-2'></div>

            {/* Other like Esewa/khalti cod */}
            <h1 className='text-white mx-5 md:mx-60 text-xl my-5'>More Payment Options</h1>
            <MorePayment />
        </div>
    )
}

export default PaymentComponent
