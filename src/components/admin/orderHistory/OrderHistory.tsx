'use client'

import React from 'react'
import AdminOrderList from '@/components/admin/orderFood/components/AdminOrderList'
import OrderList from './orderList/OrderList';


const OrderHistory = () => {

  return (
    <div className='p-5'>
        <div className='font-bold'>Order History</div>
        <div className='hide-scroolbar  flex-[7_7_0%]  overflow-scroll'>
            <OrderList />
        </div>
    </div>
  )
}

export default OrderHistory