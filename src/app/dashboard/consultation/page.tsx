'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader, SendHorizontal } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';

export default function ConsultationAi() {
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [chats, setChats] = React.useState<{ sender: 'You' | 'SpendeeBot'; message: string }[]>([{ message: 'Halo! Saya SpendeeBot, Bagaimana saya bisa membantu Anda hari ini?', sender: 'SpendeeBot' }]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message) { // !message
      // toast.error('Please input a message');
      toast.info('feature sedang dalam pengembangan 😡');
      return;
    }

    const userMessage = message;
    setChats((prev) => [...prev, { sender: 'You', message: userMessage }]);
    setMessage('');

    try {
      setLoading(true);
      const response = await fetch('https://spendeebot-325126223708.us-central1.run.app/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_input: userMessage }),
      });

      const data = await response.json();
      const aiMessage = data.response;

      setChats((prev) => [...prev, { sender: 'SpendeeBot', message: aiMessage }]);
      setLoading(false);
    } catch (error) {
      console.error('Error sending message:', error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center px-2">
      <Card className="w-full max-w-[800px] h-[84vh] shadow-none border-none flex flex-col justify-between bg-transparent">
        <CardHeader>
          <CardTitle className="text-center">SpendeeBot</CardTitle>
        </CardHeader>

        <CardContent className="flex-1 overflow-hidden px-4">
          <ScrollArea className="h-full">
            <div className="flex flex-col space-y-4">
              {chats.map((chat, index) => (
                <div
                  key={index}
                  className={`max-w-[60%] w-fit p-2 px-5 mt-2 shadow-sm ${
                    chat.sender === 'You' ? 'ml-auto bg-muted-foreground text-secondary rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-right' : 'mr-auto bg-sidebar-accent rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-left'
                  }`}
                >
                  <p className="text-sm font-light mt-1 whitespace-pre-wrap">{chat.message}</p>
                </div>
              ))}

              {loading && (
                <div className="max-w-[20%] mr-auto bg-sidebar-accent text-left p-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                  <p className="text-sm mt-1 italic">
                      Wait...
                  </p>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>

        <form
          onSubmit={handleSubmit}
          className="w-full gap-2 flex px-4 "
        >
          <Input
            placeholder="Tanya SpendeeBot... (feature sedang dalam pengembangan)"
            className="flex-1 p-4 rounded-3xl border"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled
          />
          <Button
            type="submit"
            className="rounded-full p-4"
            disabled={loading}
          >
            {loading ? <Loader /> : <SendHorizontal />}
          </Button>
        </form>
      </Card>
    </div>
  );
}
