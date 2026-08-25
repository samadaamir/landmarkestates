import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between '>
            <div>Land Mark </div>
            <div>
                <Link href="/">Home</Link >
                <Link href="/about">About</Link >
                <Link href="/properties">Properties</Link >
                <Link href="/contact">Contact</Link >
            </div>
        

        </div>
    )
}

export default Navbar