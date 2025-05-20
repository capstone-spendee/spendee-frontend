'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function FeedbackPage() {
    const [inputs, setInputs] = React.useState({
        email: '',
        name: '',
        subject: '',
        feedback: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setInputs((values) => ({
            ...values,
            [id]: value
        }))
        // console.log(inputs)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(inputs.email !== '' && inputs.name !== '' && inputs.subject !== '' && inputs.feedback !== '') {
            try {
                await fetch('/api/form-feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputs)
                })
                // const data = await res.json()
                setInputs({
                    email: '',
                    name: '',
                    subject: '',
                    feedback: ''
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
    
  return (
    <div className='flex justify-around h-full'>
        <Card className="max-w-[650px] w-full ">
      <CardHeader>
        <CardTitle>Any feedback for Spendee?</CardTitle>
        <CardDescription>We are very open to your feedback.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" className='w-full' onChange={handleChange} value={inputs.email}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" className='w-full' onChange={handleChange} value={inputs.name}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Subject" className='w-full' onChange={handleChange} value={inputs.subject}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Your feedback</Label>
              <Textarea className='w-full' id="feedback" placeholder="Enter your feedback" onChange={handleChange} value={inputs.feedback}/>
            </div>
          </div>
        <Button type='submit'>Send Feedback</Button>
        </form>
      </CardContent>
      <CardFooter >
      </CardFooter>
    </Card>
    </div>
  )
}
