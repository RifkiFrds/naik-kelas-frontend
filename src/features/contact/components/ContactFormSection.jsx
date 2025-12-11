import React, { useState } from "react";
import { Mail, PhoneCall, MapPin, ChevronRight } from "lucide-react";
import { useContactService } from "../hooks/useContactService";
import SuccessModal from "./SuccessModal";
import { FadeInUp } from "../../../lib/motion/index";

const serviceOptions = [
  "Konsultasi Bisnis",
  "Legalitas & Sertifikasi",
  "Modul Bisnis",
  "Kemitraan F&B",
  "Trading & Komunitas",
  "Webinar & Seminar",
  "Lainnya",
];

export default function ContactFormSection() {
  const { submitContact, loading } = useContactService();

  const [showSuccess, setShowSuccess] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    email: "",
    nomor_telepon: "",
    jenis_layanan: "",
    pesan: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await submitContact(form);

    if (resp.success) {
      setShowSuccess(true);

      // Reset form
      setForm({
        nama: "",
        email: "",
        nomor_telepon: "",
        jenis_layanan: "",
        pesan: "",
      });

      // Auto close modal
      setTimeout(() => setShowSuccess(false), 2500);
    } else {
      alert("Gagal mengirim pesan.");
    }
  };

  return (
    <>
      {/* SUCCESS MODAL */}
      <SuccessModal show={showSuccess} onClose={() => setShowSuccess(false)} />

        <FadeInUp>
      <section className="max-w-6xl mx-auto px-4 lg:px-0 py-14">
        <div className="grid gap-10 md:grid-cols-2 items-start">

          {/* LEFT INFO */}
          <div className="space-y-5">
            <h1 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
              TERHUBUNG DENGAN TIM 
              <span className="text-primary"> ADAKOM NAIK KELAS</span>
            </h1>

            <p className="text-gray-600 text-sm leading-relaxed">
              Isi formulir dan tim kami akan menghubungi Anda dalam 
              <span className="font-semibold text-secondary"> 1×24 jam.</span>
            </p>

            <div className="space-y-3 pt-2">
              <ContactInfoRow icon={<Mail size={18} />} label="Email" value="adakomkelashebat@gmail.com" />
              <ContactInfoRow icon={<PhoneCall size={18} />} label="WhatsApp" value="+62 823-4560-0777" />
              <ContactInfoRow icon={<MapPin size={18} />} label="Kantor" value="Soho Capital Lt 37, Jakarta Barat" />
            </div>
          </div>

          {/* FORM */}
          <div className=" shadow-lg rounded-2xl p-6 md:p-8 border border-gray-200">
            <h2 className="text-lg font-semibold text-secondary mb-4">
              Formulir Konsultasi Bisnis
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <Field label="Nama Lengkap">
                <input
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Nama lengkap"
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="nama@email.com"
                />
              </Field>

              <Field label="Nomor Telepon / WhatsApp">
                <input
                  name="nomor_telepon"
                  value={form.nomor_telepon}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="08xxxxxxxxxx"
                />
              </Field>

              <Field label="Jenis Layanan">
                <select
                  name="jenis_layanan"
                  value={form.jenis_layanan}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="" disabled>Pilih salah satu</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </Field>

              <Field label="Pesan Anda">
                <textarea
                  rows={4}
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  className="form-input resize-none"
                  placeholder="Ceritakan kebutuhan Anda..."
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex justify-center items-center gap-2 py-3 rounded-lg text-secondary font-bold"
              >
                {loading ? "Mengirim..." : "Kirim"}
                <ChevronRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
      </FadeInUp>
    </>
  );
}

/* Components */
function Field({ label, children }) {
  return (
    <label className="block text-xs font-semibold text-secondary space-y-1">
      <span>{label}</span>
      {children}
    </label>
  );
}

function ContactInfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-secondary">
        {icon}
      </div>
      <div>
        <p className="text-[11px] uppercase text-gray-500">{label}</p>
        <p className="text-sm text-secondary font-medium">{value}</p>
      </div>
    </div>
  );
}
