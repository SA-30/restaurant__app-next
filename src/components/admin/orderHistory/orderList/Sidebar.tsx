import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Sidebar = ({activeDate, setActiveDate}: any) => {
  return (
    <div className="flex flex-col mx-5 items-center gap-2 border-gray-600 text-[12px] text-white cursor-pointer font-normal">
        <div onClick={() => setActiveDate('day')} className={`py-3 sm:py-2 relative font-bold flex items-center justify-between px-5 w-full rounded text-[12px] ${activeDate === 'day' ? 'bg-white text-black' : 'bg-black'}   p-2`}>
            <h3>day</h3>
            <FaArrowRight className={`transition-all absolute right-4 z-10 p-2  ${activeDate === 'day' ? ' translate-x-[10px] text-white  bg-black p-1 rounded-full' : 'text-white bg-black'} `} size={30}/>
        </div>
        <div onClick={() => setActiveDate('week')} className={`py-3 sm:py-2 relative font-bold flex items-center justify-between px-5  w-full rounded text-[12px] ${activeDate === 'week' ? 'bg-green-500 text-white' : 'bg-black'}  text-white p-2`}>
            <h3 className={`transition-all ${activeDate === 'week' ? 'text-white translate-x-[10px] sm:translate-x-0' : ''}`}>week</h3>
            <FaArrowRight className={`transition-all absolute right-4 z-10 p-2 text-white  ${activeDate === 'week' ? ' translate-x-[10px] text-white  bg-black p-1 rounded-full' : 'bg-black'} `} size={30}/>
        </div>
        <div onClick={() => setActiveDate('month')} className={`py-3 sm:py-2 relative font-bold flex items-center justify-between px-5  w-full rounded text-[12px] ${activeDate === 'month' ? 'bg-red-500 text-white' : 'bg-black'}  text-white p-2`}>
            <h3>month</h3>
            <FaArrowRight className={`transition-all absolute right-4 z-10 p-2 text-white  ${activeDate === 'month' ? ' translate-x-[10px] text-white  bg-black p-1 rounded-full' : 'bg-black'} `} size={30}/>
        </div>
    </div>
  )
}

export default Sidebar