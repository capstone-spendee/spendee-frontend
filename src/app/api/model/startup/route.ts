
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  
  try {
    const data = await request.json();
    const response = await fetch('https://speende-1-ml-325126223708.europe-west1.run.app/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
    return NextResponse.json(result);
  } catch (error) {
    console.log('terjadi error saat mengirim data ke server' + error)
    return error;
  }
}
