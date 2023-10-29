import Link from "next/link";
import { FunctionComponent } from "react";
import Image from "next/image";

import table2c from '../../../public/assets/images/table2c.png'
import MethodHeader from "../component/Header/MethodHeader";


interface Props {
    
}
 
const ConformReserve: FunctionComponent<Props> = () => {
    const reservationDetails = {
        date : 'October 29, 2023',
        time: '7:00 AM',
        nos: 4,
        tableNo: 6,
    }

    return ( 
        <div className="bg-gray-700 min-h-screen flex flex-col justify-between  text-[10px] md:text-sm">
            <MethodHeader methodTitle="Conform Reservation"/>
            {/* DIV 1 */}
            <div className="px-5 md:px-60">
                <h1 className="text-white text-2xl mt-20 md:mt-20 md:mb-5 font-semibold">Conform Reservation?</h1>
            </div>

            {/* DIV 2 */}
            <div className=" px-5 md:px-60 text-white">
                <div className="flex flex-col gap-4 md:gap-2">
                    <div className="flex">
                        <p className="flex-1 text-[12px]">Restaurant</p>
                        <h2 className="flex-[3_3_0%]">Glideheart Restaurant, Hetauda</h2>
                    </div>
                    <div className="border-b-2 border-gray-600"></div>
                    <div className="flex">
                        <p className="flex-1 text-[12px]">Date</p>
                        <h2 className="flex-[3_3_0%]">{reservationDetails.date}</h2>
                    </div>
                    <div className="border-b-2 border-gray-600"></div>
                    <div className="flex">
                        <p className="flex-1 text-[12px]">Time</p>
                        <h2 className="flex-[3_3_0%]">{reservationDetails.time}</h2>
                    </div>
                    <div className="border-b-2 border-gray-600"></div>
                    <div className="flex">
                        <p className="flex-1 text-[12px]">No of seats</p>
                        <h2 className="flex-[3_3_0%]">{reservationDetails.nos}</h2>
                    </div>
                    <div className="border-b-2 border-gray-600"></div>
                    <div className="flex">
                        <p className="flex-1 text-[12px]">Table no</p>
                        <h2 className="flex-[3_3_0%]">{reservationDetails.tableNo}</h2>
                    </div>
                </div>

                <div className="flex justify-center mt-16 md:mt-5">
                    <Image src={table2c} width={160} height={40} alt="table2" className="md:w-[100px]"/>
                </div>
            </div>

            {/* DIV 3  ------  Order now button */}
            <div className='py-5 bg-secondaryColor mt-8 flex justify-center items-center  md:mx-60 md:rounded-3xl md:mb-5'> 
            <Link href="yourReserve">
                <button className='transition-all text-white  bg-gray-700 py-3 px-16 rounded-2xl hover:shadow-2xl hover:scale-105'>
                    CONFIRM RESERVATION
                </button>  
            </Link>  
            </div>
        </div>
     );
}
 
export default ConformReserve;