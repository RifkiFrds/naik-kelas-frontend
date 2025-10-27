import React from 'react'

function Navbar() {
  return (
    <div className="bg-blue-600 text-white p-4">
        <nav className="mt-2">
            <a href="/" className="mr-4 hover:underline">Home</a>
            <a href="/about" className="mr-4 hover:underline">About</a>
            <a href="/bussinesservice" className="mr-4">Layanan Bisnis</a>
            <a href="/contact" className="hover:underline">Contact</a>
        </nav>
    </div>
  )
}

export default Navbar
