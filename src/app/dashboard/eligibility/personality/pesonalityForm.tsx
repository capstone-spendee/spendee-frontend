import { DialogUser } from '@/components/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function PersonalityForm() {
  return (
    <>
        <Card className='border-none shadow-none'>
            <CardHeader>
                <CardTitle>Personality</CardTitle>
                <CardDescription className='text-gray-500'>
                Check your eligibility for you personality.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 space-x-6 grid grid-cols-2 md:grid-cols-4 ">
                <div className="space-y-1">
                <Label htmlFor="Total_Utang_Terhadap_Pendapatan">Total Utang Terhadap Pendapatan</Label>
                <Input id="Total_Utang_Terhadap_Pendapatan" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Pendapatan_Bulanan">Pendapatan Bulanan</Label>
                <Input id="Pendapatan_Bulanan" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Pendapatan_Tahunan">Pendapatan Tahunan</Label>
                <Input id="Pendapatan_Tahunan" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Suku_Bunga_Yang_Diterapkan">Suku Bunga Yang Diterapkan</Label>
                <Input id="Suku_Bunga_Yang_Diterapkan" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Jumlah_Pinjaman">Jumlah Pinjaman</Label>
                <Input id="Jumlah_Pinjaman" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Suku_Bunga_Awal">Suku Bunga Awal</Label>
                <Input id="Suku_Bunga_Awal" type="float" />
                </div>
                {/* <div className="space-y-1">
                <Label htmlFor="Tingkat_Pendidikan">Tingkat Pendidikan</Label>
                <Input id="Tingkat_Pendidikan" type="select">
                    <option value="SMA">SMA</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Sarjana">Sarjana</option>
                    <option value="Magister">Magister</option>
                    <option value="Doktor">Doktor</option>
                </Input>
                </div> */}
                <div className="space-y-1">
                <Label htmlFor="Kekayaan_Bersih">Kekayaan Bersih</Label>
                <Input id="Kekayaan_Bersih" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Pembayaran_Pinjaman_Bulanan">Pembayaran Pinjaman Bulanan</Label>
                <Input id="Pembayaran_Pinjaman_Bulanan" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Total_Aset">Total Aset</Label>
                <Input id="Total_Aset" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Usia_Pemohon">Usia Pemohon</Label>
                <Input id="Usia_Pemohon" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Skor_Kelayakan_Kredit">Skor Kelayakan Kredit</Label>
                <Input id="Skor_Kelayakan_Kredit" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Pengalaman_Kerja">Pengalaman Kerja</Label>
                <Input id="Pengalaman_Kerja" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Durasi_Sejarah_Kredit">Durasi Sejarah Kredit</Label>
                <Input id="Durasi_Sejarah_Kredit" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Periode_Pembayaran_Pinjaman">Periode Pembayaran Pinjaman</Label>
                <Input id="Periode_Pembayaran_Pinjaman" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Pembayaran_Utang_Bulanan">Pembayaran Utang Bulanan</Label>
                <Input id="Pembayaran_Utang_Bulanan" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Saldo_Tabungan">Saldo Tabungan</Label>
                <Input id="Saldo_Tabungan" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Jumlah_Pengecekan_Kredit">Jumlah Pengecekan Kredit</Label>
                <Input id="Jumlah_Pengecekan_Kredit" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Jumlah_Tanggungan">Jumlah Tanggungan</Label>
                <Input id="Jumlah_Tanggungan" type="float" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="Jumlah_Jalur_Kredit_Aktif">Jumlah Jalur Kredit Aktif</Label>
                <Input id="Jumlah_Jalur_Kredit_Aktif" type="float" />
                </div>
            </CardContent>
            <CardFooter>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button >Check Eligibility</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogUser />
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    </>
  )
}
