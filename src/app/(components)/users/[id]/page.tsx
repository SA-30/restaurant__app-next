'use client'

import React, { useEffect, useState } from 'react'
import { FaPeopleArrows} from 'react-icons/fa'
import {useParams} from 'next/navigation'
import MethodHeader from '@/components/component/Header/MethodHeader'

const page = () => {
  const [user, setUser] = useState(null)
  const {id} = useParams();

  useEffect(() => {
    fetch('/api/users').then(res => {
      res.json().then(users => {
        const user = users.find((u: any ) => u._id === id)
        setUser(user)
      })
    })
  }, [])

  return (
    <>
    <div ><MethodHeader/></div>
    <div className='min-h-[10vh]'></div>
    <div className='h-[90vh]  grid items-center gap-2 md:grid-cols-3'>
      <div className='col-span-1 '>
        <div className='flex items-center justify-center gap-3'>
          <FaPeopleArrows className="p-2 rounded-[50%]  bg-red-600 text-white" size={50}/>
          <div className='flex flex-col justify-center'>
            <span className='font-semibold'>{user?.name}</span>
            <span className='text-sm '>{user?.email}</span>
          </div>
        </div>
      </div>
      
      <div className='col-span-2 p-4 m-2 bg-red-200 rounded-lg mr-20'>
        <div className='font-semibold text-sm mb-3'>Details</div>
        <div className='flex text-sm flex-col gap-2'>
          <div className='p-2 bg-red-100 flex justify-between rounded-lg'>
            <p>Momo veg, chicken, pizza</p>
            <p className='font-semibold'>Rs. 1120</p>
          </div>
          <div className='p-2 bg-red-100 flex justify-between rounded-lg'>
            <p>Large pizza, Chicken momo, etc...</p>
            <p className='font-semibold'>Rs. 1500</p>
          </div>
          <div className='p-2 bg-red-100 flex justify-between rounded-lg'>
            <p>Pizza</p>
            <p className='font-semibold'>Rs. 200</p>
          </div>
          <div className='p-2 bg-red-100 flex justify-between rounded-lg'>
            <p>Burger</p>
            <p className='font-semibold'>Rs. 450</p>
          </div>
          <div className='p-2 bg-red-100 flex justify-between rounded-lg'>
            <p>Chicken pizza</p>
            <p className='font-semibold'>Rs. 650</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default page