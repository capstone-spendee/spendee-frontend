
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import PersonalityForm from "./personality/personalityForm"
import StartupForm from "./startup/startupForm"

export default function Page() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="personality">Personality</TabsTrigger>
        <TabsTrigger value="startup">Startup</TabsTrigger>
      </TabsList>
      <TabsContent value="personality">
        <PersonalityForm />    
      </TabsContent>
      <TabsContent value="startup">
        <StartupForm/>
      </TabsContent>
    </Tabs>
  )
}
