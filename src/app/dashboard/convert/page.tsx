'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Repeat } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ConverterPage() {
  const [amount, setAmount] = useState('1');
  const [result, setResult] = useState<number>(0);
  const [isIdrToUsd, setIsIdrToUsd] = useState(true);
  const exchangeRate = 0.00006155; // update kurs

  useEffect(() => {
    const value = parseFloat(amount);
    if (!isNaN(value)) {
      const converted = isIdrToUsd ? value * exchangeRate : value / exchangeRate;
      setResult(Number(converted.toFixed(8)));
    } else {
      setResult(0);
    }
  }, [amount, isIdrToUsd]);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 rounded-xl  ">
      <form className="flex flex-col gap-6 ">
        <div className="flex flex-col md:flex-row gap-4 ">
          {/* Input */}
          <div className="flex-1">
            <Label
              htmlFor="amount"
              className="mb-1 block text-base font-medium"
            >
              Jumlah
            </Label>
            <div className="relative flex items-center">
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                className="w-full pr-10 border-2"
                required
              />
              <span className="absolute right-4 flex items-center gap-1 text-lg ">
                <span
                  role="img"
                  aria-label={isIdrToUsd ? 'IDR' : 'USD'}
                >
                  {isIdrToUsd ? '🇮🇩' : '🇺🇸'}
                </span>{' '}
              </span>
            </div>
          </div>
          {/* Arrow */}
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => setIsIdrToUsd((prev) => !prev)}
            title="Tukar arah konversi"
          >
            <Repeat className={`w-7 h-6 transition-transform duration-300 flex items-center ${isIdrToUsd ? 'rotate-0' : 'rotate-180'}`} />
          </div>
          {/* Output */}
          <div className="flex-1">
            <Label
              htmlFor="result"
              className="mb-1 block text-base font-medium"
            >
              Dikonversi menjadi
            </Label>
            <div className="relative flex items-center">
              <Input
                id="result"
                type="text"
                value={result.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 8,
                })}
                readOnly
                className="w-full  pr-10 border-2  "
                tabIndex={-1}
              />
              <span className="absolute right-4 flex items-center gap-1 text-lg ">
                <span
                  role="img"
                  aria-label={isIdrToUsd ? 'USD' : 'IDR'}
                >
                  {isIdrToUsd ? '🇺🇸' : '🇮🇩'}
                </span>{' '}
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
