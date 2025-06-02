import z from 'zod';
import { personalitySchema, transformPersonalityData } from './zodSchemas';



export const submitPersonalityData = async (data: z.infer<typeof personalitySchema>) => {
const validated = personalitySchema.parse(data);

  const payload = transformPersonalityData(validated);

  try {
    const response = await fetch('/api/model/personality', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const result = await response.text();
    console.log(result);
    console.log(payload);
    return result;
  } catch (error) {
    console.log('terjadi kesalahan saat mengirim data inputan' + error);
  }
};
