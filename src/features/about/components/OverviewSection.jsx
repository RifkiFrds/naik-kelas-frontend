import React from "react";
import { Target, BookOpen, Users, ShieldCheck, Handshake } from "lucide-react";
import FeatureCard from "./FeatureCard";
import ValueItem from "./ValueItem";

export default function OverviewSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">

        {/* ====== HEADER ====== */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-3">
          KELEBIHAN <span className="text-primary">ADAKOM NAIK KELAS</span>
        </h2>

        <p className="text-center text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
          Kami menghadirkan solusi yang relevan, praktis, dan terarah untuk membantu Anda berkembang lebih cepat.
        </p>

        {/* ====== FEATURE CARDS ====== */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-12 mb-20">
          <FeatureCard icon={<Target />} title="Solusi Bisnis" subtitle="Terintegrasi" />
          <FeatureCard icon={<BookOpen />} title="Edukasi" subtitle="Aksi Nyata" />
          <FeatureCard icon={<Users />} title="Kolaborasi" subtitle="Komunitas" />
          <FeatureCard icon={<ShieldCheck />} title="Transparan" subtitle="Terpercaya" />
          <FeatureCard icon={<Handshake />} title="Dukungan" subtitle="Kemitraan Luas" />
        </div>

        {/* ====== VALUES + IMAGE ====== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: TITLE + IMAGE */}
          <div>
            {/* Heading di atas gambar */}
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-5">
              NILAI & KOMITMEN KAMI
            </h3>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/about-overview.jpg"
                alt="Team Naik Kelas"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: VALUE TEXT */}
          <div className="mb-[-40px]">
            <p className="text-gray-600 text-sm md:text-base mb-5 max-w-md">
              Kami membangun Naik Kelas dengan nilai dasar yang menjadi budaya kami setiap hari:
            </p>

            <div className="space-y-4 font-semibold">
              <ValueItem text="Inovasi: selalu mencari cara baru untuk bisnis lebih efisien." />
              <ValueItem text="Kolaborasi: kami percaya sukses tercipta bersama, bukan sendiri." />
              <ValueItem text="Profesional: jujur, transparan, dan konsisten membantu pengguna." />
              <ValueItem text="Pertumbuhan: selalu belajar, dan beradaptasi dengan zaman." />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
