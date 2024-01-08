import { connectMongoDB } from "@/db/db";
import {getServerSession} from 'next-auth'
import UserInfo from "@/db/models/userInfo";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
    try {
        await connectMongoDB();
        const session = await getServerSession(authOptions)
        const email = session?.user?.email;

        return Response.json(
            await UserInfo.findOne({email})
        )
    } catch (error) {
    }
}