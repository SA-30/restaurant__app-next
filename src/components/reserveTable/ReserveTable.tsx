'use client'

import { FunctionComponent } from "react";
import MethodHeader from "../component/Header/MethodHeader";
import Image from "next/image";

import table1 from '../../../public/assets/images/table1.png'
import table2 from '../../../public/assets/images/table2.png'
import table2c from '../../../public/assets/images/table2c.png'
import table3 from '../../../public/assets/images/table3.png'
import table4 from '../../../public/assets/images/table4.png'
import Link from "next/link";

interface Props {
}
 
const ReserveTable: FunctionComponent<Props> = () => {
    return ( 
        <div className="bg-primaryColor min-h-screen">
            <MethodHeader methodTitle="Reserve Table"/>
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
                
                {/* Order now button */}
                <div className='py-5 bg-secondaryColor mt-8 flex justify-center items-center  md:mx-60 md:rounded-3xl md:mb-10'> 
                <Link href="reserveTable/conformReserve"><button className='transition-all text-white  bg-gray-700 py-3 px-16 rounded-2xl hover:shadow-2xl hover:scale-105'>
                    NEXT
                </button>  </Link>  
                </div>
            </div>
        </div>
     );
}
 
export default ReserveTable;