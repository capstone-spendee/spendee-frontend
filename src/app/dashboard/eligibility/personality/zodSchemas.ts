import { z } from 'zod';
import { cleanCurrencyToNumber } from '../formtaIdr';
import { cleanPercentageToNumber } from '../formatPersent';


export const personalitySchema = z.object({
  Total_Utang_Terhadap_Pendapatan: z.coerce.string({invalid_type_error: 'please enter a number'}).min(0, 'minimum 0%'),
  Pendapatan_Bulanan: z.coerce.string().min(0),//jika mimimal bisa -0 : hapus min 
  Pendapatan_Tahunan: z.coerce.string().min(0),
  Suku_Bunga_Yang_Diterapkan: z.coerce.string().min(0, 'minimum 0%'),
  Jumlah_Pinjaman: z.coerce.string().min(0),
  Suku_Bunga_Awal: z.coerce.string().min(0, 'minimum 0%'),
  Tingkat_Pendidikan: z.string().min(2, 'minimum 2 characters').max(10),
  Kekayaan_Bersih: z.coerce.string().min(0),
  Pembayaran_Pinjaman_Bulanan: z.coerce.string().min(0),
  Total_Aset: z.coerce.string().min(0),
  Usia_Pemohon: z.coerce.number().min(17, 'minimum age 17 years').max(75, 'maximum age 75 years'),
  Skor_Kelayakan_Kredit: z.coerce.number().min(0, 'minimum 0'),
  Pengalaman_Kerja: z.coerce.number().min(0, 'minimum 0 years'),
  Durasi_Sejarah_Kredit: z.coerce.number().min(0, 'minimum 0 months'),
  Periode_Pembayaran_Pinjaman: z.coerce.number().min(1, 'minimum 1 month'),
  Pembayaran_Utang_Bulanan: z.coerce.string().min(0),
  Saldo_Tabungan: z.coerce.string().min(0),
  Jumlah_Pengecekan_Kredit: z.coerce.number().min(0),
  Jumlah_Tanggungan: z.coerce.number().min(0),
  Jumlah_Jalur_Kredit_Aktif: z.coerce.number().min(0, 'minimum 0'),
});

export const transformPersonalityData = (data: z.infer<typeof personalitySchema>) => {
  return {
    Total_Utang_Terhadap_Pendapatan: cleanPercentageToNumber(data.Total_Utang_Terhadap_Pendapatan),
    Pendapatan_Bulanan: cleanCurrencyToNumber(data.Pendapatan_Bulanan),
    Pendapatan_Tahunan: cleanCurrencyToNumber(data.Pendapatan_Tahunan),
    Suku_Bunga_Yang_Diterapkan: cleanPercentageToNumber(data.Suku_Bunga_Yang_Diterapkan),
    Jumlah_Pinjaman: cleanCurrencyToNumber(data.Jumlah_Pinjaman),
    Suku_Bunga_Awal: cleanPercentageToNumber(data.Suku_Bunga_Awal),
    Tingkat_Pendidikan: data.Tingkat_Pendidikan,
    Kekayaan_Bersih: cleanCurrencyToNumber(data.Kekayaan_Bersih),
    Pembayaran_Pinjaman_Bulanan: cleanCurrencyToNumber(data.Pembayaran_Pinjaman_Bulanan),
    Total_Aset: cleanCurrencyToNumber(data.Total_Aset),
    Usia_Pemohon: data.Usia_Pemohon,
    Skor_Kelayakan_Kredit: data.Skor_Kelayakan_Kredit,
    Pengalaman_Kerja: data.Pengalaman_Kerja,
    Durasi_Sejarah_Kredit: data.Durasi_Sejarah_Kredit,
    Periode_Pembayaran_Pinjaman: data.Periode_Pembayaran_Pinjaman,
    Pembayaran_Utang_Bulanan: cleanCurrencyToNumber(data.Pembayaran_Utang_Bulanan),
    Saldo_Tabungan: cleanCurrencyToNumber(data.Saldo_Tabungan),
    Jumlah_Pengecekan_Kredit: data.Jumlah_Pengecekan_Kredit,  
    Jumlah_Tanggungan: data.Jumlah_Tanggungan,   
    Jumlah_Jalur_Kredit_Aktif: data.Jumlah_Jalur_Kredit_Aktif,
  };
};