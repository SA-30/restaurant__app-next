import { connectMongoDB } from "@/db/db";
import User from "@/db/models/user";
import { isAdmin } from "../auth/[...nextauth]/route";

export async function GET(){
    await connectMongoDB();
    
    if(await isAdmin()){
        const users = await User.find();
        return Response.json(users);
    } else {
        return Response.json([]);
    }
}