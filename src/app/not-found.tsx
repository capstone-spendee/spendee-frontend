'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4'>
            <div className='text-center max-w-md space-y-6'>
                <div>
                    <h1 className='text-7xl font-bold text-foreground'>404</h1>
                    <h2 className='text-xl font-medium text-muted-foreground mt-2'> Page not found</h2>
                </div>
                <p className='text-muted-foreground'>The page you are looking for doesn&apos;t exist or has been moved.</p>
                <div className='flex items-center justify-center gap-3'>
                    <Button className='cursor-pointer' variant='secondary' size='sm' onClick={() => window.history.back()}>Go back</Button>
                    <Link href='/'>
                        <Button className='cursor-pointer'>Go to homepage</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}