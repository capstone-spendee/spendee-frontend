'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader, SendHorizontal } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';
import BackgroundImage from './backgroundMassage';
import { TextAnimate } from '@/components/magicui/text-animate';

export default function ConsultationAi() {
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [chats, setChats] = React.useState<{ sender: 'You' | 'SpendeeBot'; message: string }[]>([{ message: 'Halo! Saya SpendeeBot, Bagaimana saya bisa membantu Anda hari ini?', sender: 'SpendeeBot' }]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message) {
      toast.error('Please input a message');
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
    <div className="flex justify-center items-center ">
      <Card className="w-full max-w-[800px] shadow-none border-none fixed bottom-5 px-2">
        <BackgroundImage />
        <CardHeader>
          <CardTitle className="text-center">SpendeeBot</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 overflow-y-auto ">
          <ScrollArea className="h-170 rounded-md max-h-[580px] ">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`max-w-[60%] w-fit p-2 px-5 mt-2 shadow-sm ${
                  chat.sender === 'You' ? 'ml-auto bg-muted-foreground text-secondary rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-right' : 'mr-auto bg-sidebar-accent rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-left'
                }`}
              >
                {/* <span className="text-sm font-medium">{chat.sender === 'You' ? '' : 'SpendeeBot:'}</span> */}
                <p className="text-sm font-light mt-1 whitespace-pre-wrap">{chat.message}</p>
              </div>
            ))}

            {/* Bubble “Mengetik...” ketika sedang loading */}
            {loading && (
              <div className="max-w-[20%] mr-auto bg-sidebar-accent text-left p-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                {/* <span className="text-sm font-medium">SpendeeBot:</span> */}
                <p className="text-sm mt-1 italic">
                  <TextAnimate
                    animation="fadeIn"
                    by="line"
                    as="p"
                  >
                    Wait...
                  </TextAnimate>
                </p>
              </div>
            )}
          </ScrollArea>
        </CardContent>

        {/* <CardFooter className="p-4 ">
          </CardFooter> */}
        <form
          onSubmit={handleSubmit}
          className="w-full gap-2 flex justify-center"
        >
          <Input
            placeholder="Tanya SpendeeBot..."
            className="p-5 rounded-4xl border-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            type="submit"
            className="rounded-3xl p-5 "
            disabled={loading}
          >
            {loading ? <Loader /> : <SendHorizontal />}
          </Button>
        </form>
      </Card>
    </div>
  );
}
