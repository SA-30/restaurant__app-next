import nextAuth from "next-auth/next";
import  { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

import { connectMongoDB } from "@/db/db";
import User from "@/db/models/user";
import bcrypt from 'bcrypt';

export const authOptions:NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials){
                const {email, password} = credentials as {email: string, password: string};

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });

                    if(!user) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if(!passwordMatch) return null;

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            }
        })
    ],
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {signIn: '/login'},
} 

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST};