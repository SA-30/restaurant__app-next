'use client'

import React from 'react'
import MethodChoose from '@/components/methodChoose/MethodChoose'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();

  return (
    <div className='relative'>
      <div className='min-h-[5vh] absolute top-10 left-[50%] translate-x-[-50%]'> 
        <button onClick={ () => router.replace('/login')} className='transition-all hover:shadow-md text-gray-400 text-sm  bg-gray-800 px-10 py-3 rounded'>Logout</button>
      </div>
      
      <div className='absolute text-white top-52 left-10'>
        <h1 className='text-2xl'>Todo</h1>
        <ul>
          <li className='text-xl text-gray-300 mb-2'>Order food page</li>
          <li className='text-sm text-gray-500'>- Searching, sorting, filtering, paginataion</li>
          <li className='text-sm text-gray-500'>- Db model, connection, fetching</li>
        </ul>
      </div>
      <MethodChoose />
      
    </div>
  )
}

export default page
