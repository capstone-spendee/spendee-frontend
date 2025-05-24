"use client";

import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
import { ArrowRightLeft } from 'lucide-react'

export default function ConverterPage() {
  const [idr, setIdr] = useState('1')
  const [usd, setUsd] = useState<number>(0)
  const exchangeRate = 0.00006113 // update sesuai kurs terbaru

  // Update USD setiap kali IDR berubah
  React.useEffect(() => {
    const idrValue = parseFloat(idr)
    if (!isNaN(idrValue)) {
      setUsd(Number((idrValue * exchangeRate).toFixed(8)))
    } else {
      setUsd(0)
    }
  }, [idr])

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-green-900/10">
      <form className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          {/* IDR Input */}
          <div className="flex-1">
            <Label htmlFor="idr" className="mb-1 block text-base font-medium">Jumlah</Label>
            <div className="relative flex items-center">
              <Input
                id="idr"
                type="number"
                value={idr}
                onChange={e => setIdr(e.target.value)}
                min="0"
                className="h-16 text-2xl pr-20 border-2 "
                required
              />
              <span className="absolute right-4 flex items-center gap-1 text-lg font-semibold">
                <span role="img" aria-label="IDR">🇮🇩</span> IDR
              </span>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center h-16 w-12">
            <ArrowRightLeft className="w-7 h-7 " />
          </div>
          {/* USD Output */}
          <div className="flex-1">
            <Label htmlFor="usd" className="mb-1 block text-base font-medium">Dikonversi menjadi</Label>
            <div className="relative flex items-center">
              <Input
                id="usd"
                type="text"
                value={usd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 8 })}
                readOnly
                className="h-16 text-2xl pr-20 border-2  rounded-xl bg-gray-50"
                tabIndex={-1}
              />
              <span className="absolute right-4 flex items-center gap-1 text-lg font-semibold">
                <span role="img" aria-label="USD">🇺🇸</span> USD
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
