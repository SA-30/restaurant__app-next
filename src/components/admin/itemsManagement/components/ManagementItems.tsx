import ManagementItem from "./managementItem/ManagementItem"

function ManagementItems() {
  return (
    <div className='md:h-screen flex flex-col justify-between py-5 px-5 md:px-0'>
        <div className="mb-5 flex flex-col items-center md:items-start">
            <h1 className='md:text-2xl font-bold'>Settings</h1>
        </div>

        <div className=" bg-admindarkColor px-5 py-3 flex flex-col">
            <h2 className="font-semibold mb-5 text-[17px]">Project Management</h2>

            <ul className="mb-5 flex gap-10 text-[12px] text-gray-400">
                <li><button className="transition-all   bg-transparent px-1 py-1 border-b-[1px]  border-adminblueColor text-adminblueColor">All Item</button></li>
                <li><button className="transition-all   bg-transparent px-1 py-1 border-b-[1px] border-admindarkColor hover:border-adminblueColor hover:text-adminblueColor">Combination</button></li>
                <li><button className="transition-all   bg-transparent px-1 py-1 border-b-[1px] border-admindarkColor hover:border-adminblueColor hover:text-adminblueColor">Veg</button></li>
                <li><button className="transition-all   bg-transparent px-1 py-1 border-b-[1px] border-admindarkColor hover:border-adminblueColor hover:text-adminblueColor">Non veg</button></li>
            </ul>

            {/* Tables */}
            <div className="hide-scroolbar h-[50vh] md:h-[55vh] overflow-scroll  pr-5 md:mr-0 md:p-2">
                <ManagementItem />
            </div>

            
        </div>

        <div className="flex px-5 py-5 gap-5 bg-admindarkColor">
                <button className="transition-all hover:scale-[1.05]  bg-transparent hover:bg-adminblueColor text-[12px] border-[1px] border-adminblueColor py-3 px-10 ">Discard Changes</button>
                <button className="transition-all  bg-adminblueColor hover:shadow hover:scale-[1.05] text-[12px] border-[1px] border-adminblueColor py-3 px-10 ">Save Changes</button>
        </div>
    </div>
  )
}

export default ManagementItems
