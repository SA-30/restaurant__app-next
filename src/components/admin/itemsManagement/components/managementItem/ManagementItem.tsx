'use client'

import {FaEdit, FaPlus, FaTrash, FaWeight } from "react-icons/fa"
import DeleteConfirmationDialog from "@/components/component/ConfirmationDialog/DeleteConfirmationDialog";
import { useState } from "react";
// import EditItem from "../editItem/EditItem";

interface ManagementItemProps {
    items: any[];
    setItemForm: any;
    deleteItem: (itemToDelete: any) => void;
  }

  const ManagementItem: React.FC<ManagementItemProps> = ({ items, setItemForm, deleteItem }) => {
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<any>(null);
    
    const showDeleteDialog = (item: any) => {
        setItemToDelete(item);
        setShowDeleteConfirmation(true);
      };
    
      const hideDeleteDialog = () => {
        setItemToDelete(null);
        setShowDeleteConfirmation(false);
      };
    
      const confirmDelete = () => {
        
        if (itemToDelete) {
          deleteItem(itemToDelete);
          hideDeleteDialog();
        }
      };

    return (
        <div>
            {showDeleteConfirmation && (
                <DeleteConfirmationDialog onCancel={hideDeleteDialog} onConfirm={confirmDelete} />
            )}
             <div className='relative grid grid-cols-2 md:grid-cols-5 gap-5 '>
                    <div onClick={setItemForm} className="transition-all min-h-[200px] flex flex-col border-[1px] border-adminblueColor justify-center items-center text-gray-800 cursor-pointer hover:shadow-xl hover:scale-[1.01] gap-5">
                        <FaPlus size={10}/>
                        <p className="text-[12px]">Add new item</p>
                    </div>
                    {items.map((item: any, index: number) => (
                        <div key={index} className='transition-all border-[1px] hover:shadow-xl hover:shadow-[#5050ca17] cursor-pointer border-[#5050cab7] min-w-[150px] flex flex-col items-center rounded'>
                            <div className='h-20 w-20 mt-5 flex items-center justify-center rounded-[50%] bg-center bg-cover' style={{ backgroundImage: `url(${item?.imageUrl})`}}>
                            </div>
    
                            <div key={index} className='flex flex-col items-center w-full pt-5 gap-2'>
                                <h2 className='font-semibold text-black'>
                                    {item?.name} 
                                    <span className="ml-2 text-[10px] font-bold">
                                        ({item?.category})
                                    </span>
                                </h2>
                                <div className='flex gap-2 items-center justify-center text-gray-800'>
                                    <FaWeight className='opacity-50' size={10}/>
                                    <p className='text-[12px] font-semibold '>{item?.description}</p>
                                    <h2 className='font-black ml-5 text-[12px]'>Rs. {item?.price}</h2>
                                    {/* <h2 className='font-bold ml-5 text-[12px]'>{item?.category}</h2> */}
    
                                </div>
                                <div className='flex items-center justify-center w-full text-[12px] text-white mt-2'>
                                    {/* <button onClick={() => editDish(item, index)} className="bg-[#4a4ab8bd] w-full py-3 flex justify-center items-center"><FaEdit size={15}/> &nbsp; Edit item</button> */}
                                    <button  onClick={() => showDeleteDialog(item)} className="bg-red-500 w-full py-3 flex justify-center items-center mt-2"><FaTrash size={15}/> &nbsp; Delete item</button>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div>
        </div>
    )
}

export default ManagementItem
