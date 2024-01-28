'use client'

import { useEffect, useState } from "react"
import HorizontalItem from "./item/HorizontalItem"

// Make a type file and import from there
type MenuItem = {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    category: string;
    isCombination: Boolean,
};

const cafe = './assets/images/cafe2.png'

const HorizontalMenu = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [allItems, setAllItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        fetchMenuItems();
    }, []);

    // Create custom hook for this function
    const fetchMenuItems = async () => {
        try {
          setLoading(true);

            // Fetch data once when the component mounts
            const res = await fetch(`/api/menu?isCombination=false`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
          
            if (!res.ok) {
              throw new Error("Failed to fetch menu items");
            }
    
            const data = await res.json();
            setAllItems(data.items); // Store all items locally
        } catch (error: any) {
            setError(error.message || "Error loading menu items");
        } finally {
            setLoading(false);
        }
    };

    const filterItems = () => {
        if (selectedCategory === '') {
            return allItems;
        }

        return allItems.filter(item => item.category === selectedCategory);
    };

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    if (error) return <div>{error}</div>;

    return (
        <div className="mt-10">
            <div>
                <div className="flex justify-center">
                    <div className="flex justify-start gap-40 md:gap-56 px-5 ">
                        <h3> MENU </h3>
                        <h3> SORT BY </h3>
                    </div>
                </div>

                <div className="flex justify-center">
                    <ul className="flex px-5 mt-5 gap-5 md:gap-14 font-bold">
                        <li 
                            className={`cursor-pointer ${selectedCategory === '' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('')}
                        > All </li>
                        <li 
                            className={`cursor-pointer ${selectedCategory === 'veg' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('veg')}
                        > Veg </li>
                        <li
                            className={`cursor-pointer ${selectedCategory === 'buff' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('buff')}
                        > Buff </li>
                    </ul>
                </div>
            </div>
            
            <div className=" flex  flex-row justify-center gap-5 mx-5 mt-10  ">
                {loading && ( 
                    Array.from({length: 5}).map((_, index: number) => (
                    <div key={index} className='bg-gray-800 min-w-[150px] flex flex-col rounded-2xl'>
                        <div className='h-40 flex items-center justify-center rounded-t-2xl bg-center bg-cover'>
                        </div>
                        <div className='flex flex-col p-4 gap-2'>
                            <h2 className='font-bold'></h2>
                            <div className='flex gap-2 items-center justify-start'>
                                <p className='text-[12px] font-thin'></p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h2 className='font-bold'></h2>
                            </div>
                        </div>
                    </div>
                )))}

                <div className=" grid grid-cols-2  md:grid-cols-5  md:justify-center gap-5  overflow-x-auto ">
                    {!loading && filterItems().length > 0 && (
                        filterItems().map((item: any, index) => (
                            <HorizontalItem key={index} imgUrl={item.imageUrl} title={item.name} weight={item.description} price={item.price}/>
                        ))
                    )}
                </div>

                {!loading && selectedCategory === '' && filterItems().length === 0 && (
                    <div className="text-white">No items available.</div>
                )}
            </div>
        </div>
    )
}

export default HorizontalMenu
