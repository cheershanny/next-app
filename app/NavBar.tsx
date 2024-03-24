import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='bg-gray-800 px-5 py-5 text-white'>
      <Link href="/" className="mr-5" >Home</Link>
      <Link href="/users" className='mx-5'>Users</Link>
      <Link href="/products" className='mx-5'>Products</Link>
    </div>
  )
}

export default NavBar