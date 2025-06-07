import { NextResponse } from 'next/server';
import { toast } from 'sonner';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const response = await fetch(`${process.env.API_MODEL_STARTUP}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    // console.log(result);
    return NextResponse.json(result);
  } catch (error) {
    toast.error('Terjadi masalah di server' + error);
    return NextResponse.json({ error: 'Internal Server Error', detail: String(error) }, { status: 500 });
  }
}
