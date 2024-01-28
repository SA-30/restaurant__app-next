'use client'

import React, { useContext, useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { CldImage } from 'next-cloudinary';
import { CartContext } from '@/components/appContext';

const Search = ({onSearch}: any) => {
  const {addToCart} = useContext(CartContext);

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null)
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
      setError(null)
    } catch (error: any) {
      setError(error)
    }
  };

  const handleSearchClick = (item: any) => {
    // addToCart(item);
  }
  
  return (
    <div className='relative'>
      <div className='text-white rounded-3xl bg-gray-800 flex md:mt-5 justify-between w-full md:w-96 px-5 py-3'>
        <input type="text" placeholder='Search a food' className='bg-transparent outline-none'  onChange={handleChange}/>
        <FaSearch size={20}/>
      </div>

      {search.trim() !== '' && !error && (
        <div className='absolute z-[20] shadow-2xl mt-7 bg-gray-800 text-white rounded-xl py-5 px-3 w-full'>
          {items.length > 0 ? (
            items.map((item: any, index: number) => (
              <div className='transition-all  cursor-pointer hover:scale-[0.95]' onClick={() => handleSearchClick(item)}>
              <div className='border rounded-xl p-2 my-4 flex gap-2' key={index}>
              <div className="">
                {item.imageUrl && <CldImage
                    width="100"
                    height="100"
                    src={item.imageUrl}
                    sizes="100vw"
                    alt={item.name}
                    className="w-full  min-h-[50px] rounded-2xl "
                />}
            </div>
                <div className='flex flex-col justify-around'>
                  <div className='font-bold'>{item.name}</div>
                  <div className='text-sm'>{item.description} . Rs {item.price}</div>
                </div>
              </div>
              </div>
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
