'use client';
import AlertDialogResponse from '@/components/dialog';
import TooltipDemo from '@/components/tooltip';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';
import { formatRupiah } from '../formtaIdr';
import KategoriOption from './kategoriOption';
import { submitStartupData } from './startup';
import { startupSchema } from './zodSchemas';

export default function StartupForm() {
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | undefined>();

  const form = useForm<z.infer<typeof startupSchema>>({
    resolver: zodResolver(startupSchema),
    defaultValues: {
      kategori: 'enterprise',
      populer: 1,
      tanggal_pencapaian_terakhir: '',
      tanggal_pendanaan_pertama: '',
      tanggal_pendanaan_terakhir: '',
      tanggal_pencapaian_awal: '',
      total_dana: '',
      jumlah_pendanaan: '',
      jumlah_capaian: '',
      rasio_dana_per_relasi: '',
      dana_per_pendanaan: '',
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
      const response = await submitStartupData(form.getValues());
      console.log(response);
      setResponseMessage(response);
      setAlertOpen(true);
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
            <CardTitle>Startup</CardTitle>
            <CardDescription className="text-muted-foreground ">Check your eligibility for you startup.</CardDescription>
          </div>
          <div className="sm:w-[90px] md:w-[200px]">
            <Progress value={progressPercent}  />
            <p className={`text-xs text-right mt-1  ${progressPercent < 100 ? 'text-muted-foreground' : 'text-green-600'}`}>{progressPercent}%</p>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4 space-x-6 grid grid-cols-2 md:grid-cols-4 pb-4">
                <FormField
                  control={form.control}
                  name="kategori"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-between">
                        kategori <TooltipDemo content="pilih kategori startup" />
                      </FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            className="w-full"
                            id="kategori"
                          >
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>kategori </SelectLabel>
                              <KategoriOption />
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
                  name="total_dana"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>total dana</FormLabel>
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
                  name="jumlah_capaian"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>jumlah capaian</FormLabel>
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
                  name="jumlah_pendanaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>jumlah pendanaan</FormLabel>
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
                  name="tanggal_pencapaian_awal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>tanggal pencapaian awal</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className={cn('w-full py-5 justify-start text-left font-normal', !field.value && 'text-muted-foreground')}
                          >
                            <CalendarIcon />
                            {field.value ? format(new Date(field.value), 'PPP') : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={(selectedDate) => {
                              if (selectedDate) {
                                const fixedDate = new Date(selectedDate);
                                fixedDate.setHours(12, 0, 0, 0);
                                field.onChange(fixedDate);
                              }
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tanggal_pencapaian_terakhir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>tanggal pencapaian terakhir</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className={cn('w-full py-5 justify-start text-left font-normal', !field.value && 'text-muted-foreground')}
                          >
                            <CalendarIcon />
                            {field.value ? format(new Date(field.value), 'PPP') : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={(selectedDate) => {
                              if (selectedDate) {
                                const fixedDate = new Date(selectedDate);
                                fixedDate.setHours(12, 0, 0, 0);
                                field.onChange(fixedDate);
                              }
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tanggal_pendanaan_pertama"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>tanggal pendanaan pertama</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className={cn('w-full py-5 justify-start text-left font-normal', !field.value && 'text-muted-foreground')}
                          >
                            <CalendarIcon />
                            {field.value ? format(new Date(field.value), 'PPP') : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={(selectedDate) => {
                              if (selectedDate) {
                                const fixedDate = new Date(selectedDate);
                                fixedDate.setHours(12, 0, 0, 0);
                                field.onChange(fixedDate);
                              }
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tanggal_pendanaan_terakhir"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>tanggal pendanaan terakhir</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className={cn('w-full py-5 justify-start text-left font-normal', !field.value && 'text-muted-foreground')}
                          >
                            <CalendarIcon />
                            {field.value ? format(new Date(field.value), 'PPP') : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="w-auto p-0"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={(selectedDate) => {
                              if (selectedDate) {
                                const fixedDate = new Date(selectedDate);
                                fixedDate.setHours(12, 0, 0, 0);
                                field.onChange(fixedDate);
                              }
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="populer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>populer</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value.toString()}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger
                            className="w-full"
                            id="populer"
                          >
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>populer</SelectLabel>
                              <SelectItem value="1">Yes</SelectItem>
                              <SelectItem value="0">No</SelectItem>
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
                  name="relasi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex justify-between">
                        relasi*
                        <TooltipDemo content="jumlah relasi startup" />
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
                  name="rata_partisipan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>rata partisipan*</FormLabel>
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
                  name="rasio_dana_per_relasi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>rasio dana per relasi</FormLabel>
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
                  name="dana_per_pendanaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>dana per pendanaan</FormLabel>
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
      </Card>
      <AlertDialogResponse
        responseMessage={responseMessage} // string JSON dari API
        open={alertOpen}
        onOpenChange={setAlertOpen}
      />
    </>
  );
}
