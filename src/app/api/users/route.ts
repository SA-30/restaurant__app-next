import { connectMongoDB } from "@/db/db";
import User from "@/db/models/user";

export async function GET(){
    await connectMongoDB();
    const users = await User.find()

    return Response.json(users)
}