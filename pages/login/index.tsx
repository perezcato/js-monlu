import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';



interface Props {}

const Login: React.FC<Props> = () => {
  const [email, setEmail] = useState("");
  const [register, setRegister] = useState(false);
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState({ text: "Continue", sending: false });

  const handleSubmit = () => {
// console
  }
  return (
    <>
    <div className="w-full flex m-auto items-center justify-center text-center ">
    <div className="w-3/6 bg-gray-50 h-screen">
    <div className="flex justify-between bg-gray-50">
    <Image
    src="/logo.png"
    alt="Vercel Logo"
    width={80}
    height={24}
    className="m-4 "
    priority
  />
    </div>
    <div className=" bg-gray-50 flex flex-col justify-center items-center ">
    <Image
    src="/chatting.svg"
    alt="Vercel Logo"
    width={300}
    height={24}
    className="justify-center my-10 bg-gray-50"
    priority
  />
<div className="flex items-start text-left"> <h3 className="font-bold text-2xl py-8 bg-gray-50 text-left">Build digital products with:</h3></div>

 
<ul className="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400 bg-gray-50">
<li className="flex items-center space-x-3 bg-gray-50">

    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 bg-gray-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
    <span>We have served businesses across Ghana & USA since 2012</span>
</li>
<li className="flex items-center space-x-3 bg-gray-50">

    <svg className="bg-gray-50 flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
    <span>We commit to preparing work with the precision of robots</span>
</li>
<li className=" bg-gray-50 flex items-center space-x-3">

    <svg className="bg-gray-50 flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
    <span>Advisors & accountants that focus on building relationships</span>
</li>
</ul>

    </div>
 
    </div>

    <div className="w-3/6 items-center justify-center">
    <div className="justify-center items-center ">
    
    <h3 className="font-bold text-xl">Sign in</h3>
    <p>Dont have an account yet? <Link href='/signup' className="font-bold text-blue-500">Sign up here</Link></p>
    <div className=" my-4 rounded-lg flex items-center justify-center border w-2/4 m-auto"> 
    <Image
    src="/google.png"
    alt="Vercel Logo"
    width={20}
    height={24}
    className="m-4 "
    priority
  />
    Sign in with Google
    </div>
    <div className="flex w-2/4 m-auto items-center justify-center text-gray-100">
    <div className="border w-2/4 bg-gray-50 mr-2"></div>
    <div className="text-sm text-gray-500">OR</div>
    <div className="border w-2/4 bg-gray-50 ml-2"></div>
    </div>

    <form onSubmit={handleSubmit} className="w-2/4 m-auto grid gap-4">
    <div className="grid gap-y-2">
        <label htmlFor="email" className="text-left text-sm font-semibold">Email</label>
        <input type="email" id="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)}
            className="bg-white border border-slate-300 text-slate-900 rounded-lg focus:outline-none focus:border-blue-400 px-2.5 py-2 focus-within:outline-none"
            placeholder="johndoe@mail.com" required />
    </div>
    <div className="grid gap-y-2">
        <label htmlFor="password" className="text-left text-sm font-semibold">Password</label>
        <input type="password" id="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)}
            className="bg-white border border-slate-300 text-slate-900 rounded-lg focus:outline-none focus:border-blue-400 px-2.5 py-2 focus-within:outline-none"
            placeholder="********" required />
    </div>
    <div className="grid md:flex items-center justify-between gap-y-4 gap-x-5 pb-3">
        <div className="flex items-center gap-x-3">
            <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value=""
                    className="w-4 h-4 bg-slate-50 rounded border border-slate-300 focus:ring-3 focus:ring-blue-300"
                    />
            </div>
            <label htmlFor="remember" className="text-sm font-medium text-slate-900">Remember
                me</label>
        </div>
        <label
            className="cursor-pointer text-sm font-medium text-slate-900">Forgot
            Password?</label>
    </div>
    <Link type="submit"
              className="text-white bg-blue-700 hover:bg-blue-900 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm uppercase px-5 py-3.5 tracking-widest" href={'/'}>
       {btn.text}
    </Link>
</form>
    </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Login;