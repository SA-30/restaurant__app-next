import Link from 'next/link'

export default function Home() {
  return(
    <div className='min-h-screen flex flex-col justify-center items-center gap-10 font-bold font-serif'>
      <h1 className='text-5xl'>Welcome to Restaurapp</h1>
      <div className='flex gap-10'>
        <Link href='/login'>
          <button className='transition-all text-white bg-blue-500 px-10 text-sm py-2 rounded  w-full hover:shadow-lg hover:scale-105' >Login</button>
        </Link>
        <Link href='/register'>
          <button className='transition-all text-white bg-blue-500 px-10 text-sm py-2 rounded hover:shadow-lg hover:scale-105 w-full' >Register</button>
        </Link>
      </div>
    </div>
  )
}
