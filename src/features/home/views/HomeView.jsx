import React from "react";
import HeroSection from "../components/HeroSection"; 

function HomeView() {   
    return (
        <div className="min-h-screen"> 
            {/* Panggil Hero Section di paling atas */}
            <HeroSection />

            {/* Konten halaman lainnya bisa ditambahkan di bawah ini nanti */}
            <div className="container mx-auto p-4 py-12 text-center">
                <h2 className="text-2xl font-bold text-secondary mb-4">Fitur Unggulan Kami</h2>
                <p className="text-gray-600">Konten lainnya akan segera hadir...</p>
            </div>
        </div>
    );
};

export default HomeView;