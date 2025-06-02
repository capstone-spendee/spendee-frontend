'use client'

import { CheckCircle, ArrowRight } from "lucide-react"

const steps = [
  {
    title: "1. Daftar & Login",
    description: "Buat akun Spendee dengan email aktif, lalu login ke dashboard aplikasi.",
  },
  {
    title: "2. Lengkapi Data Diri",
    description: "Isi data customer yang ingin diperiksa dan informasi yang dibutuhkan untuk analisis kelayakan.",
  },
  {
    title: "3. Ajukan Analisis",
    description: "Pilih menu check eligibility, lalu klik tombol check eligibility untuk analisis pinjaman atau kelayakan startup.",
  },
  {
    title: "4. Lihat Hasil & Rekomendasi",
    description: "Hasil analisis dan rekomendasi akan muncul sebagai pop'up. Gunakan hasil ini sebagai pertimbangan keputusan finansial.",
  },
]

export default function HowToUsePage() {
  return (
    <div className=" px-4 py-10 sm:px-12 ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 ">Cara Menggunakan Spendee</h1>
        <p className="mb-8 text-base sm:text-lg">
          Ikuti langkah-langkah berikut untuk memulai menggunakan aplikasi Spendee.
        </p>
        <ol className="space-y-6">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="w-7 h-5 " />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg ">{step.title}</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 " />
                  )}
                </div>
                <p className=" mt-1">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center text-sm">
          Butuh bantuan lebih lanjut? Silakan cek halaman FAQ atau hubungi support Spendee.
        </div>
      </div>
    </div>
  )
}