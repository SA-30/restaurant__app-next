'use client'

import React, { useEffect, useState } from "react";
import ManagementItem from "./managementItem/ManagementItem";
import AddNewItem from "./addNewItem/AddNewItem";


function ManagementItems() {
    const [itemForm, setItemForm] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const [items, setItems] = useState([
        {
            imgUrl: '/assets/images/momov.jpg',
            title: 'Veg Momo',
            weight: '1 plate',
            price: 'Rs 100',
        },
        {
            imgUrl: '/assets/images/momoc.jpg',
            title: 'Buff Momo',
            weight: '1 plate',
            price: 'Rs 120',
        },
        {
            imgUrl: '/assets/images/chauminc.jpg',
            title: 'Buff Chaumin',
            weight: '1 plate',
            price: 'Rs 160',
        },
        {
            imgUrl: '/assets/images/chauminv.jpg',
            title: 'Veg Chaumin',
            weight: '1 plate',
            price: 'Rs 120',
        },
        {
            imgUrl: '/assets/images/momov.jpg',
            title: 'Veg Momo',
            weight: '1 plate',
            price: 'Rs 100',
        },
        {
            imgUrl: '/assets/images/momoc.jpg',
            title: 'Buff Momo',
            weight: '1 plate',
            price: 'Rs 120',
        },
        {
            imgUrl: '/assets/images/chauminc.jpg',
            title: 'Buff Chaumin',
            weight: '1 plate',
            price: 'Rs 160',
        },
        {
            imgUrl: '/assets/images/chauminv.jpg',
            title: 'Veg Chaumin',
            weight: '1 plate',
            price: 'Rs 120',
        },
    ]);

    // SelectedCategory 
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category)
    }

    // AddItem
    const addItem = (newItem: any) => {
        setItems((prevItems) => [newItem, ...prevItems]);
        setItemForm(false);
    };

    // DeleteItem
    const deleteItem = (itemToDelete: any) => {
        setItems((prevItems) =>
          prevItems.filter((item) => item !== itemToDelete)
        );
      };

  return (
    <div className='md:h-screen flex flex-col justify-between py-5 px-5 md:px-0'>
        
        <div className="mb-5 flex flex-col items-center md:items-start">
            <h1 className='md:text-2xl font-bold'>Settings</h1>
        </div>

        <div className=" bg-admindarkColor px-5 py-3 flex flex-col">
            <h2 className="font-semibold mb-5 text-[17px]">Project Management</h2>
            <ul className="mb-5 flex gap-10 text-[12px] text-gray-400">
                <li><button onClick={() => handleCategoryClick('all')} className={`transition-all   bg-transparent px-1 py-1 border-b-[1px] ${selectedCategory === 'all' ? 'text-adminblueColor border-adminblueColor' : 'border-admindarkColor text-gray-400'} text-adminblueColor hover:border-adminblueColor hover:text-adminblueColor`}>All Item</button></li>
                <li><button onClick={() => handleCategoryClick('combination')} className={`transition-all   bg-transparent px-1 py-1 border-b-[1px] ${selectedCategory === 'combination' ? 'text-adminblueColor border-adminblueColor' : 'border-admindarkColor text-gray-400'} text-adminblueColor hover:border-adminblueColor hover:text-adminblueColor`}>Combination</button></li>
                <li><button onClick={() => handleCategoryClick('veg')} className={`transition-all   bg-transparent px-1 py-1 border-b-[1px] ${selectedCategory === 'veg' ? 'text-adminblueColor border-adminblueColor' : 'border-admindarkColor text-gray-400'} text-adminblueColor hover:border-adminblueColor hover:text-adminblueColor`}>Veg</button></li>
                <li><button onClick={() => handleCategoryClick('buff')} className={`transition-all   bg-transparent px-1 py-1 border-b-[1px] ${selectedCategory === 'buff' ? 'text-adminblueColor border-adminblueColor' : 'border-admindarkColor text-gray-400'} text-adminblueColor hover:border-adminblueColor hover:text-adminblueColor`}>Buff</button></li>
                <li><button onClick={() => handleCategoryClick('chicken')} className={`transition-all   bg-transparent px-1 py-1 border-b-[1px] ${selectedCategory === 'chicken' ? 'text-adminblueColor border-adminblueColor' : 'border-admindarkColor text-gray-400'} text-adminblueColor hover:border-adminblueColor hover:text-adminblueColor`}>Chicken</button></li>
            </ul>
            {/* Tables */}
            <div className="hide-scroolbar h-[50vh] flex flex-col md:h-[55vh] overflow-scroll  pr-5 md:mr-0 md:p-2">
            {itemForm ? (
                <div className="z-[10]">
                    <AddNewItem addItem={addItem} />
                </div>
                ) : (
                <ManagementItem items={items} setItemForm={setItemForm} deleteItem={deleteItem}/>
            )}
            </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-5 px-5 py-5 bg-admindarkColor">
            <button onClick={() => {setItemForm(false)}} className="transition-all hover:scale-[1.05]  bg-transparent hover:bg-adminblueColor text-[12px] border-[1px] border-adminblueColor py-3 px-10 ">Discard Changes</button>
         </div>
    </div>
  )
}

export default ManagementItems
