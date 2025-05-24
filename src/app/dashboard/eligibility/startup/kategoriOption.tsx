import { SelectContent, SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select';
import React from 'react';

export default function KategoriSelectItem() {
  return (
    <div>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>kategori</SelectLabel>
          <SelectItem value="advertising">Periklanan</SelectItem>
          <SelectItem value="analytics">Analitik</SelectItem>
          <SelectItem value="automotive">Otomotif</SelectItem>
          <SelectItem value="biotech">Bioteknologi</SelectItem>
          <SelectItem value="cleantech">Cleantech</SelectItem>
          <SelectItem value="consulting">Konsultasi</SelectItem>
          <SelectItem value="ecommerce">E-Commerce</SelectItem>
          <SelectItem value="education">Pendidikan</SelectItem>
          <SelectItem value="enterprise">Perusahaan</SelectItem>
          <SelectItem value="fashion">Fashion</SelectItem>
          <SelectItem value="finance">Keuangan</SelectItem>
          <SelectItem value="games_video">Game & Video</SelectItem>
          <SelectItem value="hardware">Perangkat Keras</SelectItem>
          <SelectItem value="health">Kesehatan</SelectItem>
          <SelectItem value="hospitality">Perhotelan</SelectItem>
          <SelectItem value="manufacturing">Manufaktur</SelectItem>
          <SelectItem value="medical">Medis</SelectItem>
          <SelectItem value="messaging">Pesan</SelectItem>
          <SelectItem value="mobile">Seluler</SelectItem>
          <SelectItem value="music">Musik</SelectItem>
          <SelectItem value="network_hosting">Jaringan & Hosting</SelectItem>
          <SelectItem value="news">Berita</SelectItem>
          <SelectItem value="photo_video">Foto & Video</SelectItem>
          <SelectItem value="public_relations">Hubungan Masyarakat</SelectItem>
          <SelectItem value="real_estate">Properti</SelectItem>
          <SelectItem value="search">Pencarian</SelectItem>
          <SelectItem value="security">Keamanan</SelectItem>
          <SelectItem value="semiconductor">Semikonduktor</SelectItem>
          <SelectItem value="social">Sosial</SelectItem>
          <SelectItem value="software">Perangkat Lunak</SelectItem>
          <SelectItem value="sports">Olahraga</SelectItem>
          <SelectItem value="transportation">Transportasi</SelectItem>
          <SelectItem value="travel">Pariwisata</SelectItem>
          <SelectItem value="web">Website</SelectItem>
          <SelectItem value="other">Lainnya</SelectItem>
        </SelectGroup>
      </SelectContent>
    </div>
  );
}
