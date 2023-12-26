'use client'

import { useEffect, useState } from "react"
import HorizontalItem from "./item/HorizontalItem"
import { FaPlus, FaWeight } from "react-icons/fa";

const cafe = './assets/images/cafe2.png'

const HorizontalMenu = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        fetchMenuItems();
    }, [selectedCategory]);

    const fetchMenuItems = async () => {
        try {
          setLoading(true);

        //   For future - Instead of fetching on category change, Fetch data once and store on localstorage/cookies.
          const res = await fetch(`
          /api/menu?isCombination=false&category=${selectedCategory === 'all' ? '': selectedCategory}`,
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
          setError(error.message || "Error loading menu items");
        } finally {
          setLoading(false);
        }
    };

    if (error) return <div>{error}</div>;

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div className="mt-10">
            <div>
                <div className="md:flex md:justify-center">
                    <div className="flex justify-between md:justify-start md:gap-56 px-5 ">
                        <h3> MENU </h3>
                        <h3> SORT BY </h3>
                    </div>
                </div>

                <div className="md:flex md:justify-center">
                    <ul className="flex px-5 mt-5 gap-5 md:gap-14">
                        <li 
                            className={`cursor-pointer ${selectedCategory === 'all' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('all')}
                        > All </li>
                        <li 
                            className={`cursor-pointer ${selectedCategory === 'veg' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('veg')}
                        > Veg </li>
                        <li
                            className={`cursor-pointer ${selectedCategory === 'buff' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('buff')}
                        > Buff </li>
                        {/* <li
                            className={` ${selectedCategory === 'buff' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('chicken')}
                        > Chicken </li> */}
                    </ul>
                </div>
            </div>

            {selectedCategory === '' && loading === true && (
                <div className=" flex flex-row md:justify-center gap-5 ml-5 mt-10 overflow-x-auto hide-scroolbar">
                    {Array.from({length: 5}).map((_, index: number) => (
                        <div key={index} className='bg-gray-800 min-w-[150px] flex flex-col rounded-2xl'>
                        {/* <div className='h-40 flex items-center justify-center rounded-t-2xl bg-center bg-cover' style={{ backgroundImage: `url(${cafe})`}}></div> */}
                        <div className='flex flex-col p-4 gap-2'>
                            <h2 className='font-bold'></h2>
                            <div className='flex gap-2 items-center justify-start'>
                                {/* <FaWeight className='opacity-50' size={10}/> */}
                                <p className='text-[12px] font-thin'></p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h2 className='font-bold'></h2>
                                <div className='cursor-pointer bg-gray-600 p-2 rounded-full'>
                                    {/* <FaPlus size={10}/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            )}

            <div className="flex flex-row md:justify-center gap-5 ml-5 mt-10 overflow-x-auto hide-scroolbar" style={{ height: items.length > 0 ? 'auto' : '300px' }}>
                {items.length > 0 ? (
                    items.map((item: any, index) => (
                        <HorizontalItem key={index} imgUrl={item.imageUrl} title={item.name} weight={item.description} price={item.price}/>
                    ))
                ) : (
                    null
                )}
            </div>
        </div>
    )
}

export default HorizontalMenu
