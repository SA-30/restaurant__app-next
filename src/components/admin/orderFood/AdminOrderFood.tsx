'use client'

import { FunctionComponent, useEffect, useState } from "react";
import AdminMenu from "../components/adminMenu/AdminMenu";
import AdminOrderDetails from "./components/AdminOrderDetails";
import AdminOrderList from "./components/AdminOrderList";

interface AdminPageProps {
}
 
const AdminOrderFood: FunctionComponent<AdminPageProps> = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    
    const handleOrderSelection = (table: any) => {
        setSelectedOrder(table);
    };

    return (  
        <>
        <div className='bg-adminbgColor'>
        <div className='relative gap-10 md:h-screen flex flex-col md:flex-row  md:justify-between text-white '>
            {/* Admin Menus */}
            <div className='flex-1 bg-admindarkColor flex  md:relative top-0'>
                <AdminMenu />
            </div>

            {/* Admin Items */}
            <div className='hide-scroolbar  flex-[7_7_0%]  overflow-scroll'>
                <AdminOrderList onOrderSelection={handleOrderSelection} />
            </div>
            <div className='flex-[4_4_0%] '>
                <AdminOrderDetails selectedOrder={selectedOrder}/>
            </div>
        </div>
        </div>
        </>
    );
}
 
export default AdminOrderFood;