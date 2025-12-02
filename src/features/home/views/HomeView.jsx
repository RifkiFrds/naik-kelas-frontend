import React from "react";
import HeroSection from "../components/HeroSection"; 
import MiniAboutSection from "../components/MiniAboutSection";
import MiniServiceSection from "../components/MiniServiceSection";
import MiniPublicService from "../components/MiniPublicService";
import MulaiBisnisSection from "../components/MulaiBisnisSection";
import TestimoniSection from "../components/TestimoniSection";

function HomeView() {   
    return (
        <div className="min-h-screen"> 
            {/* Panggil Hero Section di paling atas */}
            <HeroSection />
            <MiniAboutSection />
            <MiniServiceSection />
            <MiniPublicService />
            <MulaiBisnisSection />
            <TestimoniSection />
        </div>
    );
};

export default HomeView;