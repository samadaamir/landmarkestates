import Link from 'next/link'
import React from 'react'
import { Mail } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='flex justify-between p-5.5 shadow-2xs items-center'>
            <div className='text-xl cursor-pointer'>Land Mark </div>
            <div className='gap-6.5 flex'>
                <Link href="/" className='hover:text-orange-500 transition-all text-xl'>Home</Link >
                <Link href="/about" className='hover:text-orange-500 transition-all text-xl'>About</Link >
                <Link href="/properties" className='hover:text-orange-500 transition-all text-xl'>Properties</Link >
                <Link href="/contact" className='hover:text-orange-500 transition-all text-xl'>Contact</Link >
            </div>
            <div className='p-1.5 rounded cursor-pointer hover:bg-black  hover:text-orange-500 transition-all'><Mail /></div>
        

        </div>
    )
}

export default Navbar