import { connectMongoDB } from "@/db/db";
import { type NextRequest, NextResponse } from "next/server";
import FoodItemModel from "@/db/models/foodItem/foodItem";

export async function GET(req: NextRequest ) {
  try {
      await connectMongoDB();

      const searchParams = req.nextUrl.searchParams;

      const search = searchParams.get('search');
      const category = searchParams.get('category');
      const sort = searchParams.get('sort');

      // Build the query object based on the provided parameters
      const query: any = {};

      if (search) {
        // Use a regular expression for partial matches
        query.name = new RegExp(search, 'i');
      }
      
      if (category) {
          query.category = category;
      }

      // Execute the query with sorting
      const items = await FoodItemModel.find(query)
      .sort(sort ? { [sort as string]: 1 } : null)

      if (items.length === 0) {
          return NextResponse.json({ message: "No items found matching the criteria" }, { status: 404 });
      }
      
      return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
      console.error("Error fetching menu items:", error);

      return NextResponse.json({ message: "Error fetching menu items" }, { status: 500 });
  }
}
