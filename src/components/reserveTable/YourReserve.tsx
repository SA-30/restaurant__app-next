import { FunctionComponent } from "react";
import MethodHeader from "../component/Header/MethodHeader";
import {FaPlusCircle} from 'react-icons/fa'
import Image from "next/image";

import table2c from '../../../public/assets/images/table2c.png'

interface Props {
    date : string,
    time: string,
    nos: number,
    tableNo: number,
}
 
const YourReserve: FunctionComponent<Props> = () => {
    const reservationDetails = {
        date : 'October 29, 2023',
        time: '7:00 AM',
        nos: 4,
        tableNo: 6,
    }

    return ( 
        <div className="bg-primaryColor h-screen flex flex-col">
            <MethodHeader methodTitle="Your Reserve"/>
            
            <div className="flex-1 bg-red-200">s</div>
            <div className="flex-1 px-5 pt-16 md:mx-60">
                <p className="text-gray-400 text-sm">Hello, Satish</p>
                <h1 className="text-white text-3xl">Your reservations</h1>

                <div className=" bg-gray-700 flex flex-col items-center md:items-start md:pl-10 rounded-lg mt-5 py-5">
                    <h2 className="text-white text-[12px]">Glideheart Restaurant, Hetauda</h2> 
                    <div className="mt-5 flex items-center">
                        <Image src={table2c} width={100} height={40} alt="table2" className="md:w-[100px]"/>
                        <div className="text-[10px] text-gray-300 ml-5 flex flex-col gap-2">
                            <p>Date</p>
                            <p>Time</p>
                            <p>Seats</p>
                            <p>Table</p>
                        </div>
                        <div className="text-[12px] text-gray-300 ml-5 flex flex-col gap-2">
                            <h2>{reservationDetails.date}</h2>
                            <h2>{reservationDetails.time}</h2>
                            <h2>{reservationDetails.nos}</h2>
                            <h2>{reservationDetails.tableNo}</h2>
                        </div>
                    </div>
                </div>
                <div className="transition-all text-gray-600 flex justify-center my-10 hover:scale-[1.04] cursor-pointer">
                    <FaPlusCircle size={30}/>
                </div>
            </div>
        </div>
     );
}
 
export default YourReserve;