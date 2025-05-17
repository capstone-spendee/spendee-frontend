import Image from 'next/image'
import React from 'react'
import logo from '../../../public/image/logo.png'

export default function Dashboard() {
  return (
    <div className='flex flex-col py-9 items-center justify-center'>
        <Image src={logo} alt="profile" width={100} height={100} />
        <p className='text-2xl font-semibold text-gray-400'>Welcome to your dashboard</p>
    </div>
  )
}
