'use client'

import { useState, useEffect } from 'react'
import HorizontalItem from "./item/VerticalItem"

interface MenuItem {
    imageUrl: string;
    name: string;
    description: string;
    price: string;
  }

const VerticalMenu = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMenuItems();
    }, [])

    const fetchMenuItems = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/menu?isCombination=true',
            {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
            }})

            if (!res.ok) {
                throw new Error("Failed to fetch menu items");
            }
            
            const data = await res.json()
            setItems(data.items)
        } catch (error: any) {
            setError(error.message || "Error loading menu items");
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <div className="mt-10 pb-10 md:mt-20 flex flex-col">
            <h1 className="text-lg mx-5 md:text-center">Combination Breakfast</h1>
            {loading === true ?
            <div className='min-h-[300px]'></div> : 
            <div className=" flex flex-col md:items-center gap-5 mx-5 mt-10 ">
                {items.map((item: MenuItem, index) => (
                    <HorizontalItem imgUrl={item.imageUrl} key={index} title={item.name} weight={item.description} price={item.price}/>
                ))}
            </div>}
            
        </div>
    )
}

export default VerticalMenu
