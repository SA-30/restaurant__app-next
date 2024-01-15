import { connectMongoDB } from "@/db/db";
import {getServerSession} from 'next-auth'
import UserInfo from "@/db/models/userInfo";
import User from "@/db/models/user";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST() {
    try {
        await connectMongoDB();
        const session = await getServerSession(authOptions);
        const email = session?.user?.email;

        if(email === null) return Response.json({msg: 'Login first'})

        const existingUser = await UserInfo.findOne({ email });

        if(existingUser){
            return Response.json({ msg: 'User already exists', admin: existingUser.admin });
        } else {
            await UserInfo.create({ email, admin: false });
            return Response.json({ msg: 'Successfully added admin', admin: false  });
        }
    } catch (error: any) {
        console.log("error ", error.message)
        return Response.json({msg: 'Failed to add admin'})
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const session = await getServerSession(authOptions)
        const email = session?.user?.email;

        if(!email){
            return Response.json({})
        }

        const user = await User.findOne({email}).lean()
        const userInfo = await UserInfo.findOne({email}).lean()
        // const userInfo = await UserInfo.findOneAndUpdate(
        //     {email},
        //     {},
        //     {new: true, upsert: true}
        // ).lean()
        console.log("admin wala -> ", {...user, ...userInfo});
        return Response.json({...user, ...userInfo})

        // console.log("admin wala -> ", {...user, ...userInfo});
        // return Response.json({...user, ...userInfo})
    } catch (error) {
    }
}