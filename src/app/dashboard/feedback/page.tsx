import FeedbackPage from "@/components/form-feedback";

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
    <FeedbackPage></FeedbackPage>
  )
}