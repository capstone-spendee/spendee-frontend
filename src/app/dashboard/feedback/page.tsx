import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function FeedbackForm() {
  return (
    <div className='flex justify-around h-full'>
        <Card className="max-w-[650px] w-full ">
      <CardHeader>
        <CardTitle>Any feedback for Spendee?</CardTitle>
        <CardDescription>We are very open to your feedback.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" placeholder="Enter your email" className='w-full' />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Your feedback</Label>
              <Textarea className='w-full' id="feedback" placeholder="Enter your feedback" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter >
        <Button type='submit'>Send Feedback</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
