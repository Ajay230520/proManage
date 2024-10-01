import React from 'react'
import Button from './Button/Button'
import Logo from './Logo'

function Navbar() {
    return (
        <div className='w-full py-3 px-5 bg-slate-300 flex items-center justify-between gap-3'>
            <Logo name={"proManage"} />
            <ul className='flex gap-4'>
                <li><a href="/" className='text-gray-600 hover:text-gray-900'>Home</a></li>
                <li><a href="/blogs" className='text-gray-600 hover:text-gray-900'>Blogs</a></li>
                <li><a href="/projects" className='text-gray-600 hover:text-gray-900'>Projects</a></li>
                <li><a href="/about" className='text-gray-600 hover:text-gray-900'>About</a></li>
                <li><a href="/contact" className='text-gray-600 hover:text-gray-900'>Contact</a></li>
            </ul>
            <div className="flex justify-center items-center gap-3 ">

                <a href="/signup"><Button text={"SignUp"} /></a>
                <a href="/login"><Button text={"Login"} /></a>
            </div>
        </div>
    )
}

export default Navbar
