'use client'

import { FunctionComponent } from "react";
import AdminMenu from "../components/adminMenu/AdminMenu";
import ManagementItems from "./components/ManagementItems";
import {useProfile} from "@/hook/useProfile"

interface AdminPageProps {
    
}
 
const ItemsManagement: FunctionComponent<AdminPageProps> = () => {
    const { data: profileData } = useProfile();
    const isAdmin = profileData?.admin;

    console.log(isAdmin);

    // if(!profileData) {
    //     return (
    //         <Link href='/'><div className="flex h-screen justify-center items-center ">
    //             <p className="bg-red-300 py-2 px-5 rounded-md font-bold text-gray-600">Home Page</p>
    //         </div></Link>
    //     );
    // }

    if(isAdmin){
    return (  
        <>
        {/* <AddNewItem/> */}
        <div className='h-screen flex md:h-auto md:block bg-adminbgColor'>
            <div className='relative md:gap-10 md:h-screen flex flex-col-reverse md:flex-row  md:justify-between text-white '>
                {/* Admin Menus */}
                <div className=' flex-1 bg-admindarkColor flex  md:relative top-0'>
                    <AdminMenu />
                </div>

                {/* Admin Items */}
                <div className='hide-scroolbar flex-[11_11_0%]  overflow-scroll'>
                    <ManagementItems />
                </div>
                <div></div>
            </div>
        </div>
        </>
    )}
}
 
export default ItemsManagement;