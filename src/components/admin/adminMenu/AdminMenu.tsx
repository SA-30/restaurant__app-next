import {FaHome,FaQuidditch,FaSatellite, FaTasks,FaList, FaAccusoft} from 'react-icons/fa'

function AdminMenu() {
  return (
    <div className="flex md:flex-col w-full justify-between  items-center p-5 ">
        <div className='transition-all hover:scale-[1.09] p-2 cursor-pointer bg-[#7272e9] rounded-2xl'> <FaHome className="md:h-7 md:w-7" size={22}/> </div>

        <div className="flex gap-5 md:gap-10 md:flex-col ">
            <div className=' hover:scale-[1.09] p-2 md:p-4 cursor-pointer transition-all hover:bg-[#7272e9] rounded-xl'><FaAccusoft className="md:h-5 md:w-5" size={17}/></div>
            <div className=' hover:scale-[1.09] p-2 md:p-4 cursor-pointer transition-all hover:bg-[#7272e9] rounded-xl'><FaList className="md:h-5 md:w-5" size={17}/></div>
            <div className=' hover:scale-[1.09] p-2 md:p-4 cursor-pointer transition-all hover:bg-[#7272e9] rounded-xl'><FaTasks className="md:h-5 md:w-5" size={17}/></div>
            <div className=' hover:scale-[1.09] p-2 md:p-4 cursor-pointer transition-all hover:bg-[#7272e9] rounded-xl'><FaSatellite className="md:h-5 md:w-5" size={17}/></div>
        </div>

        <div className='transition-all hover:scale-[1.09] cursor-pointer'> <FaQuidditch className="md:h-7 md:w-7" size={22}/> </div>
    </div>
  )
}

export default AdminMenu
