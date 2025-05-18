import { DialogUser } from '@/components/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function StartupForm() {
  return (
    <div>
        <Card>
          <CardHeader>
            <CardTitle>Startup</CardTitle>
            <CardDescription className='text-gray-500'>
              Check your eligibility for you startup.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 space-x-6 grid grid-cols-2 md:grid-cols-4 " >
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Dev spendee" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Startup</Label>
              <Input id="username"  />
            </div>
          </CardContent>
          <CardFooter>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Check Eligibility</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogUser />
                </DialogContent>
                </Dialog>
          </CardFooter>
        </Card>
    </div>
  )
}
