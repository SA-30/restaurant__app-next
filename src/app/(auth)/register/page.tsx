import RegisterForm from "@/components/auth/RegisterForm";
// import { getUserSession } from "@/lib/session";


const Register = async () => {
  // const user = await getUserSession()

  return (
    <>
      {/* <div>{JSON.stringify(user)}</div> */}
      <RegisterForm />
    </>
  )
}
export default Register



/*  Oauth



import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!

const authOptions:NextAuthOptions = {
    pages: {
        signIn:"/auth/login",
    },
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ account, profile}) {
            if(!profile?.email) {
                throw new Error ('No user profile');
            }

            // add/update user info in db here
            return true
        },
    },
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };

*/