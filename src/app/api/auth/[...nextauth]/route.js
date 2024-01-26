import { connectMongoDB } from "@/db/db";
import clientPromise from '@/lib/mongoConnect';
import User from "@/db/models/user";
import bcrypt from 'bcrypt';
import NextAuth, { getServerSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import UserInfo from "@/db/models/userInfo";


export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email = credentials?.email; 
        const password = credentials?.password;
        await connectMongoDB()

        const user = await User.findOne({email}) 
        const passwordCheck = user && bcrypt.compareSync(password, user.password)
        if(passwordCheck){
          return user
        }

        return null
      }
    })
  ]
}


export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;

  if(!userEmail){
    return false;
  }

  const userInfo = await UserInfo.find({email: userEmail})
  if(!userInfo) {
    return false;
  }
  
  return userInfo[0].admin;
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


// import NextAuth from "next-auth/next";

// const authOptions = {
//     providers: [
//         
//     ],
// };

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST };

// adapter: MongoDBAdapter(clientPromise),