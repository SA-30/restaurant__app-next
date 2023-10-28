'use client'
import Link from 'next/link'
import { FormEvent, useState } from 'react';
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if(!email || !password){
            setError("Please fill all fields!!!");
            return;
        }

    try {
        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if(res && res.error){
          setError("Invalid Credentials");
          return;
        }

        router.replace("dashboard");
        } catch (error) {
        console.log(error);
        }
    }

    return (
        <div className="flex justify-center items-center h-[100vh] bg-gray-400">
        <form onSubmit={handleSubmit} className="w-64 p-4 bg-white shadow-lg rounded-lg border-t-4 border-blue-200">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className="mb-4">
            <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-4">
            <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
            Login
            </button>
            {error && <h2 className="text-red-500 mt-2 py-2 rounded text-sm">{error}</h2>}
            <p className="flex text-[12px] justify-between my-5">
                Doesn't have an account?
                <Link href="/register" className="font-bold text-blue-500 mr-5">
                    Signup
                </Link>
            </p>
        </form>
        </div>
    );
}

export default LoginForm
