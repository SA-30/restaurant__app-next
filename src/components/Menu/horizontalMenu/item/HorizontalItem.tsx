import {FaWeight, FaPlus} from 'react-icons/fa';

interface MethodHeaderProps{
    title: string,
    weight: string,
    price: string,
}

const HorizontalItem: React.FC<MethodHeaderProps> = (props) => {
    
    return (
        <div className='bg-gray-800 min-w-[150px] flex flex-col rounded-2xl'>
            <div className='h-40 bg-red-400 flex items-center justify-center rounded-t-2xl'></div>
            <div className='flex flex-col p-4 gap-2'>
                <h2 className='font-bold'>{props.title}</h2>
                <div className='flex gap-2 items-center justify-start'>
                    <FaWeight className='opacity-50' size={10}/>
                    <p className='text-[12px] font-thin'>{props.weight}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold'>{props.price}</h2>
                    <div className='cursor-pointer bg-gray-600 p-2 rounded-full'><FaPlus size={10}/></div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalItem
