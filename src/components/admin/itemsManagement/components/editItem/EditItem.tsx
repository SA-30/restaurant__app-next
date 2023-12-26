'use client'

import React, { useState } from 'react';

interface EditItemProps {
  item: any;
  onEdit: (editedItem: any) => void;
  onCancel: () => void;
}

const EditItem: React.FC<EditItemProps> = ({ item, onEdit, onCancel }) => {
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedItem((prevItem: EditItemProps) => ({ ...prevItem, [name]: value }));
  };

  const handleSave = () => {
    onEdit(editedItem);
  };

  return (
    <div className="edit-item-form">
      <input
        type="text"
        name="title"
        value={editedItem.title}
        onChange={handleInputChange}
      />
      
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditItem;