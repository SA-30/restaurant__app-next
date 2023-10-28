import Link from 'next/link';
import React from 'react';
import {FaArrowLeft, FaShoppingBag} from 'react-icons/fa';
import {FaPerson} from 'react-icons/fa6';

interface MethodHeaderProps {
    methodTitle: string;
}

const MethodHeader: React.FC<MethodHeaderProps> = (props) => {
  return (
    <div className='text-white fixed h-16 w-full px-5 p-5 md:px-20 bg-primaryColor border-b-[1px] border-gray-600 z-[1]'>
      <div className='flex justify-between '>
        <div className='flex items-center gap-10'>
            <Link href='#'> <FaArrowLeft size={22}/> </Link>
            <h1 className=''>{props.methodTitle}</h1>
        </div>
        <div className='flex gap-5 items-center'>
            <Link href='#'> <FaShoppingBag size={20}/> </Link>
            <Link href='#'> <FaPerson size={22}/> </Link>
        </div>
      </div>
    </div>
  )
}

export default MethodHeader
