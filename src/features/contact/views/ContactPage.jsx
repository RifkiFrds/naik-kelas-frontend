// ContactPage.jsx
import React from "react";
import { Mail, MapPin, PhoneCall, ChevronRight } from "lucide-react";

const serviceOptions = [
  "Konsultasi Bisnis",
  "Legalitas & Sertifikasi",
  "Modul Bisnis",
  "Kemitraan F&B",
  "Trading & Komunitas",
  "Webinar & Workshop",
  "Lainnya",
];

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: sambungkan ke API / WhatsApp / layanan form
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      {/* SECTION 1: Hero Kontak + Form */}
      <section className="max-w-6xl mx-auto px-4 lg:px-0 py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left: Copywriting & Info */}
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              TERHUBUNG DENGAN TIM {" "}
              <span className="text-[#FFBC41]">ADAKOM NAIK KELAS</span>
            </h1>
            <p className="text-slate-600 leading-relaxed">
              Kami siap membantu kebutuhan bisnismu, mulai dari konsultasi,
              layanan legalitas, hingga pendampingan bisnis. Isi formulir di
              samping, dan tim kami akan menghubungi dalam waktu{" "}
              <span className="font-semibold text-slate-900">1×24 jam</span>.
            </p>

            <div className="space-y-3 pt-2">
              <ContactInfoRow
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                value="hello@naikkelas.id"
              />
              <ContactInfoRow
                icon={<PhoneCall className="w-4 h-4" />}
                label="WhatsApp / Telepon"
                value="+62 823-4560-0777"
              />
              <ContactInfoRow
                icon={<MapPin className="w-4 h-4" />}
                label="Kantor"
                value="Saliccowork Gedung Soho Capital Lt 37, Tanjung Duren, Jakarta Barat"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-gray-100 shadow-md rounded-2xl p-6 md:p-7 border border-slate-100">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Formulir Konsultasi
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Field label="Nama Lengkap">
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-50"
                  placeholder="Masukkan nama lengkap"
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-50"
                  placeholder="nama@email.com"
                />
              </Field>

              <Field label="Nomor Telepon / WhatsApp">
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-50"
                  placeholder="08xxxxxxxxxx"
                />
              </Field>

              <Field label="Jenis Layanan yang Dibutuhkan">
                <select
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-50"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Pilih salah satu
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Pesan Anda">
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-slate-50 resize-none"
                  placeholder="Ceritakan kebutuhan bisnismu secara singkat..."
                ></textarea>
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                Kirim
                <ChevronRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-slate-500 pt-1">
                Dengan mengirim formulir ini, kamu setuju untuk dihubungi oleh
                tim Naik Kelas terkait layanan yang dipilih.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: Lokasi & Map */}
      <section className="rounded-lg border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 lg:px-0 py-10 lg:py-12 space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100">
              <MapPin className="w-3 h-3 text-yellow-600" />
            </span>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-slate-900">
                Lokasi Kami
              </h2>
              <p className="text-sm text-slate-600">
                Kunjungi kantor kami untuk konsultasi langsung atau pertemuan
                bisnis terjadwal.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            {/* Ganti src iframe dengan embed Google Maps kamu sendiri */}
            <iframe
              title="Lokasi Naik Kelas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.72942957392!2d106.787327!3d-6.172560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6c7c1c9c1eb%3A0x1234567890abcdef!2sSoho%20Capital!5e0!3m2!1sid!2sid!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] md:h-[380px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Small reusable components ---------- */

function Field({ label, children }) {
  return (
    <label className="block text-xs font-medium text-slate-700 space-y-1">
      <span>{label}</span>
      {children}
    </label>
  );
}

function ContactInfoRow({ icon, label, value, dark = false }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs ${
          dark
            ? "bg-slate-800 text-gray-900"
            : "bg-[#FFBC41] text-gray-900"
        }`}
        style={{
          borderColor: "#FFBC41"
        }}
      >
        {icon}
      </div>

      <div>
        <p
          className={`text-[11px] uppercase tracking-wide ${
            dark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {label}
        </p>
        <p className={`text-sm ${dark ? "text-slate-100" : "text-slate-800"}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
