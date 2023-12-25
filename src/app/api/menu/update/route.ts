import { connectMongoDB } from "@/db/db";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import FoodItemModel, { FoodItem } from "@/db/models/foodItem/foodItem";


export async function PUT(req: NextApiRequest) {
    try {
        const itemId: String = req.query.id as String
        const updatedData: FoodItem = req.body

        // Check if the item exists
        const existingItem: FoodItem | null = await FoodItemModel.findById(itemId)
        if(!existingItem){
            return NextResponse.json({ message: "Item not found!!!" }, { status: 404 });
        }
        
        // Update the item in the database
        await FoodItemModel.findByIdAndUpdate(itemId, updatedData);
        
        return NextResponse.json({ message: "Item is updated in the database" }, { status: 200 });
    } catch (error) {
        console.error("Error updating item in the database:", error);
        return NextResponse.json({ message: "Failed to update the item in the database." }, { status: 500 });
    }
}