'use client'

import Link from 'next/link';

import {FaArrowLeft, FaHome , FaShoppingBag} from 'react-icons/fa';
import {BsPersonFillGear} from 'react-icons/bs'

interface MethodHeaderProps {
}

const MethodHeader: React.FC<MethodHeaderProps> = () => {
  return (
    <div className='text-white fixed h-16 w-full px-5 p-5 md:px-20 bg-primaryColor border-b-[1px] border-gray-600 z-[1]'>
      <div className='flex justify-between '>
        <div className='flex items-center gap-10'>
            {/* <FaArrowLeft size={22}/> */}
            <Link href='/'> <FaHome size={30}/> </Link>
            
        </div>
        <div className='flex gap-5 items-center'>
            <Link href='/cart'> <FaShoppingBag size={20}/> </Link>
            <Link href='/profile'> 
              <div className='transition-all bg-red-200  hover:bg-red-300 rounded-full p-1 text-black'>
                <BsPersonFillGear size={22}/>
              </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default MethodHeader
