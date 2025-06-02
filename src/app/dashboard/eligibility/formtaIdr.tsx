// utils/formatRupiah.ts
export function formatRupiah(value: string, prefix: string = "Rp."): string {
  const numberString = value.replace(/[^,\d]/g, '');
  const split = numberString.split(',');
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
  return rupiah ? `${prefix}${rupiah}` : '';
}

export const cleanCurrencyToNumber = (value: string): number => {
  const cleaned = value.replace(/[^0-9]/g, "")// contoh: "Rp. 1.000.000" => "1000000"
  return Number(cleaned)//"1000000" => 1000000
}


