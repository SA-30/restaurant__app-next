import { connectMongoDB } from "@/db/db";
import User from "@/db/models/user";
import bcrypt from 'bcrypt';
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
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
})

export { handler as GET, handler as POST }


// import NextAuth from "next-auth/next";

// const authOptions = {
//     providers: [
//         
//     ],
// };

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST };