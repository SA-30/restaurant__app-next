'use client'

import React from 'react'
import AdminOrderList from '@/components/admin/orderFood/components/AdminOrderList'
import OrderList from './orderList/OrderList';
import AdminMenu from '../components/adminMenu/AdminMenu';


const OrderHistory = () => {

  return (
    <div className='relative text-white '>
        <div className='hide-scroolbar  flex-[7_7_0%]  overflow-scroll'>
            <OrderList />
        </div>
    </div>
  )
}

export default OrderHistory