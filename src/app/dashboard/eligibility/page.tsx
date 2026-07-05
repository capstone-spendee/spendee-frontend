import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Rocket, User } from 'lucide-react';
import PersonalityForm from './personality/pesonalityForm';
import StartupForm from './startup/startupForm';

export default function Eligibility() {
  return (
    <Tabs
      defaultValue="startup"
      className="w-full"
    >
      <TabsList className="grid grid-cols-2 content-center ml-5 transition delay-250 w-full max-w-7xl mx-auto">
        <TabsTrigger value="startup" className='gap-3 p-1.5 px-3'><Rocket /> Startup</TabsTrigger>
        <TabsTrigger value="personality" className='gap-3 p-1.5 px-3'><User /> Personality</TabsTrigger>
      </TabsList>
      <TabsContent value="personality">
        <PersonalityForm />
      </TabsContent>
      <TabsContent value="startup">
        <StartupForm />
      </TabsContent>
    </Tabs>
  );
}
