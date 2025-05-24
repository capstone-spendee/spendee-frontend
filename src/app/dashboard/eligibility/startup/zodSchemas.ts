import { z } from 'zod';
import { cleanCurrencyToNumber } from '../formtaIdr';

// Fungsi menghitung selisih tahun dari tanggal ke hari ini (float 2 angka di belakang koma)
const formatDate = (date: string): number => {
  const today = new Date();
  const d = new Date(date);
  return parseFloat(((today.getTime() - d.getTime()) / (365 * 24 * 60 * 60 * 1000)).toFixed(2));
};

// const cleanCurrency = (value: string) =>
//   value.replace(/[^0-9]/g, "") // contoh: "Rp. 1.000.000" => "1000000"

// Schema validasi input dari form
export const startupSchema = z.object({
  tanggal_pencapaian_terakhir: z.coerce
    .string()
    .min(7)
    .nonempty('Date cannot be blank')
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'enter achievement date',
    }),
  relasi: z.coerce.number({ invalid_type_error: 'please enter a number' }).min(0),
  tanggal_pendanaan_pertama: z.coerce
    .string()
    .min(7)
    .nonempty('Date cannot be blank')
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'enter funding date',
    }),
  tanggal_pendanaan_terakhir: z.coerce
    .string()
    .min(7)
    .nonempty('Date cannot be blank')
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'enter funding date',
    }),
  tanggal_pencapaian_awal: z.coerce
    .string()
    .min(7)
    .nonempty('Date cannot be blank')
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'enter achievement date',
    }),
  total_dana: z.coerce.string({ invalid_type_error: 'please enter a number' }),
  rata_partisipan: z.coerce.number({ invalid_type_error: 'please enter a number' }).min(0),
  kategori: z.string().min(0),
  jumlah_pendanaan: z.coerce.string().min(0),
  jumlah_capaian: z.coerce.string().min(0),
  rasio_dana_per_relasi: z.coerce.string().min(0),
  dana_per_pendanaan: z.coerce.string().min(0),
  populer: z.coerce.number().min(0).max(1),
});

export const transformStartupData = (data: z.infer<typeof startupSchema>) => {
  return {
    umur_milestone_terakhir: formatDate(data.tanggal_pencapaian_terakhir),
    relasi: data.relasi,
    umur_pendanaan_pertama: formatDate(data.tanggal_pendanaan_pertama),
    total_dana: cleanCurrencyToNumber(data.total_dana),
    umur_pendanaan_terakhir: formatDate(data.tanggal_pendanaan_terakhir),
    umur_milestone_pertama: formatDate(data.tanggal_pencapaian_awal),
    rata_partisipan: data.rata_partisipan, 
    kategori: data.kategori,
    jumlah_pendanaan: cleanCurrencyToNumber(data.jumlah_pendanaan),
    jumlah_milestone: cleanCurrencyToNumber(data.jumlah_capaian),
    rasio_dana_per_relasi: cleanCurrencyToNumber(data.rasio_dana_per_relasi),
    dana_per_pendanaan: cleanCurrencyToNumber(data.dana_per_pendanaan),
    populer: data.populer,
  };
};
