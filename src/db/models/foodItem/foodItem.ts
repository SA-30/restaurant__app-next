import mongoose from 'mongoose';

interface  foodItem {
  name: String,
  description: String,
  price: Number,
  category: String,
  isCombination: Boolean,
}

const foodItemSchema = new mongoose.Schema<foodItem>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['veg', 'buff', 'chicken', 'others'],
    required: true,
  },
  isCombination: {
    type: Boolean,
    default: false,
  },
});

const FoodItem = mongoose.model('Breakfast', foodItemSchema);

export default FoodItem;
