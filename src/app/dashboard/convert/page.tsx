"use client";

import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowRightLeft } from "lucide-react";

export default function ConverterPage() {
  const [amount, setAmount] = useState("1");
  const [result, setResult] = useState<number>(0);
  const [isIdrToUsd, setIsIdrToUsd] = useState(true);
  const exchangeRate = 0.00006155; // update kurs

  useEffect(() => {
    const value = parseFloat(amount);
    if (!isNaN(value)) {
      const converted = isIdrToUsd
        ? value * exchangeRate
        : value / exchangeRate;
      setResult(Number(converted.toFixed(8)));
    } else {
      setResult(0);
    }
  }, [amount, isIdrToUsd]);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-green-900/10">
      <form className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
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
                className="h-16 text-2xl pr-20 border-2"
                required
              />
              <span className="absolute right-4 flex items-center gap-1 text-lg font-semibold">
                <span role="img" aria-label={isIdrToUsd ? "IDR" : "USD"}>
                  {isIdrToUsd ? "🇮🇩" : "🇺🇸"}
                </span>{" "}
                {isIdrToUsd ? "IDR" : "USD"}
              </span>
            </div>
          </div>
          {/* Arrow */}
          <div
            className="flex items-center justify-center h-16 w-12 cursor-pointer"
            onClick={() => setIsIdrToUsd((prev) => !prev)}
            title="Tukar arah konversi"
          >
            <ArrowRightLeft
              className={`w-7 h-7 transition-transform duration-300 ${
                isIdrToUsd ? "rotate-0" : "rotate-180"
              }`}
            />
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
                value={result.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 8,
                })}
                readOnly
                className="h-16 text-2xl pr-20 border-2 rounded-xl bg-gray-50"
                tabIndex={-1}
              />
              <span className="absolute right-4 flex items-center gap-1 text-lg font-semibold">
                <span role="img" aria-label={isIdrToUsd ? "USD" : "IDR"}>
                  {isIdrToUsd ? "🇺🇸" : "🇮🇩"}
                </span>{" "}
                {isIdrToUsd ? "USD" : "IDR"}
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
