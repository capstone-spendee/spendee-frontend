import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { toast } from 'sonner';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const response = await fetch(`${process.env.API_MODEL_PERSONALITY}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString(),
    });
    const responseText = await response.text();
    const $ = cheerio.load(responseText);

    const result = $('h3').text().trim();

    return NextResponse.json({result});
  } catch (error) {
    toast.error('Terjadi masalah di server' + error);
    return  NextResponse.json({ error: 'Gagal mengirim data ke server' }, { status: 500 });
  }
}


  