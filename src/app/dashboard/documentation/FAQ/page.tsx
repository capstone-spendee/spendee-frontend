'use client'

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    "question": "Apa itu Spendee?",
    "answer": "Aplikasi ini membantu mengevaluasi apakah seseorang cocok untuk diberikan pinjaman berdasarkan data dan analisis kepribadian serta riwayat mereka."
  },
  {
    "question": "Apakah aplikasi ini bisa digunakan untuk startup?",
    "answer": "Bisa! Aplikasi ini membantu mengevaluasi kelayakan startup sebelum diberikan pendanaan, dengan mempertimbangkan profil tim, ide, dan rencana bisnis mereka."
  },
  {
    "question": "Bagaimana cara aplikasi menentukan kelayakan peminjam?",
    "answer": "Aplikasi menganalisis berbagai faktor, termasuk profil kepribadian, riwayat finansial, dan data pendukung lainnya untuk memberikan rekomendasi objektif."
  },
  {
    "question": "Apakah data saya aman?",
    "answer": "Kami mengutamakan keamanan data. Semua informasi dienkripsi dan hanya digunakan untuk analisis internal, tanpa dibagikan kepada pihak lain."
  },
  {
    "question": "Apa yang dimaksud dengan analisis kepribadian dalam aplikasi ini?",
    "answer": "Analisis kepribadian membantu memahami gaya kepemimpinan, cara pengambilan keputusan, dan pola perilaku seseorang yang penting dalam menentukan kelayakan pinjaman."
  },
  {
    "question": "Apakah hasil dari aplikasi ini bisa dijadikan acuan mutlak?",
    "answer": "Hasil analisis adalah rekomendasi berbasis data. Keputusan akhir tetap di tangan pengguna atau pihak pemberi pinjaman."
  },
  {
    "question": "Apakah ada biaya untuk menggunakan aplikasi ini?",
    "answer": "Kami menyediakan versi gratis dengan fitur dasar, dan versi premium dengan analisis yang lebih mendalam dan dukungan tambahan."
  },
  {
    "question": "Bagaimana cara memulai menggunakan aplikasi ini?",
    "answer": "Daftar akun, isi data yang diperlukan, lalu aplikasi akan mulai melakukan analisis dan memberikan rekomendasi."
  },
  {
    "question": "Apakah aplikasi ini hanya untuk individu, atau bisa digunakan untuk perusahaan?",
    "answer": "Aplikasi ini bisa digunakan untuk individu maupun perusahaan/startup yang ingin mengevaluasi kelayakan tim atau founder mereka."
  },
  {
    "question": "Bagaimana jika saya tidak setuju dengan hasil analisis?",
    "answer": "Silakan gunakan hasil analisis sebagai masukan, bukan keputusan mutlak. Kami sarankan untuk mengevaluasi lebih lanjut sesuai konteks dan kebutuhanmu."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Title */}
        <div className="col-span-1 flex flex-col items-start pt-4">
          <span className="text-green-600 font-medium mb-2">FAQ</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Pertanyaan Seputar <br /> Spendee
          </h1>
        </div>
        {/* Right: FAQ List */}
        <div className="col-span-2">
          <div className="divide-y">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <button
                  className="w-full flex justify-between items-center py-5 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="text-base sm:text-lg font-medium">{faq.question}</span>
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="pb-5 pl-1 pr-8 text-gray-600 text-sm sm:text-base animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}