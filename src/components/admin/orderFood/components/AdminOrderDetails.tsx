'use client'

import {  FaWeight, FaCross } from 'react-icons/fa';
import {AiOutlineFullscreenExit} from 'react-icons/ai'
import { useAppSelector } from '@/hook/redux-toolkit/store';
import { useState } from 'react';

function AdminOrderDetails({selectedOrder}: any) {
    const [pending, setPending] = useState(false)

    const imgUrl = '/assets/images/momoc.jpg';
    const weight = '1 plate';

    const selectedOrderFromRedux = useAppSelector(state => state.orderReducer.value)
   
    const totalPrice = 120;
    const tax = totalPrice * 13/100;
    const GrandTotal = totalPrice + tax + 99;

    const handlePending = () => {
        setPending(true)
    }

    const handlePaid = () => {
        // send data to api/order route to
        // set paid to true
        setPending(false)
    }

    return (
        <div className='text-black  md:h-screen flex flex-col md:justify-between gap-5 md:gap-0 md:mr-5'>
            <div className='shadow-sm shadow-[#00000075] bg-gray-200  flex flex-col px-5 mt-5 py-5'>
                <div>
                    <div className='flex flex-col justify-between '>
                        <div className='flex justify-between items-center ' >
                            <div className='flex items-center gap-3'>
                                <div className={`bg-[#e9485088] text-[16px] rounded-[50%] p-2 flex items-center h-[2rem] w-[2rem] justify-center`}>
                                {selectedOrderFromRedux && selectedOrderFromRedux.face  }
                            </div>
                                <h2 className='text-lg font-bold'>{selectedOrderFromRedux && selectedOrderFromRedux.customerName}</h2>
                            </div>
                            <div className={`relative flex flex-col gap-3 ${pending && 'border-2 border-gray-500 p-2 pt-6 rounded-md'}`}>
                                {!pending && 
                                    <div
                                        onClick={handlePending}
                                        className={`relative text-white cursor-pointer text-[12px] px-5 py-1 rounded-2xl flex justify-center items-center ${selectedOrderFromRedux && selectedOrderFromRedux.status == true? 'bg-[#56ad56]' : 'bg-[#aa5959]'}`}
                                    >
                                        <p>{ selectedOrderFromRedux.status == false ? 'Pending' : 'Paid'}</p>
                                    </div>
                                }
                                { pending && (
                                    <div>
                                        <div 
                                            onClick={() => setPending(false)}
                                            className='absolute z-10 top-0 left-[50%] translate-x-[-50%] '><AiOutlineFullscreenExit size={20}/></div>
                                        <div 
                                            onClick={handlePaid}
                                            className={`relative text-white cursor-pointer text-[12px] px-5 py-1 rounded-2xl flex justify-center items-center bg-[#56ad56]`}
                                        >
                                            <p>Paid</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='border-b-[1px] border-gray-500 mt-7 mb-5'></div>
                    </div>
                    <div>
                    </div>
                </div>
                <div>
                    <div className='h-40 hide-scroolbar overflow-y-scroll flex flex-col justify-center gap-10 mb-5'>
                        {(Array.isArray(selectedOrderFromRedux.dish) ? selectedOrderFromRedux.dish : []).map((product, index) => (
                            <div key={index} className='flex flex-row rounded-2xl items-center gap-5'>
                                {/* Render the product image */}
                                <div className='h-[40px] w-[50px] flex items-center justify-center rounded-[50%] bg-center bg-cover' style={{ backgroundImage: `url(${product.imgUrl})` }}></div>

                                {/* Render product details */}
                                <div className='flex flex-col gap-2 w-full justify-center rounded-r-2xl'>
                                    <h2 className='font-bold text-sm'>{product.title}</h2>
                                    <div className='flex gap-2 items-center justify-start'>
                                        <FaWeight className='opacity-50' size={10} />
                                        <p className='text-[12px] font-medium'>{product.weight}</p>
                                        <h2 className='text-[12px] font-bold'>{product.price}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Total Payment */}
            <div className='shadow-sm shadow-[#00000075] bg-gray-200 px-10 pt-5 mb-20 md:mb-5 '>
                <div>
                <div className='flex justify-between items-center mx-5' >
                        <h2 className='text-[12px] font-semibold'>Total Payment</h2>
                    <p className='cursor-pointer text-[12px]  px-2 py-1 border-[1px] flex justify-center items-center border-gray-600'>COD</p>
                </div>

                <div className='border-b-[1px] border-gray-500 mt-4 mx-5'></div>

                <div className='p-5 '>
                <div className='flex justify-between '>
                    <h3 className=' text-[14px]'>Subtotal</h3>
                    <h3 className=' text-[14px] font-semibold'>Rs &nbsp; {totalPrice}</h3>
                </div>
                <div className='px-5'>
                    <div className='flex justify-between mt-4'>
                        <h3 className='text-gray-800 font-semibold text-[12px]'>Tax</h3>
                        <h3 className='text-gray-800 font-semibold text-[12px]'>Rs {tax}</h3>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <h3 className='text-gray-800 font-semibold text-[12px]'>Delivery Fee</h3>
                        <h3 className='text-gray-800 font-semibold text-[12px]'>Rs 99</h3>
                    </div>
                    </div>
                    {/* DIVIDER */}
                    <div className='border-gray-700 border-t-2 mb-2 mt-3'></div>
                        <div className='flex justify-between mt-4'>
                            <h3 className='font-bold text-[13px]'>Grand Total</h3>
                            <h3 className=' font-semibold'>Rs &nbsp; {GrandTotal}</h3>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default AdminOrderDetails
