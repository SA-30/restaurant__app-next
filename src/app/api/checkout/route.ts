import { connectMongoDB } from "@/db/db";
import { getServerSession } from "next-auth";
import { authOptions, isAdmin } from "../auth/[...nextauth]/route";
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

export async function PUT(req: any) {
    await connectMongoDB();

    const {id} = await req.json();
    console.log("getting id -> ",id);

    if(await isAdmin()) {
        const updatedOrder = await Order.findByIdAndUpdate(id, { paid: true });
        console.log("updating id -> ",updatedOrder);
        if (!updatedOrder) {
            return Response.json({msg: "Order not found"})
        }

        return Response.json({msg: "Payment completed"})
    }
    return Response.json({msg: "Your are not an Admin"})
}