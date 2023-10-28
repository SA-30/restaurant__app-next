
import Link from "next/link";

const MethodChoose = () => {
  return (
    <div className='min-h-[100vh] flex flex-col items-center md:flex-row bg-red-200 justify-center gap-10'>
      <Link href='/orderFood'>
        <div className='transition-all hover:shadow-xl hover:scale-[1.02] w-40 flex flex-col items-center justify-center bg-blue-200 rounded-2xl cursor-pointer'>
          <div className='h-32 bg-red-400 w-full rounded-t-2xl'></div>
          <div className='px-5 py-3 text-sm font-bold'>ORDER FOOD</div>
        </div>
      </Link>
      <Link href='/takeAway'>
        <div className='transition-all hover:shadow-xl hover:scale-[1.02] w-40 flex flex-col items-center justify-center bg-blue-200 rounded-2xl cursor-pointer'>
          <div className='h-32 bg-red-400 w-full rounded-t-2xl'></div>
          <div className='px-5 py-3 text-sm font-bold'>TAKE AWAY</div>
        </div>
      </Link>
      <Link href='/reserveTable'>
        <div className='transition-all hover:shadow-xl hover:scale-[1.02] w-40 flex flex-col items-center justify-center bg-blue-200 rounded-2xl cursor-pointer'>
          <div className='h-32 bg-red-400 w-full rounded-t-2xl'></div>
          <div className='px-5 py-3 text-sm font-bold'>RESERVE TABLE</div>
        </div>
      </Link>
    </div>
  )
}

export default MethodChoose;