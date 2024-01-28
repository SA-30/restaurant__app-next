'use client'

import Link from 'next/link';

import { FaHome , FaShoppingBag } from 'react-icons/fa';
import { AiOutlineLogout} from 'react-icons/ai';
import {BsHandIndex,BsPersonFillGear} from 'react-icons/bs'
import { useContext, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { CartContext } from '@/components/appContext';

interface MethodHeaderProps {
}

const MethodHeader: React.FC<MethodHeaderProps> = () => {
  const session = useSession();
  const status = session.status;

  const {cartProducts} = useContext(CartContext);

  const handlesignOut = async () =>  {
    await signOut();
    window.location.href = '/login';
  }

  return (
    <div className='text-white fixed h-16 w-full px-5 p-5 md:px-20 bg-gray-800 border-b-[1px] border-gray-600 z-[1]'>
      <div className='flex justify-between '>
        <div className='flex items-center gap-10'>
            {/* <FaArrowLeft size={22}/> */}
            <Link href='/'> <FaHome size={30}/> </Link>
            
        </div>
        <div className='flex gap-5 items-center'>
              <Link href='/cart'> 
                <div className='relative'>
                  <FaShoppingBag size={20}/> 
                  <div className='absolute text-sm  flex justify-center items-center bg-red-800 rounded-[50%] h-5  w-5 text-center -mt-2 ml-2 text-white'>{cartProducts.length}</div>
                </div>
              </Link>
            <Link href='/reserveTable'> <BsHandIndex size={20}/> </Link>
            
            {status !== "authenticated" && ( 
              <Link href='/login'><p className='transition-all flex gap-2 justify-center items-center py-1 px-3 bg-[white] text-[#ff6600] hover:text-white hover:bg-[#ff6600] rounded-md text-sm font-semibold hover:rounded'>
                Login<BsPersonFillGear size={15}/>
                </p>
              </Link> 
            )}

            {status === "authenticated" && (
              
              <div className='transition-all cursor-pointer flex gap-5  rounded-full p-1 text-white'>
                <Link href='/profile'> <BsPersonFillGear className="hover:text-gray-400" size={25}/></Link>
                <AiOutlineLogout onClick={handlesignOut} className="hover:text-red-300 text-red-500" size={25}/>
              </div>
            
            )}
            
            
        </div>
      </div>
    </div>
  )
}

export default MethodHeader
