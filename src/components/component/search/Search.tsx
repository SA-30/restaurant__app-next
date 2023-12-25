'use client'

import React, { useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import Link from 'next/link';

const Search = ({onSearch}: any) => {
const [items, setItems] = useState([]);
const [search, setSearch] = useState<string>('')

const handleChange = (event: any) => {
  const searchText = event.target.value;
  setSearch(searchText);
};

useEffect(() => {
  if (search.trim() !== '') {
    fetchMenuItems();
  } else {
    // Clear items when the search query is empty
    setItems([]);
  }
}, [search]);


const fetchMenuItems = async () => {
  try {
    const res = await fetch(`
    /api/menu?isCombination=false&search=${search !== '' ? search: ''}`,
    {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch menu items");
      }

      const data = await res.json();
      setItems(data.items);
    } catch (error: any) {
      console.log('Error loading menu items');
    }
  };
  
  return (
    <div className='relative'>
      <div className='text-white rounded-3xl bg-gray-800 flex md:mt-5 justify-between w-full md:w-96 px-5 py-3'>
        <input type="text" placeholder='Search a food' className='bg-transparent outline-none'  onChange={handleChange}/>
        <FaSearch size={20}/>
      </div>

      {search.trim() !== '' && (
        <div className='absolute mt-7 bg-gray-800 text-white rounded-xl py-5 px-3 w-full'>
          {items.length > 0 ? (
            items.map((item: any, index: number) => (
              <Link href='/items'>
              <div className='border rounded-xl p-2 my-4 flex gap-2' key={index}>
                <div>
                  <img src={item.imageUrl} alt={item.name} className='w-16 h-16 rounded-md' />
                </div>
                <div className='flex flex-col justify-around'>
                  <div className='font-bold'>{item.name}</div>
                  <div className='text-sm'>{item.description} . Rs {item.price}</div>
                </div>
              </div>
              </Link>
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search
