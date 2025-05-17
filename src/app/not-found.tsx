import foto from '../../public/image/logo.png'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-6xl font-bold text-orange-500'>404</h1>
        <Image src={foto} alt="profile"  width={100} height={100} />
    </div>
  )
}