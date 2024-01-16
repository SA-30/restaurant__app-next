import { connectMongoDB } from "@/db/db";
import { NextResponse } from "next/server";
import FoodItemModel, {FoodItem} from "@/db/models/foodItem/foodItem";

export async function POST(req: any){
    try {
        const {name, description, price, category, isCombination, imageUrl}: FoodItem =  await req.json()
        await connectMongoDB();
        await FoodItemModel.create({name, description, price, category, isCombination, imageUrl});
        console.log("values-> ", {name, description, price, category, isCombination, imageUrl});
        
        return NextResponse.json({message: "Item is added in the database"}, {status: 201});
    } catch (error) {
        console.error("Error adding item to database:", error);

        return NextResponse.json({message: "Failed to add the item in database."}, {status: 500});
    }
}
