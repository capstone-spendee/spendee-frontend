export function formatPersen(value: string): string {
  const numberString = value.replace(/[^,\d]/g, '');
  const split = numberString.split(',');
  const sisa = split[0].length % 2;
  let persen = split[0].substring(0, sisa);
  const ribuan = split[0].substring(sisa).match(/\d{2}/gi);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    persen += separator + ribuan.join('.');
  }

  persen = split[1] !== undefined ? persen + ',' + split[1] : persen;
  return persen ? `${persen}%` : '';
}

export function cleanPercentageToNumber(value: string): number {
  return Number(value.replace(/[^\d,-]/g, '').replace(',', '.'));
}
