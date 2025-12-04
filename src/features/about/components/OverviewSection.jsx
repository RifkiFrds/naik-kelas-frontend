import React from "react";
import { Target, BookOpen, Users, ShieldCheck, Handshake } from "lucide-react";
import FeatureCard from "./FeatureCard";
import ValueItem from "./ValueItem";

export default function OverviewSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-secondary mb-12">
          Kelebihan <span className="text-primary">Naik Kelas</span>
        </h2>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-20">
          <FeatureCard icon={<Target />} title="Solusi Bisnis" subtitle="Terintegrasi" />
          <FeatureCard icon={<BookOpen />} title="Edukasi" subtitle="Aksi Nyata" />
          <FeatureCard icon={<Users />} title="Kolaborasi" subtitle="Komunitas" />
          <FeatureCard icon={<ShieldCheck />} title="Transparan" subtitle="Terpercaya" />
          <FeatureCard icon={<Handshake />} title="Dukungan" subtitle="Kemitraan Luas" />
        </div>

        {/* VALUES + IMAGE ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/images/about-overview.jpg"
              alt="Team Naik Kelas"
              className="w-full object-cover"
            />
          </div>

          {/* VALUES */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Nilai & Komitmen Kami
            </h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Kami membangun Naik Kelas berdasarkan nilai-nilai yang menjadi budaya kami setiap hari:
            </p>

            <div className="space-y-4 font-semibold">
              <ValueItem text="Inovasi: selalu mencari cara baru untuk membuat bisnis lebih efisien." />
              <ValueItem text="Kolaborasi: kami percaya sukses tercipta bersama, bukan sendiri." />
              <ValueItem text="Profesionalisme: jujur, transparan, dan konsisten membantu pengguna." />
              <ValueItem text="Pertumbuhan: terus belajar, berkembang, dan beradaptasi dengan zaman." />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
