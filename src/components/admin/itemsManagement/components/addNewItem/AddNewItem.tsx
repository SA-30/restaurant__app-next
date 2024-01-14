'use client'

import React,{ useState } from 'react';

function AddNewItem({addItem}: any) {
  const [newItem, setNewItem] = useState({
    imageUrl: '/assets/images/cafe2.png',
    name: '',
    description: '',
    isCombination: false,
    category:'buff',
    price: 0, 
  });

  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    // Handle the selected file, e.g., upload or process it
    console.log('Selected file:', file);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: name === 'price' ? Number(value) : value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addItem(newItem);

    setNewItem({
      imageUrl: '/assets/images/cafe2.png',
      name: '',
      description: '',
      isCombination: false,
      category:'buff',
      price: 0,
    });
  };

  return (
    <div className="md:w-[60vw] w-auto fixed top-[45%] left-[50%] md:top-[55%] transform translate-x-[-50%] translate-y-[-50%] flex items-center justify-center py-10 px-10 md:py-5 md:px-40 bg-adminbgColor border-2 border-adminblueColor text-white">
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">

        {/* <div className=' flex justify-centersdf  border-dotted border-[2px] border-adminblueColor'>
          <input
            id="image"
            placeholder="Image"
            name="imgUrl"
            value={newItem.imgUrl}
            hidden
            className="pb-2 outline-none bg-transparent border-b-[1px] border-adminblueColor"
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
          />
          <label
            htmlFor="image"
            className="p-5 cursor-pointer transition duration-300 ease-in-out w-full text-center"
          >
            Upload Photo
          </label>
        </div> */}
        <input
          placeholder="Name"
          className="border text-sm font-bold rounded w-full py-2 px-3 text-black outline-none"
          type="text"
          value={newItem.name}   
          name="name"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          placeholder="Weight"
          className="border text-sm font-bold rounded w-full py-2 px-3 text-black outline-none"
          type="text"
          value={newItem.description}
          name="description"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input
          placeholder="Price"
          className="border text-sm font-bold rounded w-full py-2 px-3 text-black outline-none"
          type="number"
          value={newItem.price}
          name="price"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <button type='submit' className="transition-all bg-adminblueColor hover:shadow hover:scale-[1.05] text-[12px] border-[1px] border-adminblueColor mt-3 py-2 px-10">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNewItem;
