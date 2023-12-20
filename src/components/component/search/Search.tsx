import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Search = () => {
  return (
    <div className='text-white rounded-3xl bg-gray-800 flex md:mt-5 justify-between w-full md:w-96 px-5 py-3'>
      <input type="text" placeholder='Search a food' className='bg-transparent outline-none '/>
      <FaSearch size={20}/>
    </div>
  )
}

export default Search
