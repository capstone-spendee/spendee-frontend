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
            <p className={`text-xs text-right mt-1  ${progressPercent < 100 ? 'text-muted-foreground' : 'text-green-600'}`}>{progressPercent}%</p>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4 space-x-6 grid grid-cols-2 md:grid-cols-4 pb-4">
                <FormField
                  control={form.control}
                  name="Total_Utang_Terhadap_Pendapatan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Utang Terhadap Pendapatan</FormLabel>
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
                      <FormLabel>Pendapatan Bulanan</FormLabel>
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
                      <FormLabel>Pendapatan Tahunan</FormLabel>
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
                      <FormLabel>Suku Bunga Yang Diterapkan</FormLabel>
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
                      <FormLabel>Jumlah Pinjaman</FormLabel>
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
                      <FormLabel>Suku Bunga Awal</FormLabel>
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
                      <FormLabel>Tingkat Pendidikan</FormLabel>
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
                      <FormLabel>Kekayaan Bersih</FormLabel>
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
                      <FormLabel>Pembayaran Pinjaman Bulanan</FormLabel>
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
                      <FormLabel>Total Aset</FormLabel>
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
                      <FormLabel>Usia Pemohon</FormLabel>
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
                      <FormLabel>Skor Kelayakan Kredit</FormLabel>
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
                      <FormLabel>Pengalaman Kerja</FormLabel>
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
                      <FormLabel>Durasi Sejarah Kredit</FormLabel>
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
                      <FormLabel>Periode Pembayaran Pinjaman</FormLabel>
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
                      <FormLabel>Pembayaran Utang Bulanan</FormLabel>
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
                      <FormLabel>Saldo Tabungan</FormLabel>
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
                      <FormLabel>Jumlah Pengecekan Kredit</FormLabel>
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
                      <FormLabel>Jumlah Tanggungan</FormLabel>
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
                      <FormLabel>Jumlah Jalur Kredit Aktif</FormLabel>
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
