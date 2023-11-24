
import {FaSkull,FaArrowUp, FaArrowDown, FaTable} from 'react-icons/fa'

function AdminTable({onTableSelection}: any) {
    const tables = [
        {
            name: "Table 1",
            status: "available",
            dish : [  'Veg Momo', 'Pure vegitarian momo' ],
        },
        {
            name: "Table 2",
            status: "booked",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
        {
            name: "Table 3",
            status: "available",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
        {
            name: "Table 4",
            status: "available",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
        {
            name: "Table 5",
            status: "booked",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
        {
            name: "Table 6",
            status: "available",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
        {
            name: "Table 7",
            status: "booked",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
        {
            name: "Table 8",
            status: "available",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
        {
            name: "Table 9",
            status: "available",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
        {
            name: "Table 10",
            status: "available",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
        {
            name: "Table 11",
            status: "available",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
        {
            name: "Table 12",
            status: "available",
            dish: [
                'Veg Momo', 'Pure vegitarian momo'
            ],
        },
    ]

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 '>
            
            {tables.map((table, index) => (
            <div 
                key={index} 
                onClick={() => onTableSelection(table)}
                className='transition-all hover:scale-[1.02] cursor-pointer '>
                    <div className={`p-3 pr-20 bg-admindarkColor ${table.status == 'available' ? "hover:bg-admingreenColor" : "hover:bg-adminredColor"}`}>
                    <div className='flex items-center gap-2 mb-4'>
                        <div className='p-1 bg-gray-600 rounded'>{table.status == 'available' ? <FaTable size={10}/> : <FaSkull size={10}/>}</div>
                        <p className={`text-[10px] ${table.status == 'available' ? "text-admingreenColor" : "text-adminredColor"}`}>{table.status}</p>
                        <div className={`p-1 rounded-3xl ${table.status == 'available' ? "text-admingreenColor bg-[#305230]" : "text-adminredColor bg-[#523030]"}`}>
                            
                            {table.status == 'available' ?<FaArrowUp size={6}/> : <FaArrowDown size={6}/>}
                        </div>
                    </div>
                <h1 className='text-xl font-semibold mb-2'>{table.name}</h1>
                <div className='text-[8px]'> 
                    {table.dish.map((dishItem, index) => (
                        <div key={index}>
                            {dishItem}
                        </div>
                    ))} 
                </div>
                </div>
            </div>
            ))}
        
        </div>
    )
}

export default AdminTable
