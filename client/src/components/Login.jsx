import React, { useState } from 'react'
import { FaKey, FaUser } from 'react-icons/fa'
import { getUser } from '../api/api.user';
import { motion } from "framer-motion";
import { FaCode} from "react-icons/fa";

const Login = ({logSign, setlogSign}) => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const handleLoginSumbit = async (e)=>{
        e.preventDefault();
        const CurrentUser = await getUser({username:username,password:password});
        localStorage.setItem('userid',CurrentUser.user.id)
        setusername('');
        setpassword('');
    }
  return (
    <div className='my-4 w-full'>
        <form onSubmit={handleLoginSumbit} className='flex-col justify-center items-center flex text-2xl gap-y-16 h-[40rem]'>

            <div className='' >
            <motion.div
                initial={{ scale: 10 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
                className="font-semibold jusc text-[#62F700] text-[2.7rem] relative"
            >
                CodeVerse{" "}
                <div className="absolute right-[-1.5rem] bottom-[-0.3rem]  text-xl text-red-500">
                <FaCode />
                </div>
            </motion.div>
            </div>

            <label className="input input-lg input-bordered flex w-96 items-center gap-2">
            <FaUser />
            <input onChange={(e)=>setusername(e.target.value)}  type="text" value={username} className="grow" placeholder="Username" />
            </label>

            <label className="input input-lg input-bordered w-96 flex items-center gap-2">
            <FaKey />
            <input onChange={(e)=>setpassword(e.target.value)} type="password" value={password} placeholder='Password' className="grow" />
            </label>
            <button className='btn w-[12rem] mx-auto bg-base-300 ' > Login </button>
            <span className='text-[#2e4bec] ' >Don't Have an Account <span
            onClick={()=>setlogSign(!logSign)}
            className='btn text-red-400' >create</span></span>
            </form>
    </div>
  )
}

export default Login