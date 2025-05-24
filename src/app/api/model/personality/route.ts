import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const response = await fetch('https://speende-fitur2-325126223708.us-central1.run.app/predict', {
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
    console.log('terjadi error saat mengirim data ke server' + error);
    return  NextResponse.json({ error: 'Gagal mengirim data ke server' }, { status: 500 });
  }
}


  