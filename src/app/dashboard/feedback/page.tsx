import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function FeedbackForm() {
  return (
    <div>
        <Card className="w-[650px]">
      <CardHeader>
        <CardTitle>Any feedback for Spendee?</CardTitle>
        <CardDescription>We are very open to your feedback.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" placeholder="Enter your email" className='w-[600px]' />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Your feedback</Label>
              <Textarea className='w-[600px]' id="feedback" placeholder="Enter your feedback" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter >
        <Button>Send</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
