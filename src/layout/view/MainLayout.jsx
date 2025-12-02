import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
    <Navbar />
      <main className="min-h-screen p-4 bg-[#F0F0F0]">
        <Outlet />
      </main>
    <Footer />
    </>
  )
}

export default MainLayout
