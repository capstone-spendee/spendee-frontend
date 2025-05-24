import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PersonalityForm from './personality/pesonalityForm';
import StartupForm from './startup/startupForm';

export default function Page() {
  return (
    <Tabs
      defaultValue="startup"
      className="w-full"
    >
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="startup">Startup</TabsTrigger>
        <TabsTrigger value="personality">Personality</TabsTrigger>
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
