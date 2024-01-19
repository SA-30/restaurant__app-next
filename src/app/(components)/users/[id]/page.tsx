'use client'

import React, { useEffect, useState } from 'react'
import {useParams} from 'next/navigation'

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
      <div className='grid gap-2 grid-cols-3'>
        <div className=' bg-red-500'>
          profile
        </div>
        <div className=' bg-red-500'>
          details
        </div>
      </div>
    </>
  )
}

export default page