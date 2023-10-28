import RegisterForm from "@/components/auth/RegisterForm";

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const Login = async () => {
  const session = await getServerSession(authOptions);
  if(session) redirect('/dashboard');
  
  return <RegisterForm />;
}
export default Login
