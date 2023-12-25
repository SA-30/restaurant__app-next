import { connectMongoDB } from "@/db/db";
import FoodItemModel, {FoodItem} from "@/db/models/foodItem/foodItem";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest){
    try {
        await connectMongoDB()

        const items: FoodItem[] = await FoodItemModel.find() 
        return NextResponse.json(items, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "Error fetching menu items!!!"}, {status: 500})
    }
}