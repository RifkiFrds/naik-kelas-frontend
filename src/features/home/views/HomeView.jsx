import React from "react";
import HeroSection from "../components/HeroSection"; 
import MiniAboutSection from "../components/MiniAboutSection";
import MiniServiceSection from "../components/MiniServiceSection";
import MulaiBisnisSection from "../components/MulaiBisnisSection";
import TestimoniSection from "../components/TestimoniSection";

function HomeView() {   
    return (
        <div className="min-h-screen"> 
            {/* Panggil Hero Section di paling atas */}
            <HeroSection />
            <MiniAboutSection />
            <MiniServiceSection />
            <MulaiBisnisSection />
            <TestimoniSection />

            <div className="text-secondary text-2xl md:text-5xl font-bold leading-snug text-center mt-6 mb-10">
                <i>“<span className="text-primary mb-10 ">SOLUSI</span> LENGKAP UNTUK MENDUKUNG SEMUA <br/>
                ASPEK <span className="text-primary">PERTUMBUHAN BISNIS</span> ANDA”</i>
            </div>
        </div>
    );
};

export default HomeView;