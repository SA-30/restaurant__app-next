import {FaEdit, FaPlus, FaWeight } from "react-icons/fa"
import AddNewItem from "../addNewItem/AddNewItem"
import { useEffect, useState } from "react"

function ManagementItem({addItem, items}: any) {
    const [itemss, setItemss] = useState<any>()
    
    const obj = {
        imgUrl: '/assets/images/chauminv.jpg',
        title: 'new item',
        weight: '2 plate',
        price: 'Rs 400',
    }

    const editDish = (item: any, index: number) => {
        console.log("Editing dish logic goes here...");
    }

    return (
        <div>
            <div className='relative grid grid-cols-2 md:grid-cols-5 gap-5 '>
                <div onClick={() => {addItem()}} className="transition-all flex flex-col border-[1px] border-adminblueColor justify-center items-center text-adminblueColor cursor-pointer hover:shadow-xl hover:scale-[1.01] gap-5">
                    <FaPlus size={10}/>
                    <p className="text-[12px]">Add new item</p>
                </div>
                {items.map((item: any, index: number) => (
                    <div key={index} className='transition-all border-[1px] hover:shadow-xl hover:shadow-[#5050ca17] cursor-pointer border-[#5050cab7] min-w-[150px] flex flex-col items-center rounded'>
                        <div className='h-20 w-20 mt-5 flex items-center justify-center rounded-[50%] bg-center bg-cover' style={{ backgroundImage: `url(${item?.imgUrl})`}}>
                        </div>

                        <div key={index} className='flex flex-col items-center w-full pt-5 gap-2'>
                            <h2 className='font-semibold'>{item?.title}</h2>
                            <div className='flex gap-2 items-center justify-center text-gray-400'>
                                <FaWeight className='opacity-50' size={10}/>
                                <p className='text-[12px] font-thin'>{item?.weight}</p>
                                <h2 className='font-bold ml-5 text-[12px]'>{item?.price}</h2>
                            </div>
                            <div className='flex items-center justify-center w-full text-[12px] text-gray-200 mt-2'>
                                <button onClick={() => editDish(item, index)} className="bg-[#4a4ab8bd] w-full py-3 flex justify-center items-center"><FaEdit size={15}/> &nbsp; Edit item</button>
                            </div>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default ManagementItem
