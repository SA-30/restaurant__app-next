'use client'

import { FunctionComponent, useState, useEffect } from "react";
import {FaLocationDot} from 'react-icons/fa6'
import Link from "next/link";
import EditAdminForm from "../admin/adminProfile/EditAdminForm";
import MethodHeader from "../component/Header/MethodHeader";

import { signOut, useSession } from "next-auth/react"


interface ClientProfileprops {
}
 
const ClientProfile: FunctionComponent<ClientProfileprops> = () => {
    const session = useSession()
    const username = session.data?.user?.name;
    
    const {status} = session
    const [editProfile, setEditProfile] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
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

    useEffect(() => {
        fetch('/api/menu/profile', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({}),
        }).then(response => {
            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }
            return response.json();
        }).then(data => {
            // Handle the case where the user is already an admin
            setIsAdmin(data?.admin || false);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });

        fetch('/api/menu/profile').then(response => {
            response.json().then(data => {
                setIsAdmin((prev) => data?.admin)
            })
        })

    }, [session, status])


    return (  
        <>
        <div className='bg-primaryColor'>
            <div><MethodHeader /></div>
            
            <div className='flex-[11_11_0%]'>
            
                {!editProfile ? <div className="h-screen flex flex-col justify-center items-center pt-20 md:pt-0">
                {isAdmin && 
                    <Link href='/admin'>
                        <div className="text-white p-2 bg-gray-800 rounded-md font-bold mb-5">
                            Goto Admin page
                        </div>
                    </Link>
                }
                <div className={`bg-[#1e6a758c] text-[40px] rounded-[50%] p-5 flex items-center`} >
                    🍗
                </div>
                <h1 className="font-semibold text-4xl md:text-3xl text-adminblueColor mt-5">{formData.name == ''? username : formData.name}</h1>
                <div className="flex justify-between md:text-[12px] mt-4 text-black font-semibold items-center gap-1">
                    <FaLocationDot />
                    <p>{formData.name == ''? 'Client Location' : formData.location}</p>
                </div>
                <div className="md:text-[12px] text-black font-semibold mt-1">{formData.name == ''? 'Client phone no' : formData.number}</div>
                <div className="flex flex-col md:flex-row px-5 py-5 gap-5 mt-5">
                    {/* <button onClick={() => {setEditProfile(true)}} className="transition-all hover:scale-[1.05]  bg-transparent hover:bg-adminblueColor text-[12px] border-[1px] border-adminblueColor py-2 px-5 text-black font-bold">Edit Profile</button> */}
                    <Link href={'/login'}>
                    <button onClick={() => signOut()} className="transition-all  bg-adminblueColor  font-semibold hover:shadow hover:scale-[1.05] text-[14px] border-[1px] border-adminblueColor py-2 px-5 text-gray-900">Logout</button>
                    </Link>
                </div>
                </div> : <EditAdminForm toggleForm={toggleForm} formDatas={formDatas} />}
            </div>
            </div>
        </>
    );
}
 
export default ClientProfile;