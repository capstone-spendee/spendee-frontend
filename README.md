# SPENDEE

> **Platform penyedia pinjaman dan evaluasi kesehatan keuangan untuk startup** - Solusi berbasis data untuk membantu investor dan lembaga keuangan dalam menentukan kelayakan pendanaan startup dan individu, sekaligus memberdayakan startup dalam tahap awal untuk meningkatkan peluang mendapatkan pendanaan.

## 🎯 Tentang Project

**SPENDEE** adalah platform inovatif yang dirancang untuk mengatasi tantangan dalam dunia pendanaan startup. Banyak investor dan lembaga keuangan kesulitan menentukan startup atau individu yang layak untuk didanai karena proses penilaian yang kompleks dan risiko yang tinggi.

### 🔍 Latar Belakang Masalah
- Investor dan bank kesulitan menilai kelayakan startup untuk pendanaan
- Proses evaluasi memerlukan analisis cermat terhadap data keuangan yang kompleks
- Tingginya risiko kesalahan dalam keputusan pemberian pinjaman
- Startup sulit mendapatkan akses pendanaan karena kurangnya transparansi dalam penilaian

### 💡 Solusi yang Ditawarkan
Platform **SPENDEE** menyediakan:
- **Evaluasi berbasis data** untuk meminimalisir risiko kesalahan pendanaan
- **Interface yang user-friendly** dan mudah dipahami
- **Sistem prediksi** untuk meningkatkan akurasi keputusan investasi
- **Tools komprehensif** untuk startup dalam mempersiapkan proposal pendanaan

### 🎯 Tujuan
- Memberdayakan startup dalam tahap awal dengan tools yang tepat
- Meningkatkan pertumbuhan kewirausahaan di Indonesia
- Memperkuat ekosistem ekonomi digital
- Menciptakan transparansi dalam proses pendanaan

## 🚀 Features

### 🎯 Fitur Utama Website
- ✅ **Login & Register** - Sistem autentikasi lengkap dengan middleware protection
- ✅ **Update Profile** - Kelola informasi profil pengguna
- ✅ **Check Eligibility** - Cek kelayakan untuk startup dan personality assessment
- ✅ **Chatbot Consultation** - Konsultasi pribadi dengan AI chatbot
- ✅ **Currency Converter** - Konversi Rupiah ke Dollar untuk mengetahui nilai pasar terkini
- ✅ **Feedback System** - Sistem feedback untuk melaporkan masalah atau saran

### 🔧 Fitur Teknis
- ✅ **Responsive Design** - Tersedia untuk desktop dan mobile
- ✅ **Protected Routes** - Dashboard dengan middleware authorization
- ✅ **Modern UI** - Interface modern dengan Tailwind CSS
- ✅ **TypeScript Support** - Type safety untuk development yang lebih aman
- ✅ **Cookie-based Authentication** - Session management yang secure

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** Cookie-based auth
- **Deployment:** Vercel

## 📋 Prerequisites

Pastikan kamu sudah install:
- Node.js (versi 18 atau lebih baru)
- npm, yarn, pnpm, atau bun

## 🔧 Installation

1. Clone repository ini:
```bash
git clone [repository-url]
cd [project-name]
```

2. Install dependencies:
```bash
npm install
# atau
yarn install
# atau
pnpm install
# atau
bun install
```

3. Setup environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` sesuai dengan konfigurasi kamu.

4. Jalankan development server:
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

5. Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📁 Project Structure

```
├── public/                 # Static files (images, icons, etc.)
├── src/                   # Source code
│   ├── app/              # App Router (Next.js 14+)
│   │   ├── (auth)/       # Authentication route group
│   │   │   ├── sign-in/  # Login page
│   │   │   └── sign-up/  # Register page
│   │   ├── api/          # API routes
│   │   │   ├── form-feedback/  # Feedback API
│   │   │   └── model/    # ML model endpoints
│   │   ├── components/   # Page-specific components
│   │   ├── dashboard/    # Protected dashboard area
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   ├── not-found.tsx # 404 page
│   │   └── page.tsx      # Homepage
│   ├── components/       # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions & configurations
├── middleware.ts        # Route protection middleware
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
└── README.md
```

## 🔐 Authentication

Project ini menggunakan cookie-based authentication dengan middleware Next.js untuk protect routes.

### Protected Routes
- `/dashboard/*` - Memerlukan authentication

### Public Routes
- `/` - Homepage
- `/sign-in` - Login page

## 🚧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build untuk production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Coding Guidelines

- Gunakan TypeScript untuk type safety
- Follow ESLint rules yang sudah dikonfigurasi
- Gunakan Tailwind CSS untuk styling
- Komponen harus reusable dan well-documented

## 📚 Learn More

Untuk mempelajari lebih lanjut tentang teknologi yang digunakan:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features dan API
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript guide
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework

## 🚀 Deployment

### Deploy di Vercel (Recommended)

1. Push code ke GitHub/GitLab/Bitbucket
2. Import project di [Vercel](https://vercel.com/new)
3. Deploy otomatis setiap push ke main branch

### Manual Deploy

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork repository ini
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Your Name - [spendeea23@gmail.com](mailto:spendeea23@gmail.com)

Project Link: [https://github.com/capstone-spendee/spendee-frontend](https://github.com/capstone-spendee/spendee-frontend)

---

⭐ Jangan lupa kasih star kalau project ini membantu!
