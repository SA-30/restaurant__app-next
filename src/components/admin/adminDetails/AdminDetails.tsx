import GrandTotal from '@/components/cart/GrandTotal/GrandTotal'
import React from 'react'
import { FaPlus, FaWeight } from 'react-icons/fa';

function AdminDetails() {
    const bookedItems = [
        {
            imgUrl: '/assets/images/momov.jpg',
            title: 'Veg Momo, Pure vegitarian momo',
            weight: '1 plate',
            price: 'Rs 100',
        },
        {
            imgUrl: '/assets/images/momoc.jpg',
            title: 'Buff Momo, Tasty buff momo',
            weight: '1 plate',
            price: 'Rs 120',
        },
    ]

    const totalPrice = 120;
    const tax = totalPrice * 13/100;
    const GrandTotal = totalPrice + tax + 99;

    return (
        <div className='h-screen flex flex-col justify-between mr-5'>
            <div className='bg-admindarkColor flex flex-col px-5 mt-5 py-5'>
                <div>
                    <div className='flex flex-col justify-between '>
                        <div className='flex justify-between items-center ' >
                            <h2 className='text-xl font-semibold mb-2  '>Table 2</h2>
                        <p className='text-[12px] p-2 border-[1px] flex justify-center items-center border-gray-600 text-adminredColor'>Booked</p>
                        </div>
                        <div className='border-b-[1px] border-gray-500 mt-7 mb-5'></div>
                    </div>
                    <div>

                    </div>
                </div>

                <div>
                    <div className='flex flex-col gap-10 mb-5'>
                        {bookedItems.map((item, index) => (
                            <div key={index}>
                                <div className='  flex flex-row  rounded-2xl items-center gap-5'>
                                <div className='h-[40px] w-[50px]  flex items-center justify-center rounded-[50%] bg-center bg-cover' style={{ backgroundImage: `url(${item.imgUrl})`}}></div>

                                <div className='flex flex-col  gap-2 w-full justify-center rounded-r-2xl'>
                                    <h2 className='font-semibold text-sm'>{item.title}</h2>
                                    <div className='flex gap-2 items-center justify-start'>
                                        <FaWeight className='opacity-50' size={10}/>
                                        <p className='text-[12px] font-thin'>{item.weight}</p>
                                        <h2 className='text-[12px] font-normal'>{item.price}</h2>
                                    </div>
                                </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <button className='w-full p-2 bg-transparent border-[1px] text-adminblueColor border-adminblueColor text-[12px]'>View All</button>
                </div>
            </div>

            {/* Total Payment */}
            <div className='bg-admindarkColor px-10 pt-5 mb-5'>
                <div>
                <div className='flex justify-between items-center mx-5' >
                        <h2 className='text-[12px] font-semibold'>Total Payment</h2>
                    <p className='text-[12px]  px-2 border-[1px] flex justify-center items-center border-gray-600'>Esewa</p>
                </div>

                <div className='border-b-[1px] border-gray-500 mt-4 mx-5'></div>

                <div className='p-5 '>
                <div className='flex justify-between '>
                    <h3 className='text-white text-[14px]'>Subtotal</h3>
                    <h3 className='text-white text-[14px] font-semibold'>Rs &nbsp; {totalPrice}</h3>
                </div>
                <div className='px-5'>
                    <div className='flex justify-between mt-4'>
                        <h3 className='text-gray-400 text-[12px]'>Tax</h3>
                        <h3 className='text-gray-400 text-[12px]'>Rs {tax}</h3>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <h3 className='text-gray-400 text-[12px]'>Delivery Fee</h3>
                        <h3 className='text-gray-400 text-[12px]'>Rs 99</h3>
                    </div>
                    </div>
                    {/* DIVIDER */}
                    <div className='border-gray-700 border-t-2 mb-2 mt-3'></div>
                        <div className='flex justify-between mt-4'>
                            <h3 className='text-white font-bold text-[13px]'>Grand Total</h3>
                            <h3 className='text-white font-semibold'>Rs &nbsp; {GrandTotal}</h3>
                        </div>
                    </div>
                </div>   
            </div>
        </div>

        
    )
}

export default AdminDetails
