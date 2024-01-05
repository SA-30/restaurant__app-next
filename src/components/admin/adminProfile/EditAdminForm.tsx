import React, { useState } from 'react';

const EditAdminForm = ({toggleForm, formDatas}: any) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    number: '',
    restaurant: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  const handleSaveChanges = () => {

    // Implement logic to save changes using formData
    formDatas(formData)
    toggleForm()
  };

  const handleDiscardChanges = () => {
    // Implement logic to discard changes or reset form
    setFormData({
        name: '',
        location: '',
        number: '',
        restaurant: ''
    })
    toggleForm()
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-20 md:pt-0">
      <form className="bg-gray-900 rounded-xl p-8  shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-semibold text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded-md text-gray-500 bg-gray-950 outline-none border-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="restaurant" className="block text-gray-600 font-semibold text-sm mb-2">
          Restaurant
          </label>
          <input
            type="text"
            id="restaurant"
            name="restaurant"
            value={formData.restaurant}
            onChange={handleChange}
            className="w-full border p-2 rounded-md text-gray-500 bg-gray-950 outline-none border-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-600 font-semibold  text-sm mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-2 rounded-md text-gray-500 bg-gray-950 outline-none border-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-600 font-semibold text-sm mb-2">
            Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full border p-2 rounded-md text-gray-500 bg-gray-950 outline-none border-none"
          />
        </div>

        <div className="mt-10 flex justify-between gap-5">
          <button
            type="button"
            onClick={handleSaveChanges}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 focus:outline-none"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={handleDiscardChanges}
            className="bg-gray-950 text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none"
          >
            Discard Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAdminForm;
