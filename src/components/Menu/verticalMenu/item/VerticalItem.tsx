import {FaWeight, FaPlus} from 'react-icons/fa';
import Link from 'next/link';

interface MethodHeaderProps{
    imgUrl: string,
    title: string,
    weight: string,
    price: string,
}

const VerticalItem: React.FC<MethodHeaderProps> = (props) => {
    
    return (
        <Link href="/items">
            <div className='bg-gray-800 shadow-lg shadow-gray-800/25 text-white flex flex-row  rounded-2xl'>
            <div className='flex-1 h-36 w-96 bg-red-400 flex items-center justify-center rounded-l-2xl bg-center bg-cover' style={{ backgroundImage: `url(${props.imgUrl})`}}></div>
            <div className='flex-1 flex flex-col p-4 gap-2 w-[100px]  justify-center rounded-r-2xl'>
                <h2 className='font-bold'>{props.title}</h2>
                <div className='flex gap-2 items-center justify-start'>
                    <FaWeight className='opacity-50' size={10}/>
                    <p className='text-[12px] font-thin'>{props.weight}</p>
                </div>
                <div className='flex items-center justify-between '>
                    <h2 className='font-bold'>{props.price}</h2>
                    <div className='cursor-pointer bg-white p-2 rounded-full'>
                        <FaPlus className='text-orange-500 h-4 w-4 md:h-5 md:w-5' size={20}/>
                    </div>
                </div>
            </div>
            </div>
        </Link>
    )
}

export default VerticalItem
