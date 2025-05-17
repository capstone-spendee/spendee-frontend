import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function PersonalityForm() {
  return (
    <>
        <Card>
            <CardHeader>
                <CardTitle>Personality</CardTitle>
                <CardDescription>
                Check your eligibility for you personality.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 space-x-6 flex flex-wrap">
                <div className="space-y-1">
                <Label htmlFor="current">Name</Label>
                <Input id="current" type="name" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Username</Label>
                <Input id="new" type="username" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
                <div className="space-y-1">
                <Label htmlFor="new">Personality</Label>
                <Input id="new" type="personality" />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Check Eligibility</Button>
            </CardFooter>
        </Card>
    </>
  )
}
