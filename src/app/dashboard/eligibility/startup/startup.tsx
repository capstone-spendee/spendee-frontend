import z from 'zod';
import { startupSchema, transformStartupData } from './zodSchemas';



export const submitStartupData = async (data: z.infer<typeof startupSchema>) => {
  const validated = startupSchema.parse(data);

  // Transform data
  const payload = transformStartupData(validated);
  try {
    const response = await fetch('/api/model/startup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const result = await response.text();
    console.log('RAW response text:', result);

    console.log(payload);
    console.log('Payload JSON:', JSON.stringify(payload, null, 2));
    return result;
  } catch (error) {
    console.log('terjadi kesalahan saat mengirim data inputan' + error);
  }
};
