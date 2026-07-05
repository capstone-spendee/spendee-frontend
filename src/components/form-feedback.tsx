'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

export default function FeedbackPage() {
    const [inputs, setInputs] = React.useState({
        // email: '',
        name: '',
        subject: '',
        feedback: ''
    })
    const [loading, setLoading] = React.useState(false)

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

        if(inputs.name !== '' && inputs.subject !== '' && inputs.feedback !== '') {
            setLoading(true)
            try {
                const res = await fetch('/api/form-feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputs)
                })
                setLoading(false)
                if (res.ok) {
                    setInputs({
                        // email: '',
                        name: '',
                        subject: '',
                        feedback: ''
                    })
                }
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
    }
    
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gradient-to-br px-4">
      <Card className="w-full max-w-xl rounded-2xl shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-center">Any feedback for Spendee?</CardTitle>
          <CardDescription className="text-center text-base">
            We are very open to your feedback.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                className="w-full"
                onChange={handleChange}
                value={inputs.email}
                required
                type="email"
              />
            </div> */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="w-full"
                onChange={handleChange}
                value={inputs.name}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Subject"
                className="w-full"
                onChange={handleChange}
                value={inputs.subject}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="feedback">Your feedback</Label>
              <Textarea
                className="w-full min-h-[100px]"
                id="feedback"
                placeholder="Enter your feedback"
                onChange={handleChange}
                value={inputs.feedback}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Sending...' : 'Send Feedback'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
