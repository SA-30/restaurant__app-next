'use client'

import { FunctionComponent, useState, useEffect } from "react";
import {FaLocationDot, FaPeopleGroup, FaPeoplePulling} from 'react-icons/fa6'
import Link from "next/link";
import EditAdminForm from "../admin/adminProfile/EditAdminForm";
import MethodHeader from "../component/Header/MethodHeader";
import { signOut, useSession } from "next-auth/react"


interface ClientProfileprops {
}

interface Product {
    imgUrl: string;
    title: string;
    weight: string;
    price: string;
    size: number | null;
}

interface OrderItem {
    email: string,
    phone: string,
    address: string,
    cartProducts: Product[],
    paid: boolean,
}
 
const ClientProfile: FunctionComponent<ClientProfileprops> = () => {
      
    const session = useSession()
    const username = session.data?.user?.name;

    const {status} = session
    const [editProfile, setEditProfile] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [orderData, setOrderData] = useState<OrderItem[]>([]);
    const [selectedTable, setSelectedTable] = useState<number | null>(null);

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

    useEffect(() => {
        fetch('/api/order').then(response => {
            response.json().then(data => {
                setOrderData(data)
            })
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [])

    const handleSelection = (item: OrderItem, index: number) => {
        setSelectedTable(index)
    }

    const handleSignOut = async () => {
        await signOut();
        window.location.href = '/login';
    }


    return (  
        <>
        <div className='bg-primaryColor'>
            <div><MethodHeader /></div>
            
            <div className='flex-[11_11_0%] flex flex-col md:flex-row justify-center items-center gap-20'>
            
                {!editProfile ? <div className="h-screen flex flex-col justify-center items-center pt-20 md:pt-0">
                {isAdmin && 
                    <div className="">
                        <Link href='/admin'>
                            <div className="flex  items-center justify-center gap-2 px-5 text-white p-2 bg-gray-800  rounded-md text-center font-bold mb-5">
                                <p>Admin page</p>
                            </div>
                        </Link>
                        <Link href='/users'>
                            <div className="flex  items-center justify-center gap-2  text-white p-2 bg-gray-800 rounded-md text-center font-bold mb-5">
                                <FaPeopleGroup className='text-green-600'  size={30}/>
                                <p>Clients</p>
                            </div>
                        </Link>
                    </div>
                    
                }
                <div className={`bg-[#1e6a758c] text-[60px] rounded-[50%] p-1 flex items-center`} >
                    😀
                </div>
                <h1 className="font-semibold text-4xl md:text-3xl text-adminblueColor mt-5">{formData.name == ''? username : formData.name}</h1>
                <div className="flex flex-col md:flex-row px-5 py-5 gap-5 mt-5">
                    <Link href={'/login'}>
                    <button onClick={handleSignOut} className="transition-all  bg-adminblueColor  font-semibold hover:shadow hover:scale-[1.05] text-[14px] border-[1px] border-adminblueColor py-2 px-5 text-gray-900">Logout</button>
                    </Link>
                </div>
                </div> : <EditAdminForm toggleForm={toggleForm} formDatas={formDatas} />}
            
            {!isAdmin && (
                <div className="flex justify-center items-center h-screen">
                    <div className='flex flex-col items-center justify-center p-4 m-2 bg-[#e4e4f0] rounded-lg md:mr-20'>
                        <div className='font-bold text-center text-3xl text-[#704444a4] mb-7 mt-3'>Order history</div>
                        <div className="hide-scroolbar  overflow-scroll ">
                        {orderData.map(( data, index) => (
                            <div 
                            key={index} 
                            className="">
                                <div className={`transition-all order-list px-5 grid grid-cols-3 border-b border-[#80808074] gap-10 items-center  py-3 ${selectedTable === index ? data?.paid == true ?  "bg-[#806dd4d5]" : "bg-[#eb5a5a9c]" : "" } ${data?.paid == true ? 'hover:bg-[#806dd4d5]' : 'hover:bg-adminredColor' }`}>
                                <div className="md:mr-10 ml-5 md:ml-0">
                                    {data?.cartProducts.map((product, index) => (
                                        <div key={index}>
                                            <p className="!text-black">{product?.title}</p>
                                        </div>
                                    ))}
                                    
                                </div>
                                <div>
                                    <div className="!text-black !font-bold"> 
                                        <p className=" !text-black !font-bold">
                                            <span className="font-semibold text-[10px]">Rs </span> 
                                            {data?.cartProducts.reduce((acc, product) => acc + parseFloat(product.price), 0)}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className={`cursor-pointer w-full !text-[10px] md:text-[12px] md:mr-10 px-5 py-1 rounded-2xl flex justify-center items-center  text-admingreenColor ${data.paid == true ? 'bg-[#50af50d7]': 'bg-[#e04949dc]'}`}>{data.paid == true ? 'paid' : 'Pending'}</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
        </>
    );
}
 
export default ClientProfile;