'use client'

import {FaWeight, FaPlus, FaTrash} from 'react-icons/fa';
import MethodHeader from '../component/Header/MethodHeader';
import { CldImage } from 'next-cloudinary';

import {useState, useEffect, useContext} from 'react'
import { CartContext } from '../appContext';


interface MethodHeaderProps{
    // title: string,
    // weight: string,
    // price: string,
}

const CartComponent: React.FC<MethodHeaderProps> = (props) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('');

    const { cartProducts, removeCartProduct }: any = useContext(CartContext);
    let total = 0;
    for( const p of cartProducts) {
        total += p.price;
    }

    const updateTotalPrice = (price: number) => {
        setTotalPrice(price);
    };

    const handlePayment = async (e: any) => {
        e.preventDefault();

        console.log("works here client");

        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone,
                address,
                cartProducts
            }),
        })

        if(response.ok){
            // redirect user to done payment page
            window.location.href = `/payment?clear-cart=1`;
        }
    }

    return (
        <div className='min-h-[100vh] bg-primaryColor flex flex-col '>
            {/* Header */}
            <div ><MethodHeader/></div>
            <div className='my-10'></div>
            <h1 className='text-red-600 text-center font-bold text-5xl my-5'>Cart</h1>
            
            <div className='flex md:flex-row flex-col m-2 md:m-0 sm:gap-0 gap-10 justify-around'>
                <div className='flex flex-col  gap-2 '>
                    {cartProducts?.length === 0 && (
                        <div>No products in your shopping cart!!!</div>
                    )}

                    {cartProducts?.length > 0 && cartProducts.map((product: any, index: number) => (
                        <div key={index} className='flex  gap-5'>
                            <div className='grid grid-cols-4 w-[500px] items-center  border-2 border-[#b9b9b9] py-2 px-5'>
                                <div className="">
                                    {product.imgUrl && <CldImage
                                        width="50"
                                        height="50"
                                        src={product.imgUrl}
                                        sizes="100vw"
                                        alt={product.title}
                                        className="w-16 h-16"
                                    />}
                                </div>
                                <div className='flex justify-start'>{product.title}</div>
                                <div className='font-semibold flex justify-end'>Rs. {product.price}</div>
                                <div className='flex justify-end'>
                                    <button 
                                        className=''
                                        type='button' 
                                        onClick={() => removeCartProduct(index)}>
                                        <FaTrash size={20}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='grid grid-cols-4 md:w-[500px] items-center  border-2 border-[#b9b9b9] py-2 px-5'>
                        <span></span>
                        <span>subtotal</span>
                        <span className='flex justify-end font-bold '>Rs {total} </span> 
                    </div>
                </div>
                <div className='bg-gray-200 p-4 rounded-sm'>
                    <h2 className='font-bold mb-4'>Checkout</h2>
                    <form onSubmit={handlePayment}>
                        <label className='text-gray-600 text-sm mt-2'>Phone</label> <br />
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} className='p-2 w-full md:w-auto rounded-lg m-2 outline-none font-bold' type="number" placeholder='977*******' required/> <br />
                        <label className='text-gray-600 text-sm mt-2'>Address</label> <br />
                        <input value={address} onChange={(e) => setAddress(e.target.value)} className='p-2 w-full md:w-auto rounded-lg m-2 outline-none font-bold' type="text" placeholder='location' required/> <br />
                        <label className='text-gray-600 text-sm mt-2'>Payment Option</label> <br />
                        <input className='p-2 w-full md:w-auto rounded-lg m-2 outline-none font-bold' type="radio" name='payment' required/>  <label className='text-gray-600 text-sm mt-2'>COD</label> <br />
                        <input className='p-2 w-full md:w-auto rounded-lg m-2 outline-none font-bold' type="radio" name='payment' disabled/> <label className='text-gray-600 text-sm mt-2 line-through'>Esewa</label> <br />
                        <button className='py-2 px-5 rounded bg-red-500 text-white w-full mt-5' type='submit'>
                            Pay <span className='font-normal text-[10px] text-gray-200'>Rs</span> {total}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CartComponent
