'use client'

import { FunctionComponent, useState } from "react";
import MethodHeader from "../component/Header/MethodHeader";
import Link from 'next/link';

import {FaSkull,FaArrowUp, FaArrowDown, FaTable} from 'react-icons/fa'


interface Props {
}
 
const ReserveTable: FunctionComponent<Props> = () => {
    const [selectedTable, setSelectedTable] = useState<number | null>(null);

    const tables = [
        {
            name: "Table 1",
            status: "available",
            dish : [
                {first: 'Veg Momo', second: 'Pure vegitarian momo'}
            ],
        },
        {
            name: "Table 2",
            status: "booked",
            dish: [
                {first: 'Buff Momo', second: 'Pure vegitarian momo'}
            ],
        },
        {
            name: "Table 3",
            status: "available",
            dish: [
                {first: 'Mix Momo', second: 'Mix veg momo'}
            ],
        },
        {
            name: "Table 4",
            status: "available",
            dish: [
                {first: 'Veg Momo', second: 'Pure vegitarian momo'}
            ],
        },
        {
            name: "Table 5",
            status: "booked",
            dish: [
                {first: 'Veg Momo', second: 'Pure vegitarian momo'}
            ],
        },
        {
            name: "Table 6",
            status: "available",
            dish: [
                {first: 'Veg Momo', second: 'Pure vegitarian momo'}
            ],
        },
        {
            name: "Table 7",
            status: "booked",
            dish: [
                {first: 'Veg Momo', second: 'Pure vegitarian momo'}
            ],
        },
        {
            name: "Table 8",
            status: "available",
            dish: [
                {first: 'Veg Momo', second: 'Pure vegitarian momo'}
            ],
        },
        {
            name: "Table 9",
            status: "available",
            dish: [
                {first: 'Veg Momo', second: 'Pure vegitarian momo'}
            ],
        },
        {
            name: "Table 10",
            status: "available",
            dish: [
                {first: 'Veg Momo', second: 'Pure vegitarian momo'}
            ],
        },
        {
            name: "Table 11",
            status: "available",
            dish: [
                {first: 'Veg Momo', second: 'Pure vegitarian momo'}
            ],
        },
        {
            name: "Table 12",
            status: "available",
            dish: [
                {first: 'Veg Momo', second: 'Pure vegitarian momo'}
            ],
        },
    ]

    const handleTableClick = (index: number) => {
        setSelectedTable(index);
    };

    return ( 
        <div className="bg-primaryColor min-h-screen">
            {/* Header */}
            <MethodHeader methodTitle="Reserve Table"/>
            
            <div className="flex flex-col justify-center min-h-screen md:h-screen">
                {/* Divider */}
                <div className="h-[15vh]"></div>

                {/* Tables */}
                <div className='mx-5 md:mx-20 grid grid-cols-2 md:grid-cols-4 gap-5 text-white'>
                {tables.map((table, index) => (
            <div 
            key={index} 
            className='transition-all hover:scale-[1.02] cursor-pointer '>
                <div className={`p-3 pr-20 bg-admindarkColor ${table.status == 'available' ? "hover:bg-admingreenColor" : "hover:bg-adminredColor"}`}>
                    <div className='flex items-center gap-2 mb-4'>
                    <div className='p-1 bg-gray-600 rounded'>{table.status == 'available' ? <FaTable size={10}/> : <FaSkull size={10}/>}</div>
                    <p className={`text-[10px] ${table.status == 'available' ? "text-admingreenColor" : "text-adminredColor"}`}>{table.status}</p>
                    <div className={`p-1 rounded-3xl ${table.status == 'available' ? "text-admingreenColor bg-[#305230]" : "text-adminredColor bg-[#523030]"}`}>
                        
                        {table.status == 'available' ?<FaArrowUp size={6}/> : <FaArrowDown size={6}/>}
                    </div>
                    </div>
                    <h1 className='md:text-xl font-semibold mb-2'>{table.name}</h1>
                    <div className='text-[8px]'> 
                        {table.dish.map((dishItem, index) => (
                            <div key={index}>
                                {dishItem.first}
                                {dishItem.second}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
                ))}
                </div>

                {/* Next button */}
                <div className='py-5 my-5 flex justify-center items-center  md:mx-60 md:rounded-3xl md:mb-10'> 
                <Link href="reserveTable/conformReserve">
                    <button className='text-[10px] font-bold transition-all text-white  bg-adminblueColor py-3 px-16 rounded-2xl hover:shadow-2xl hover:scale-105'>
                        NEXT
                    </button> 
                </Link> 
                </div>
            </div>
        </div>
     );
}
 
export default ReserveTable;










{/* 

OLD CODE


<div className="flex flex-col min-h-screen justify-between ">
                <div className='my-10'></div>
                <div className="mx-5 md:mx-60">
                <h5 className="text-center">Choose your table</h5>
                <div className="flex  justify-center gap-10 mt-10">
                    <div className="flex flex-col gap-5">
                        <div className="relative">
                            <Image src={table1} width={70} height={40} alt="table1" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">1</h1>
                        </div>
                        <div className="relative">
                            <Image src={table1} width={70} height={40} alt="table1" />
                            <h1 className="absolute text-white text-3xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">2</h1>
                        </div>
                        <div className="relative">
                            <Image src={table1} width={70} height={40} alt="table1" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">3</h1>
                        </div>
                        <div className="relative">
                            <Image src={table1} width={70} height={40} alt="table1" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">4</h1>
                        </div>
                        <div className=" relative">
                            <div className="absolute w-[160px] md:w-[120px]">
                                <Image  src={table3} width={160} height={0} alt="table3" />
                                <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">5</h1>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="relative">
                            <Image src={table1} width={70} height={40} alt="table1" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">6</h1>
                        </div>
                        <div className="relative">
                            <Image src={table1} width={70} height={40} alt="table1" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">7</h1>
                        </div>
                        <div className="relative">
                            <Image src={table1} width={70} height={40} alt="table1" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">8</h1>
                        </div>
                        <div className="relative">
                            <Image src={table1} width={70} height={40} alt="table1" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">9</h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="relative">
                            <Image src={table2} width={70} height={40} alt="table2" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">10</h1>
                        </div><div className="relative">
                            <Image src={table2} width={70} height={40} alt="table2" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">11</h1>
                        </div><div className="relative">
                            <Image src={table2c} width={70} height={40} alt="table2" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">12</h1>
                        </div>
                        <div className="relative">
                            <Image src={table4} width={70} height={40} alt="table2" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">13</h1>
                        </div>
                        <div className="relative">
                            <Image src={table4} width={70} height={40} alt="table2" />
                            <h1 className="absolute text-white text-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">14</h1>
                        </div>
                    </div>
                </div>
                </div>
                
                <div className='py-5 bg-secondaryColor mt-8 flex justify-center items-center  md:mx-60 md:rounded-3xl md:mb-10'> 
                <Link href="reserveTable/conformReserve">
                    <button className='transition-all text-white  bg-gray-700 py-3 px-16 rounded-2xl hover:shadow-2xl hover:scale-105'>
                        NEXT
                    </button> 
                </Link> 
                </div>
            </div> */}