'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { submitPersonalityData } from './personality';
import { personalitySchema } from './zodSchemas';
import { formatRupiah } from '../formtaIdr';
import { useState } from 'react';
import { formatPersen } from '../formatPersent';
import AlertDialogPersonality from './dialog';
import { toast } from 'sonner';
import { Progress } from '@/components/ui/progress';
import TooltipDemo from '@/components/tooltip';

export default function PersonalityForm() {
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof personalitySchema>>({
    resolver: zodResolver(personalitySchema),
    defaultValues: {
      Tingkat_Pendidikan: 'Sarjana',
      Total_Utang_Terhadap_Pendapatan: '',
      Pendapatan_Bulanan: '',
      Pendapatan_Tahunan: '',
      Suku_Bunga_Yang_Diterapkan: '',
      Jumlah_Pinjaman: '',
      Suku_Bunga_Awal: '',
      Kekayaan_Bersih: '',
      Pembayaran_Pinjaman_Bulanan: '',
      Total_Aset: '',
      Pembayaran_Utang_Bulanan: '',
      Saldo_Tabungan: '',
    },
  });

  const formValues = form.watch();
  const totalFields = Object.keys(formValues).length;
  const filledFields = Object.values(formValues).filter((val) => {
    if (typeof val === 'string') return val.trim() !== '';
    return val !== null && val !== undefined && val !== 0;
  }).length;
  const progressPercent = Math.round((filledFields / totalFields) * 100);

  const onSubmit = async () => {
    setLoading(true);
    toast.info('model sedang memproses data anda...');
    try {
      const response = await submitPersonalityData(form.getValues());
      const result = response?.replace(/^\{"result":"/g, '').replace(/"\}$/, '');
      setResponseMessage(result);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className='flex justify-between'>
          <div>
            <CardTitle>Personality</CardTitle>
            <CardDescription className="text-muted-foreground">Check your eligibility for you personality.</CardDescription>
          </div>
          <div className="sm:w-[90px] md:w-[200px]">
            <Progress value={progressPercent} />
            <p className={`text-xs text-right mt-1  ${progressPercent < 100 ? 'text-muted-foreground' : 'text-chart-2'}`}>{progressPercent}%</p>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-4">
                <FormField
                  control={form.control}
                  name="Total_Utang_Terhadap_Pendapatan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Total Utang Terhadap Pendapatan
                        <TooltipDemo content="Persentase total cicilan utang bulanan Anda dibandingkan dengan pendapatan bulanan kotor Anda." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="0%"
                          step="0.01"
                          onChange={(e) => {
                            const formatted = formatPersen(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Pendapatan_Bulanan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Pendapatan Bulanan
                        <TooltipDemo content="Total pendapatan kotor Anda per bulan (sebelum dipotong pajak/iuran)." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Rp.0"
                          onChange={(e) => {
                            const formatted = formatRupiah(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Pendapatan_Tahunan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Pendapatan Tahunan
                        <TooltipDemo content="Total pendapatan kotor Anda per tahun." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Rp.0"
                          onChange={(e) => {
                            const formatted = formatRupiah(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Suku_Bunga_Yang_Diterapkan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Suku Bunga Yang Diterapkan
                        <TooltipDemo content="Tingkat suku bunga yang akan dikenakan pada pinjaman Anda jika disetujui." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="0%"
                          step="0.01"
                          onChange={(e) => {
                            const formatted = formatPersen(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Jumlah_Pinjaman"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Jumlah Pinjaman
                        <TooltipDemo content="Nominal uang yang Anda ingin pinjam." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Rp.0"
                          onChange={(e) => {
                            const formatted = formatRupiah(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Suku_Bunga_Awal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Suku Bunga Awal
                        <TooltipDemo content="Tingkat suku bunga yang berlaku pada saat pengajuan pinjaman." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="0%"
                          step="0.01"
                          onChange={(e) => {
                            const formatted = formatPersen(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Tingkat_Pendidikan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Tingkat Pendidikan
                        <TooltipDemo content="Jenjang pendidikan terakhir yang telah Anda selesaikan." />
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            className="w-full"
                            id="Tingkat_Pendidikan"
                          >
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Education</SelectLabel>
                              <SelectItem value="SMA">SMA</SelectItem>
                              <SelectItem value="Diploma">Diploma</SelectItem>
                              <SelectItem value="Sarjana">Sarjana</SelectItem>
                              <SelectItem value="Magister">Magister</SelectItem>
                              <SelectItem value="Doktor">Doktor</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Kekayaan_Bersih"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Kekayaan Bersih
                        <TooltipDemo content="Total nilai aset Anda dikurangi total nilai kewajiban (utang) Anda." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Rp.0"
                          onChange={(e) => {
                            const formatted = formatRupiah(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Pembayaran_Pinjaman_Bulanan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Pembayaran Pinjaman Bulanan
                        <TooltipDemo content="Estimasi jumlah cicilan pinjaman yang harus Anda bayar setiap bulan." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Rp.0"
                          onChange={(e) => {
                            const formatted = formatRupiah(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Total_Aset"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Total Aset
                        <TooltipDemo content="Keseluruhan nilai harta benda yang Anda miliki (misalnya, properti, kendaraan, tabungan, investasi)." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Rp.0"
                          onChange={(e) => {
                            const formatted = formatRupiah(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Usia_Pemohon"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Usia Pemohon
                        <TooltipDemo content="Usia Anda saat ini dalam satuan tahun." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Thn."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Skor_Kelayakan_Kredit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Skor Kelayakan Kredit
                        <TooltipDemo content="Indikator numerik yang mencerminkan riwayat dan kemampuan Anda dalam membayar utang." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Pengalaman_Kerja"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Pengalaman Kerja
                        <TooltipDemo content="Durasi total Anda telah bekerja dalam satuan tahun." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="Thn."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Durasi_Sejarah_Kredit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Durasi Sejarah Kredit
                        <TooltipDemo content="Lama waktu riwayat kredit Anda tercatat (misalnya, dari kartu kredit pertama, pinjaman pertama)." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Periode_Pembayaran_Pinjaman"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Periode Pembayaran Pinjaman
                        <TooltipDemo content="Jangka waktu (tenor) pinjaman Anda dalam satuan bulan atau tahun." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Pembayaran_Utang_Bulanan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Pembayaran Utang Bulanan
                        <TooltipDemo content="Total jumlah cicilan utang lain yang harus Anda bayar setiap bulan " />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Rp.0"
                          onChange={(e) => {
                            const formatted = formatRupiah(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Saldo_Tabungan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Saldo Tabungan
                        <TooltipDemo content="Total dana yang Anda miliki di rekening tabungan." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Rp.0"
                          onChange={(e) => {
                            const formatted = formatRupiah(e.target.value);
                            field.onChange(formatted);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Jumlah_Pengecekan_Kredit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Jumlah Pengecekan Kredit
                        <TooltipDemo content=" Berapa kali riwayat kredit Anda telah diperiksa oleh lembaga keuangan dalam periode tertentu." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Jumlah_Tanggungan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Jumlah Tanggungan
                        <TooltipDemo content="Jumlah anggota keluarga atau individu lain yang secara finansial bergantung pada Anda." />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="Jumlah_Jalur_Kredit_Aktif"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex justify-between'>Jumlah Jalur Kredit Aktif
                        <TooltipDemo content="Jumlah fasilitas kredit yang sedang Anda gunakan saat ini " />
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
              >
                {loading ? 'Memprosses...' : 'Check Eligibility'}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
      <AlertDialogPersonality
        responseMessage={responseMessage}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
