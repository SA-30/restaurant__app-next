import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return(
    <div className='min-h-screen flex flex-col md:flex-row bg-primaryColor justify-center items-center gap-10'>

      <Image className='md:w-[600px]' width={400} height={200} src='/assets/images/cafe3.png' alt='cafe1'/>

      <div className=' flex flex-col gap-10 font-bold border-2 px-5 pt-10 pb-5 border-blue-800 md:border-none'>
        <h1 className=' text-2xl md:text-5xl text-white'>Welcome to   Restaurapp</h1>
        <div className='flex flex-col justify-center md:flex-row gap-10 font-normal'>
          <Link href='/login'>
            <button className='transition-all  text-white bg-blue-500 px-10  text-sm py-3 rounded  w-full hover:shadow-lg hover:scale-105'  >Login</button>
          </Link>
          <Link href='/register'>
            <button className='transition-all  text-white bg-blue-500 px-10  text-sm py-3 rounded hover:shadow-lg hover:scale-105 w-full'>Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
