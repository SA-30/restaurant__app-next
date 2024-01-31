import { NextResponse } from 'next/server';
// import { auth } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';
 
export async function GET() {
//   const {userId} = auth();
  const user = await currentUser();
 
  if(!user){
    return new Response("Unauthorized", { status: 401 });
  }
 
  const data = { message: user.emailAddresses[0].verification?.status };
  console.log(data);
 
  return NextResponse.json({ data });
}