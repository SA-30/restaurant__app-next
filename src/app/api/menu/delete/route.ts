import { connectMongoDB } from "@/db/db";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import FoodItemModel, { FoodItem } from "@/db/models/foodItem/foodItem";

export async function DELETE(req: NextApiRequest){
    try {
        const itemId: string = req.query.id as string;
        await connectMongoDB()

        // Check if the item exists
        const existingItem: FoodItem | null = await FoodItemModel.findById(itemId);
        if (!existingItem) {
            return NextResponse.json({ message: "Item not found", status: 404 });
        }

        // Delete the item from the database
        await FoodItemModel.findByIdAndDelete(itemId)

        return NextResponse.json({message: "Successfully deleted an item from menu"}, { status: 201})
    } catch (error) {
        return NextResponse.json({message: "Error deleting menu items!!!"}, {status: 500})
    }
}