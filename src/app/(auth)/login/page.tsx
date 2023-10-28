import LoginForm from "@/components/auth/LoginForm";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation'
import {getServerSession} from 'next-auth';

const Login = async () => {
  const session = await getServerSession(authOptions);
  if(session) redirect("/dashboard");

  return <LoginForm />;
}
export default Login
