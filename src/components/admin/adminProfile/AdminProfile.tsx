'use client'

import { FunctionComponent, useState } from "react";
import {FaLocationArrow} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
import AdminMenu from "../components/adminMenu/AdminMenu";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EditAdminForm from "./EditAdminForm";

interface AdminPageProps {
    
}
 
const AdminProfile: FunctionComponent<AdminPageProps> = () => {
    const router = useRouter();
    const [editProfile, setEditProfile] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        number: '',
        restaurant: '',
    })

    const toggleForm = () => {
        setEditProfile(!editProfile)
    }

    const formDatas = (datas: any) => {
        setFormData(datas)
    }


    return (  
        <>
        <div className='bg-adminbgColor'>
            <div className='relative md:gap-10 h-screen flex flex-col-reverse md:flex-row md:justify-between text-white '>
                {/* Admin Menus */}
                <div className='flex-1 bg-admindarkColor flex  md:relative top-0'>
                    <AdminMenu />
                </div>
                {/* Admin Items */}
                <div className='flex-[11_11_0%]'>
                    {!editProfile ? <div className="h-screen flex flex-col justify-center items-center pt-20 md:pt-0">
                    <div className={`bg-[#41ad4110] text-[40px] rounded-[50%] p-5 flex items-center`} >
                        🍗
                    </div>
                    <h1 className="font-semibold text-4xl md:text-3xl text-adminblueColor mt-5">{formData.name == ''? 'Your Name' : formData.name}</h1>
                    <p className="text-gray-400 text-xl md:text-sm mt-2">{formData.name == ''? 'Your Restaurant Name' : formData.restaurant}</p>
                    <div className="flex justify-between md:text-[12px] mt-4 text-gray-500 items-center gap-1">
                        <FaLocationDot />
                        <p>{formData.name == ''? 'Your Location' : formData.location}</p>
                    </div>
                    <div className="md:text-[12px] text-gray-500 mt-1">{formData.name == ''? 'Your phone no' : formData.number}</div>
                    <div className="flex flex-col items-center  md:flex-row px-5 py-5 gap-5 mt-5">
                        <button onClick={() => {setEditProfile(true)}} className="transition-all hover:scale-[1.05]  bg-transparent hover:bg-adminblueColor text-[12px] border-[1px] border-adminblueColor py-2 px-5 text-black font-bold">Edit Profile</button>
                        <Link href={'/login'}>
                        <button className="transition-all  bg-adminblueColor  font-semibold hover:shadow hover:scale-[1.05] text-[14px] border-[1px] border-adminblueColor py-2 px-5 text-gray-900">Logout</button>
                        </Link>
                    </div>
                    </div> : <EditAdminForm toggleForm={toggleForm} formDatas={formDatas} />}
                </div>
                
                <div></div>
            </div>
        </div>
        </>
    );
}
 
export default AdminProfile;