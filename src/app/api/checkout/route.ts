import { connectMongoDB } from "@/db/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import Order from "@/db/models/Order";

export async function POST (req: any) {
    await connectMongoDB();

    const {cartProducts, address, phone} = await req.json();

    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    const orderDocument = await Order.create({
        email,
        phone,
        address,
        cartProducts,
        paid: false,
    })

    return Response.json({msg: "Successflly added items to the database"})
}