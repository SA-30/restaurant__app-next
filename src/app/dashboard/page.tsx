'use client'

import React from 'react'
import MethodChoose from '@/components/methodChoose/MethodChoose'
import {signOut} from 'next-auth/react'

const page = () => {
  return (
    <div>
      <div className='min-h-[5vh] absolute top-10 left-[50%] translate-x-[-50%]'> 
        <button onClick={ () => signOut() } className='transition-all hover:shadow-md text-gray-400 text-sm  bg-gray-800 px-10 py-3 rounded'>Logout</button>
      </div>
      <MethodChoose />
    </div>
  )
}

export default page
