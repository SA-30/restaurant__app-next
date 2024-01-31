import { connectMongoDB } from "@/db/db";
// import { getServerSession } from "next-auth";
// import { authOptions, isAdmin } from "../auth/[...nextauth]/route";
import Order from "@/db/models/Order";

export async function GET (req: any) {
    await connectMongoDB();

    // const session = await getServerSession(authOptions);
    // const email = session?.user?.email;
    // let admin = await isAdmin();

    const email="1@gmail.com"

    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    if(_id){
        return Response.json(await Order.findById(_id));
    }

    return Response.json( await Order.find({email}))
    
    // if(admin) {
    //     return Response.json(await Order.find())
    // }

    // if(email){
    //     return Response.json( await Order.find({email}))
    // }
}