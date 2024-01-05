'use client'

import Link from 'next/link';

import {FaArrowLeft, FaHome , FaShoppingBag} from 'react-icons/fa';
import {BsHandIndex,BsPersonFillGear} from 'react-icons/bs'
import {AiFillCustomerService} from 'react-icons/ai'
import { useState } from 'react';

interface MethodHeaderProps {
}

const MethodHeader: React.FC<MethodHeaderProps> = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className='text-white fixed h-16 w-full px-5 p-5 md:px-20 bg-gray-800 border-b-[1px] border-gray-600 z-[1]'>
      <div className='flex justify-between '>
        <div className='flex items-center gap-10'>
            {/* <FaArrowLeft size={22}/> */}
            <Link href='/'> <FaHome size={30}/> </Link>
            
        </div>
        <div className='flex gap-5 items-center'>
            <Link href='/cart'> <FaShoppingBag size={20}/> </Link>
            <Link href='/reserveTable'> <BsHandIndex size={20}/> </Link>
            
            {isLogin === false ? 
              <Link href='/login'><p className='transition-all flex gap-2 justify-center items-center py-1 px-3 bg-[white] text-[#ff6600] hover:text-white hover:bg-[#ff6600] rounded-md text-sm font-semibold hover:rounded'>
                Login<BsPersonFillGear size={15}/>
                </p>
              </Link> :
              <Link href='/profile'> 
                <div className='transition-all hover:text-gray-400 rounded-full p-1 text-white'>
                  <BsPersonFillGear size={25}/>
                </div>
              </Link>
            }
            
            
        </div>
      </div>
    </div>
  )
}

export default MethodHeader
