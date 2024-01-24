import { connectMongoDB } from "@/db/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import UserInfo from "@/db/models/userInfo";

export async function GET (req: any) {
    await connectMongoDB();

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    let isAdmin = false;

    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    if(_id){
        // return Response.json(await Order.findById(_id));
    }
    

    if (email) {
        const userInfo = await UserInfo.findOne({email});
        if(userInfo){
            isAdmin = userInfo.admin;
        }
    }

    if(isAdmin) {
        // return Response.json(await Order.find())
    }

    if(email){
        // return Response.json( await Order.find({email}))
    }
}