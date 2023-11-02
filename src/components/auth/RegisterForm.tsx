'use client'

import React,{useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    // Handle form submission and login logic

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if(!name || !email || !password){
            setError("Please fill all fields!!!");
            return;
        }

        // try {
        //     const resUser = await fetch('api/userExists', {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({ email })
        //     })

        //     const { user } = await resUser.json();

        //     if( user ) {
        //         setError("User already Exists!!!");
        //     }

        //     const res = await fetch('api/register', {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             name, email, password
        //         })
        //     })

        //     if(res.ok){
        //         const form = e.target;
        //         form.reset();
        //         router.push('/login')
        //     } else {
        //         console.log("User registration failed");
                
        //     }
        // } catch (error) {
        //     console.log("Error during registration", error);
        // }

        router.push('/login')
    }

    return (
        <div className="flex justify-center items-center h-[100vh] bg-primaryColor text-white">
        <form onSubmit={handleSubmit} className="w-64 p-4 bg-gray-800 shadow-lg rounded-lg  border-t-4 border-blue-900">
            <h2 className="text-2xl font-bold mb-4">Signup</h2>
            <div className="mb-4">
            <input
                type="text"
                className="w-full p-2 bg-gray-800  border-b-[1px]   border-gray-500 focus:border-gray-300 rounded outline-none"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="mb-4">
            <input
                type="email"
                className="w-full p-2 bg-gray-800  border-b-[1px]   border-gray-500 focus:border-gray-300 rounded outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
        
            <div className="mb-4">
            <input
                type="password"
                className="w-full p-2 bg-gray-800  border-b-[1px]   border-gray-500 focus:border-gray-300 rounded outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
            Sign up
            </button>
            {error && <h2 className="text-red-500 mt-2 py-2 rounded text-sm">{error}</h2>}
            <p className="flex text-[12px] justify-between my-5">
                Doesn't have an account?
                <Link href="/login" className="font-bold text-blue-500 mr-5">
                    Login
                </Link>
            </p>
        </form>
        </div>
    );
}

export default RegisterForm;